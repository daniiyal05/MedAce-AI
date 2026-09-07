import { NextRequest, NextResponse } from "next/server";
import { QuizGenerateSchema } from "@/lib/validations/schemas";
import { generateEmbedding, generateJSON } from "@/lib/ai/gemini";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { getQuestionsForChapter, parseChapterNumber } from "@/lib/chapter-questions";
import { getTextbookContextForChapter } from "@/lib/textbook-reader";
import type { Question, QuizSession } from "@/types/quiz";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = QuizGenerateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { chapter, topic, difficulty, count } = validation.data;
    const chapterNum = parseChapterNumber(chapter);

    // Kick off the auth check immediately — it resolves in the background
    const userPromise = (async () => {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    })();

    let generatedQuestions: Question[] = [];
    const sessionId = crypto.randomUUID();
    let chunkIds: string[] = [];

    // 1. Fetch previously asked question texts for this chapter to prevent question repetition
    let previousQuestionTexts: string[] = [];
    try {
      const { data: pastQs } = await supabaseAdmin
        .from("quiz_questions")
        .select("question_text")
        .eq("chapter_num", chapterNum)
        .order("created_at", { ascending: false })
        .limit(100);

      if (pastQs && pastQs.length > 0) {
        previousQuestionTexts = pastQs.map((q: { question_text: string }) => q.question_text);
      }
    } catch {
      // Optional DB lookup
    }

    // 2. Load reference textbook content directly from rag/textbooks extracted file for this chapter
    let contextText = getTextbookContextForChapter(chapterNum, 24000);

    // Enhance with vector RAG search filtered strictly by chapter_num
    try {
      const embedding = await generateEmbedding(`${topic} Chapter ${chapterNum}`);
      const { data: chunks, error } = await supabaseAdmin.rpc("match_chunks", {
        query_embedding: embedding,
        match_threshold: 0.1,
        match_count: 5,
        filter_chapter: String(chapterNum),
      });

      if (!error && chunks && chunks.length > 0) {
        const ragContent = chunks.map((c: { content: string }) => c.content).join("\n\n");
        contextText = ragContent + "\n\n" + contextText;
        chunkIds = chunks.map((c: { id: string }) => c.id);
      }
    } catch {
      // Vector search optional
    }

    if (!contextText) {
      contextText = `Topic: ${topic}, Chapter ${chapterNum}. Standard MDCAT syllabus guidelines.`;
    }

    // 3. Generate unique, topic-isolated questions using Gemini AI from RAG text
    try {
      const pastQuestionsBlock =
        previousQuestionTexts.length > 0
          ? `PREVIOUSLY ASKED QUESTIONS (DO NOT REPEAT OR GENERATE SIMILAR QUESTIONS TO ANY OF THESE):\n` +
            previousQuestionTexts
              .slice(-40)
              .map((q, i) => `${i + 1}. ${q}`)
              .join("\n") +
            "\n"
          : "";

      const prompt = `
You are an expert medical educator creating high-yield MDCAT (Medical and Dental College Admission Test) Multiple Choice Questions.

CRITICAL MANDATES:
1. STRICT RAG GROUNDING: Generate ALL questions STRICTLY and EXCLUSIVELY from the provided Reference Textbook Content for Chapter ${chapterNum} (${topic}). Base every question, option, and explanation directly on facts in this textbook text.
2. STRICT TOPIC ISOLATION: You are generating questions ONLY for ${topic} (Chapter ${chapterNum}). Do NOT include questions or concepts from any other chapter or topic.
3. NO QUESTION REPETITION: Every single question MUST be unique and cover distinct subtopics. Do NOT repeat previous questions.

Topic: ${topic}
Chapter Number: ${chapterNum}
Difficulty Level: ${difficulty}
Total Questions Required: ${count}

Reference Textbook Content (Chapter ${chapterNum}):
${contextText.slice(0, 18000)}

${pastQuestionsBlock}
Instructions:
1. Generate exactly ${count} NEW, unique, high-yield multiple choice questions testing ${topic} (Chapter ${chapterNum}).
2. Each question MUST cover distinct subtopics and concepts from Chapter ${chapterNum}.
3. Each question MUST have 4 distinct, plausible options labeled A, B, C, D.
4. Include the exact correct answer ("A", "B", "C", or "D").
5. Provide a clear, detailed English explanation (explanationEn).
6. Provide an accurate, high-yield Roman Urdu explanation (explanationUr) written in natural Roman Urdu.
7. Ensure questions match the requested difficulty: ${difficulty}.

Return JSON in this EXACT schema format:
{
  "questions": [
    {
      "questionText": "string",
      "optionA": "string",
      "optionB": "string",
      "optionC": "string",
      "optionD": "string",
      "correctAnswer": "A",
      "explanationEn": "string",
      "explanationUr": "string",
      "difficulty": "Easy"
    }
  ]
}
`;

      const aiResult = await generateJSON<{
        questions: Array<{
          questionText: string;
          optionA: string;
          optionB: string;
          optionC: string;
          optionD: string;
          correctAnswer: "A" | "B" | "C" | "D";
          explanationEn: string;
          explanationUr: string;
          difficulty: "Easy" | "Medium" | "Hard";
        }>;
      }>(prompt);

      if (aiResult && Array.isArray(aiResult.questions) && aiResult.questions.length > 0) {
        const seenTexts = new Set(previousQuestionTexts.map((t) => t.trim().toLowerCase()));
        const uniqueBatch: Question[] = [];

        for (const q of aiResult.questions) {
          const norm = q.questionText.trim().toLowerCase();
          if (!seenTexts.has(norm)) {
            seenTexts.add(norm);
            uniqueBatch.push({
              id: crypto.randomUUID(),
              sessionId,
              questionText: q.questionText,
              optionA: q.optionA,
              optionB: q.optionB,
              optionC: q.optionC,
              optionD: q.optionD,
              correctAnswer: q.correctAnswer,
              explanationEn: q.explanationEn,
              explanationUr: q.explanationUr,
              difficulty:
                q.difficulty || (difficulty === "Mixed" ? (uniqueBatch.length % 2 === 0 ? "Easy" : "Medium") : difficulty),
              topic,
            });
          }
        }
        generatedQuestions = uniqueBatch;
      }
    } catch (aiErr) {
      console.warn("AI generation fallback to chapter RAG question generator:", aiErr);
    }

    // 4. Fallback to Chapter Question Generator with anti-repetition and topic isolation guarantees
    if (generatedQuestions.length === 0) {
      generatedQuestions = getQuestionsForChapter(
        chapterNum,
        topic,
        count,
        previousQuestionTexts
      ).map((q) => ({
        ...q,
        sessionId,
      }));
    }

    // 5. Save session to database if authenticated
    const user = await userPromise;

    if (user) {
      await supabaseAdmin.from("quiz_sessions").insert({
        id: sessionId,
        user_id: user.id,
        topic,
        chapter_num: chapterNum,
        difficulty,
        num_questions: count,
        total_questions: count,
        status: "in-progress",
      });

      const questionRows = generatedQuestions.map((q) => ({
        id: q.id,
        session_id: sessionId,
        question_text: q.questionText,
        option_a: q.optionA,
        option_b: q.optionB,
        option_c: q.optionC,
        option_d: q.optionD,
        correct_answer: q.correctAnswer,
        explanation_en: q.explanationEn,
        explanation_ur: q.explanationUr,
        difficulty: q.difficulty,
        topic: q.topic,
        chapter_num: chapterNum,
        chunk_ids: chunkIds,
      }));

      await supabaseAdmin.from("quiz_questions").insert(questionRows);
    }

    const quizSession: QuizSession = {
      id: sessionId,
      topic,
      chapterNum,
      difficulty,
      numQuestions: count,
      score: null,
      totalQuestions: count,
      status: "in-progress",
      createdAt: new Date().toISOString(),
      questions: generatedQuestions,
      answers: [],
    };

    return NextResponse.json(quizSession);
  } catch (error) {
    console.error("Error generating quiz:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
