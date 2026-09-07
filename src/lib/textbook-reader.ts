import fs from "fs";
import path from "path";

const TEXTBOOKS_DIR = path.join(process.cwd(), "rag", "textbooks");

/**
 * Chapter contents are immutable at runtime — read each file once per server
 * process instead of hitting the disk synchronously on every quiz request.
 */
const chapterContentCache = new Map<number, string>();

function loadChapterContent(chapterNum: number): string {
  const cached = chapterContentCache.get(chapterNum);
  if (cached !== undefined) return cached;

  let content = "";
  try {
    if (fs.existsSync(TEXTBOOKS_DIR)) {
      const files = fs.readdirSync(TEXTBOOKS_DIR);
      // Regex matches Chapter_<chapterNum> followed by non-digit char (e.g. Chapter_1_, Chapter_1 , Chapter_1., Chapter_8,)
      const regex = new RegExp(`^chapter_${chapterNum}[^0-9]`, "i");
      const match = files.find((file) => regex.test(file.toLowerCase().trim()));

      if (match) {
        content = fs.readFileSync(path.join(TEXTBOOKS_DIR, match), "utf-8") || "";
      }
    }
  } catch (err) {
    console.error(`Error reading textbook for chapter ${chapterNum}:`, err);
    content = "";
  }

  chapterContentCache.set(chapterNum, content);
  return content;
}

/**
 * Finds and reads the textbook extracted file for a given chapter number (1-15).
 * Returns up to maxChars of RAG textbook content for that chapter.
 */
export function getTextbookContextForChapter(chapterNum: number, maxChars = 24000): string {
  const content = loadChapterContent(chapterNum);
  if (!content) return "";

  if (content.length <= maxChars) {
    return content;
  }

  // Pick a random or balanced starting window across subtopics
  const randomOffset = Math.floor(Math.random() * Math.max(0, content.length - maxChars));
  return content.slice(randomOffset, randomOffset + maxChars);
}
