"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  BookOpen,
  Target,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui";

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="ai" className="px-3.5 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built Around the Reality of{" "}
            <span className="gradient-text">MDCAT Preparation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Every feature in MedAce AI directly addresses a specific hurdle in mastering Pakistan&apos;s
            pre-medical entrance exam.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Featured Card — Bilingual Explanation Engine (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1427]/90 via-[#0a0f1d]/90 to-[#0c1427]/90 backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 text-accent-light">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      The Bilingual Explanation Layer
                    </h3>
                    <p className="text-xs text-accent-light font-mono">
                      English Nomenclature + Roman Urdu Reasoning
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase text-muted px-2.5 py-1 rounded bg-white/5 border border-white/5">
                  Core Feature
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Technical biological terms—like <em>pepsinogen</em>, <em>glomerular filtration</em>,
                and <em>action potential</em>—remain in English to preserve test-day familiarity.
                The causal logic connecting them is explained in natural Roman Urdu so the mechanism
                makes intuitive sense.
              </p>

              {/* Sample Live Breakdown Box */}
              <div className="rounded-xl bg-[#060a14] border border-white/10 p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-muted pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-primary-light">
                    <Activity className="h-3.5 w-3.5" />
                    Chapter 1: Digestive System • Enzyme Activation
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">Roman Urdu Preview</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  &quot;Pepsinogen inactive precursor form mein secrete hota hai taake stomach ki apni
                  mucosal lining digest na ho sake. Jab parietal cells se HCl release hota hai, toh low
                  pH (1.5–2) par pepsinogen active <strong className="text-primary-light">pepsin</strong>{" "}
                  mein convert ho jata hai.&quot;
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-muted">
              <span>Authentic English MCQs with instant Urdu conceptual clarity</span>
              <span className="text-primary-light flex items-center gap-1 font-medium font-mono text-[11px]">
                Active on all 15 Chapters
              </span>
            </div>
          </motion.div>

          {/* Card 2: RAG Grounding (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="md:col-span-4 rounded-3xl border border-white/10 bg-[#0b1020]/90 backdrop-blur-2xl p-7 flex flex-col justify-between shadow-2xl hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 border border-primary/30 text-primary-light mb-5">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Textbook Grounding</h3>
              <p className="text-xs text-emerald-400 font-mono mb-3">ZERO UNGROUNDED FACTS</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Question generation and validation reference the official textbook chapters used across
                provincial boards in Pakistan, strictly aligned with the current PMDC curriculum.
              </p>

              <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-muted text-[10px]">
                  <span>Curriculum: PMDC Biology</span>
                  <span className="text-emerald-400">15 Chapters</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Punjab, Sindh &amp; Federal Textbook Board alignment
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-muted">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              Covers 160+ core subtopics
            </div>
          </motion.div>

          {/* Card 3: Adaptive Weak-Spot Tracker (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="md:col-span-6 rounded-3xl border border-white/10 bg-[#0b1020]/90 backdrop-blur-2xl p-7 flex flex-col justify-between shadow-2xl hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mb-5">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Adaptive Weak-Spot Tracking</h3>
              <p className="text-xs text-amber-400 font-mono mb-3">DIAGNOSTIC DASHBOARD</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Your practice performance is categorized by chapter and subtopic. Instead of guessing
                what to review, the dashboard surfaces exactly where your accuracy drops below threshold.
              </p>

              {/* Sample Visual Tracker Preview */}
              <div className="space-y-2 text-xs">
                {[
                  { chapter: "Endocrine System", accuracy: 88, status: "Mastered" },
                  { chapter: "Nervous System", accuracy: 68, status: "Needs Practice" },
                  { chapter: "Immunity", accuracy: 48, status: "High Priority Weak Spot" },
                ].map((item) => (
                  <div key={item.chapter} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-200">{item.chapter}</span>
                      <span className="font-mono text-muted">{item.accuracy}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.accuracy >= 75
                            ? "bg-emerald-500"
                            : item.accuracy >= 60
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                        style={{ width: `${item.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-muted">
              <span className="text-primary-light font-mono text-[11px]">
                Auto-updates after every practice session
              </span>
            </div>
          </motion.div>

          {/* Card 4: AI Dynamic Study Plan (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="md:col-span-6 rounded-3xl border border-white/10 bg-[#0b1020]/90 backdrop-blur-2xl p-7 flex flex-col justify-between shadow-2xl hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 mb-5">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Personalized Study Plan Generator</h3>
              <p className="text-xs text-purple-400 font-mono mb-3">CUSTOM REVISION TIMETABLE</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Input your planned exam date and available daily study time. Google Gemini constructs a
                realistic week-by-week revision schedule calibrated to your current diagnostic gaps.
              </p>

              <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between items-center text-muted text-[11px]">
                  <span>Custom Schedule</span>
                  <span className="text-purple-300 font-mono font-semibold">Gemini API Powered</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Allocates more sessions to low-accuracy chapters while maintaining review sets for
                  mastered topics.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-muted">
              <span className="text-primary-light font-mono text-[11px]">
                Accessible via Study Plan tab in app
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
