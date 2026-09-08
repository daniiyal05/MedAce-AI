"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Brain,
  BookOpen,
  Check,
  RotateCcw,
  Languages,
  ShieldCheck,
  Layers,
  Activity,
  FileQuestion,
} from "lucide-react";
import { Badge, Button } from "@/components/ui";

const mcqOptions = [
  { id: "A", text: "Voltage-gated K⁺ channels open", isCorrect: false },
  { id: "B", text: "Voltage-gated Na⁺ channels open", isCorrect: true },
  { id: "C", text: "Na⁺/K⁺ ATPase pumps cease operation", isCorrect: false },
  { id: "D", text: "Ca²⁺ leak channels close", isCorrect: false },
];

export default function HeroSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>("B");
  const [explanationLang, setExplanationLang] = useState<"urdu" | "english">("urdu");
  const [trackerLogged, setTrackerLogged] = useState(false);
  const [mobileTab, setMobileTab] = useState<"question" | "explanation">("question");

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
    setTrackerLogged(false);
  };

  const handleLogProgress = () => {
    setTrackerLogged(true);
  };

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-36 pb-16 sm:pb-28">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none aurora-bg opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #14b8a6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        {/* Top Copy Container */}
        <div className="mx-auto max-w-4xl text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          {/* Announcement Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 glass-pill border-white/10 max-w-[95%] sm:max-w-none mx-auto truncate"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-emerald-300 truncate">
              MDCAT Biology Prep
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] sm:text-xs text-slate-300 flex items-center gap-1 font-mono truncate">
              <Languages className="h-3 w-3 text-accent-light shrink-0" />
              <span className="hidden sm:inline">English MCQs + Roman Urdu Explanations</span>
              <span className="sm:hidden">English MCQs + Roman Urdu</span>
            </span>
          </motion.div>

          {/* Editorial Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] px-1"
          >
            Prepare for MDCAT in English.{" "}
            <span className="gradient-text block sm:inline">
              Understand Every Concept in Urdu.
            </span>
          </motion.h1>

          {/* Grounded Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            The real MDCAT is conducted entirely in English—and your practice should be too. But
            when you miss a question, MedAce AI unpacks the biological mechanism in plain Roman
            Urdu so the concept actually clicks.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 w-full max-w-sm sm:max-w-none mx-auto px-2"
          >
            <Link href="/practice" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base shadow-xl shadow-primary/25 hover:shadow-primary/45 flex items-center justify-center gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Start Practice Session
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#syllabus" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto rounded-full px-6 sm:px-7 py-3.5 sm:py-4 font-medium text-sm sm:text-base glass-pill border-white/10 text-white hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4 text-primary" />
                Explore 15 Chapters
              </Button>
            </a>
          </motion.div>

          {/* Grounded Fact Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-muted px-2"
          >
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              PMDC Aligned
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Layers className="h-3.5 w-3.5 text-accent-light" />
              15 Chapters &amp; 160+ Subtopics
            </span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400 font-mono">Free Practice Platform</span>
          </motion.div>
        </div>

        {/* Jawab-AI Inspired Live Product Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto max-w-6xl rounded-2xl sm:rounded-3xl border border-white/15 bg-[#080d1a]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Window Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-surface/60 px-4 sm:px-5 py-3 sm:py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#34d399]" />
              <span className="ml-2 sm:ml-3 font-mono text-[11px] sm:text-xs text-slate-300 truncate max-w-[220px] sm:max-w-none">
                MedAce AI · Live Interactive Demo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-primary/10 text-primary-light border border-primary/20">
                Interactive
              </span>
            </div>
          </div>

          {/* Mobile Segmented Switcher (<lg only) */}
          <div className="p-3 bg-surface/30 border-b border-white/10 lg:hidden">
            <div className="flex rounded-xl bg-surface/80 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setMobileTab("question")}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mobileTab === "question"
                    ? "bg-primary text-black shadow-md font-bold"
                    : "text-muted hover:text-white"
                }`}
              >
                <FileQuestion className="h-3.5 w-3.5" />
                <span>1. Question</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("explanation")}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mobileTab === "explanation"
                    ? "bg-accent/25 text-accent-light border border-accent/40 shadow-md font-bold"
                    : "text-muted hover:text-white"
                }`}
              >
                <Brain className="h-3.5 w-3.5" />
                <span>2. Urdu Explanation</span>
                {selectedOption && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </button>
            </div>
          </div>

          {/* Split Screen Grid */}
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Column: Authentic Exam MCQ (7 cols) */}
            <div
              className={`lg:col-span-7 p-4 sm:p-7 flex flex-col justify-between space-y-5 ${
                mobileTab === "explanation" ? "hidden lg:flex" : "flex"
              }`}
            >
              <div>
                {/* Question Metadata */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/5 text-xs">
                  <div className="flex items-center gap-2">
                    <Badge variant="ai" className="font-mono text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5">
                      Ch 5 • Nervous System
                    </Badge>
                    <span className="text-[11px] text-muted hidden sm:inline">Subtopic: Action Potential</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">Q 3 of 10</span>
                </div>

                {/* Question Stem */}
                <div className="mt-4 mb-5">
                  <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                    During the depolarization phase of a nerve impulse, which membrane event occurs
                    first?
                  </p>
                </div>

                {/* MCQ Choices */}
                <div className="space-y-2.5">
                  {mcqOptions.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    const isCorrect = opt.isCorrect;

                    let btnStyles =
                      "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/5";

                    if (isSelected) {
                      if (isCorrect) {
                        btnStyles =
                          "border-emerald-500/60 bg-emerald-950/30 text-emerald-200 shadow-md shadow-emerald-500/10";
                      } else {
                        btnStyles =
                          "border-rose-500/60 bg-rose-950/30 text-rose-200 shadow-md shadow-rose-500/10";
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleOptionClick(opt.id)}
                        className={`w-full flex items-center justify-between rounded-xl border px-3 sm:px-4 py-3 text-left text-xs sm:text-sm transition-all duration-150 cursor-pointer min-h-[46px] ${btnStyles}`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold border transition-colors ${
                              isSelected && isCorrect
                                ? "bg-emerald-500 border-emerald-400 text-black font-extrabold"
                                : isSelected && !isCorrect
                                ? "bg-rose-500 border-rose-400 text-white"
                                : "bg-white/5 border-white/10 text-muted"
                            }`}
                          >
                            {isSelected && isCorrect ? (
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            ) : (
                              opt.id
                            )}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </div>

                        {isSelected && isCorrect && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 shrink-0 ml-2">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Correct</span>
                          </span>
                        )}
                        {isSelected && !isCorrect && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-rose-400 shrink-0 ml-2">
                            <XCircle className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Review</span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Test Pacing Bar & Mobile Switcher Shortcut */}
              <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
                <div className="flex items-center justify-between w-full sm:w-auto text-[11px]">
                  <span className="font-mono text-slate-400">Pacing: 45s / Question</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedOption("B");
                      setTrackerLogged(false);
                    }}
                    className="hover:text-white flex items-center gap-1 cursor-pointer sm:hidden text-slate-400"
                  >
                    <RotateCcw className="h-3 w-3" /> Reset
                  </button>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Shortcut to explanation on mobile */}
                  <button
                    type="button"
                    onClick={() => setMobileTab("explanation")}
                    className="lg:hidden w-full sm:w-auto py-2 px-3 rounded-lg bg-accent/15 border border-accent/30 text-accent-light text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Urdu Concept Breakdown</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedOption("B");
                      setTrackerLogged(false);
                    }}
                    className="hover:text-white hidden sm:flex items-center gap-1 cursor-pointer text-slate-400 text-xs"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="h-3 w-3" /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Jawab AI Style Inspector & Urdu Explanation (5 cols) */}
            <div
              className={`lg:col-span-5 p-4 sm:p-7 bg-[#060a14]/60 flex flex-col justify-between space-y-5 ${
                mobileTab === "question" ? "hidden lg:flex" : "flex"
              }`}
            >
              <div>
                {/* Inspector Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-accent-light" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Cognitive Assistant
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">Pipeline Active</span>
                </div>

                {/* Pipeline Verification Checks */}
                <div className="mt-3.5 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                    <span className="text-muted truncate mr-2">
                      Syllabus · <span className="text-slate-300">Ch 5: Nervous System</span>
                    </span>
                    <span className="text-emerald-400 shrink-0">matched ✓</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                    <span className="text-muted truncate mr-2">
                      Textbook · <span className="text-slate-300">Punjab &amp; Sindh Biology</span>
                    </span>
                    <span className="text-emerald-400 shrink-0">verified ✓</span>
                  </div>
                </div>

                {/* Explanation Card with Language Switcher */}
                <div className="mt-4 rounded-xl border border-accent/20 bg-accent/[0.04] p-3.5 sm:p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-semibold text-accent-light flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Explanation
                    </span>

                    {/* Language Switcher Tabs */}
                    <div className="flex rounded-lg bg-surface p-0.5 border border-white/10">
                      <button
                        type="button"
                        onClick={() => setExplanationLang("urdu")}
                        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-all cursor-pointer ${
                          explanationLang === "urdu"
                            ? "bg-accent/20 text-accent-light border border-accent/40 font-semibold shadow-sm"
                            : "text-muted hover:text-white"
                        }`}
                      >
                        Roman Urdu
                      </button>
                      <button
                        type="button"
                        onClick={() => setExplanationLang("english")}
                        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-all cursor-pointer ${
                          explanationLang === "english"
                            ? "bg-primary/20 text-primary-light border border-primary/40 font-semibold shadow-sm"
                            : "text-muted hover:text-white"
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Explanation Content */}
                  <AnimatePresence mode="wait">
                    {explanationLang === "urdu" ? (
                      <motion.div
                        key="urdu"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="text-xs text-slate-200 leading-relaxed space-y-1"
                      >
                        <p className="font-semibold text-accent-light text-[11px]">
                          💡 Roman Urdu Mechanism:
                        </p>
                        <p>
                          Jab neuron ko threshold stimulus milta hai (-55mV), toh sab se pehle{" "}
                          <strong className="text-primary-light">voltage-gated Na⁺ channels</strong>{" "}
                          khulte hain. Na⁺ ions tezi se axoplasm ke andar flood karte hain jis se membrane
                          depolarize (+30mV) ho jati hai. K⁺ channels baad mein repolarization ke liye
                          khulte hain.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="english"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="text-xs text-slate-200 leading-relaxed space-y-1"
                      >
                        <p className="font-semibold text-primary-light text-[11px]">
                          💡 Textbook English Rationale:
                        </p>
                        <p>
                          Depolarization begins when threshold potential (-55mV) triggers the opening
                          of <strong className="text-primary-light">voltage-gated Na⁺ channels</strong>.
                          Sodium ions rush into the axon down their electrochemical gradient.
                          Voltage-gated K⁺ channels open afterward during repolarization.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Button & Tracker Log */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleLogProgress}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.99] transition-all cursor-pointer min-h-[44px]"
                >
                  <Activity className="h-4 w-4" />
                  {trackerLogged ? "Logged to Weak-Spot Tracker ✓" : "Log Concept to Diagnostic Tracker"}
                </button>

                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-muted px-1">
                  <span>Chapter Mastery:</span>
                  <span className={trackerLogged ? "text-emerald-400 font-bold" : "text-slate-400"}>
                    {trackerLogged ? "Nervous System: 78% (Updated)" : "Nervous System: 68%"}
                  </span>
                </div>

                {/* Back to question button on mobile */}
                <button
                  type="button"
                  onClick={() => setMobileTab("question")}
                  className="lg:hidden w-full text-center py-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ← Back to Question
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
