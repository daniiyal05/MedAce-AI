"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Badge, Card } from "@/components/ui";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Cpu,
  Sparkles,
  TrendingUp,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Zap,
  Target,
  Layers,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Medical Textbook RAG Ingestion",
    description:
      "We index official provincial textbooks (Punjab, Sindh, KPK, Federal) into high-yield vector embeddings. Every MCQ generated is verified against real MDCAT curriculum standards.",
    details: [
      "PMDC-aligned subject weightage mapping",
      "Chapter and topic granular tagging",
      "Zero hallucination guarantee using strict grounding",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Adaptive MCQ Generation & Difficulty Scaling",
    description:
      "Our AI engine dynamically calibrates question difficulty based on your active accuracy level. If you master fundamental concepts, you get challenged with application-level clinical scenarios.",
    details: [
      "Real-time IRT (Item Response Theory) estimation",
      "Topic-level difficulty auto-adjustment",
      "Timed exam simulation mode",
    ],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Bilingual & Urdu AI Explanations",
    description:
      "Stuck on a tricky question? MedAce AI breaks down every distractor option and provides clear conceptual explanations in both English and Roman Urdu.",
    details: [
      "Step-by-step option breakdown (Why A is right, Why B is wrong)",
      "Roman Urdu explanations tailored for Pakistani students",
      "Textbook reference citation with exact chapter context",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Weak-Spot Analytics & Automated Re-Quizzing",
    description:
      "Track your mastery curve across Biology, Chemistry, Physics, and English. MedAce AI identifies your weak subtopics and schedules spaced revision sessions.",
    details: [
      "Subtopic mastery heatmap visualization",
      "Automatic weak-spot revision queues",
      "Exam readiness score estimation",
    ],
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Instant AI Feedback",
    desc: "No waiting for answer keys. Get instant explanations after every single MCQ.",
  },
  {
    icon: Target,
    title: "98%+ Exam Alignment",
    desc: "Engineered specifically for PMDC / MDCAT examination patterns and past papers.",
  },
  {
    icon: Layers,
    title: "All 5 Subjects Covered",
    desc: "Comprehensive coverage for Biology, Chemistry, Physics, English, and Logical Reasoning.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0 gradient-mesh opacity-60" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #14b8a6 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Badge variant="ai" className="px-3 py-1 text-xs">
                <Brain className="h-3.5 w-3.5" />
                The MedAce AI Engine
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              How MedAce AI <span className="gradient-text">Transforms Your Prep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
            >
              Combining textbook Retrieval-Augmented Generation (RAG) with adaptive AI modeling to create Pakistan’s most accurate MDCAT prep platform.
            </motion.p>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    variant="elevated"
                    padding="lg"
                    className="relative overflow-hidden border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className={`grid md:grid-cols-12 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                      <div className="md:col-span-7 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black gradient-text font-mono">
                            {step.number}
                          </span>
                          <div className="h-8 w-px bg-white/10" />
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-text">
                          {step.title}
                        </h2>

                        <p className="text-muted leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>

                        <ul className="space-y-2.5 pt-2">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-5 flex justify-center">
                        <div className="w-full bg-surface-dark/80 rounded-2xl border border-white/5 p-6 relative overflow-hidden group">
                          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                          <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between text-xs text-muted">
                              <span>System Module</span>
                              <Badge variant="default">{step.number}</Badge>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent"
                                style={{ width: `${(idx + 1) * 25}%` }}
                              />
                            </div>
                            <div className="p-3 rounded-lg bg-bg/50 border border-white/5 text-xs font-mono text-muted space-y-1">
                              <p className="text-primary font-semibold">{"// Live Diagnostic Execution"}</p>
                              <p>&gt; Indexing concepts...</p>
                              <p>&gt; Calculating accuracy weight...</p>
                              <p className="text-success">&gt; Ready for student interaction</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Key Highlights Grid */}
        <section className="py-16 bg-surface/30 border-y border-white/5 my-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-3">
                Why Students Trust MedAce AI
              </h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
                Purpose-built features designed specifically around the challenges of PMDC MDCAT preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Card key={i} variant="elevated" padding="md" className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-text">{h.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{h.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Card variant="elevated" padding="lg" className="text-center relative overflow-hidden bg-gradient-to-b from-surface to-surface/80 border-primary/20">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Ready to Experience AI-Powered Prep?
              </h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
                Join thousands of pre-medical students across Pakistan preparing smarter and boosting their MDCAT scores.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link href="/signup">
                  <Button size="lg" glow>
                    Start Free Practice Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/syllabus">
                  <Button variant="ghost" size="lg">
                    View MDCAT Syllabus
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
