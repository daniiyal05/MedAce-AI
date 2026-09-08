"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Languages,
  Target,
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui";

const problems = [
  {
    icon: Languages,
    badge: "Cognitive Gap",
    title: "The Language Friction Barrier",
    description:
      "MDCAT is conducted in English, so students must practice in English. But when explanations are also delivered in dense academic English, students end up memorizing wording rather than truly understanding the biological process.",
    solution: "English test questions paired with code-mixed Roman Urdu conceptual explanations.",
  },
  {
    icon: Target,
    badge: "Diagnostic Gap",
    title: "The Unguided Practice Dilemma",
    description:
      "Solving 1,000 MCQs from a printed booklet gives you a rough percentage, but it cannot tell you which specific subtopics (like Action Potential vs. Synaptic Transmission) are repeatedly costing you marks.",
    solution: "Automatic tracking by chapter and subtopic to direct future practice where it matters.",
  },
  {
    icon: BookOpen,
    badge: "Syllabus Gap",
    title: "Outdated Question Banks",
    description:
      "Static past paper booklets often feature obsolete questions or concepts that have been removed from the current PMDC Biology curriculum, wasting critical study time.",
    solution: "Strict RAG retrieval grounded in current official provincial textbook content.",
  },
];

const comparisonPoints = [
  {
    metric: "Language Layer",
    traditional: "English-only explanations in dense academic prose",
    medace: "English MCQs with on-demand Roman Urdu conceptual breakdowns",
  },
  {
    metric: "Weak-Spot Identification",
    traditional: "Manual guesswork through hundreds of marked pages",
    medace: "Automatic chapter accuracy tracking and weak-spot detection",
  },
  {
    metric: "Syllabus Alignment",
    traditional: "Static booklets often including outdated past syllabus items",
    medace: "Grounded directly in official PMDC textbook chapters",
  },
  {
    metric: "Study Planning",
    traditional: "Fixed rigid schedules that don't adapt to student gaps",
    medace: "Custom study plans generated from your exam date and weak chapters",
  },
  {
    metric: "Accessibility",
    traditional: "Costly academy fees clustered in major cities",
    medace: "Open, web-based practice available to every student across Pakistan",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="methodology" ref={ref} className="py-16 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass-pill border-white/10 text-slate-300 text-xs font-mono">
            <HelpCircle className="h-3.5 w-3.5 text-primary" />
            The Pre-Med Challenge
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Generic Practice{" "}
            <span className="gradient-text">Falls Short</span>
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed px-2">
            MDCAT Biology covers over 160 subtopics under intense time pressure. Here is how
            MedAce AI addresses the genuine structural challenges pre-medical students face.
          </p>
        </motion.div>

        {/* 3 Problem Bento Cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c1222]/80 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary-light">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {p.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/10 text-xs text-primary-light font-medium flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{p.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#090e1c]/90 backdrop-blur-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-5 sm:p-7 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            <div>
              <h3 className="text-base sm:text-xl font-bold text-white">
                Traditional Question Banks vs. <span className="gradient-text">MedAce AI</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-muted mt-0.5">
                Built specifically around how Pakistani students learn and retain medical concepts.
              </p>
            </div>
            <Badge variant="ai" className="self-start sm:self-auto px-2.5 py-0.5 text-[11px]">
              <Sparkles className="h-3 w-3" />
              Adaptive Framework
            </Badge>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonPoints.map((row, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 hover:bg-white/[0.02] transition-colors space-y-2 md:space-y-0 md:grid md:grid-cols-12 md:items-center md:gap-3"
              >
                <div className="md:col-span-4 font-semibold text-white text-xs sm:text-sm flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{row.metric}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-rose-300/90 text-xs sm:text-sm pl-3 md:pl-0">
                  <XCircle className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-mono text-[10px] text-rose-400 font-bold mr-1.5">
                      Traditional:
                    </span>
                    <span className="leading-snug">{row.traditional}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-emerald-300 text-xs sm:text-sm font-medium pl-3 md:pl-0">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-mono text-[10px] text-emerald-400 font-bold mr-1.5">
                      MedAce AI:
                    </span>
                    <span className="leading-snug">{row.medace}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
