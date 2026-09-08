"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui";

const steps = [
  {
    num: "01",
    tag: "chapter selection",
    title: "Choose Any of the 15 Biology Chapters",
    description:
      "Select a chapter from Human Physiology, Modern Topics, or Pharmacology, or let the diagnostic tracker pick your lowest-accuracy topic for focused remediation.",
    pills: ["15 Chapters", "160+ Subtopics", "Custom Question Counts"],
  },
  {
    num: "02",
    tag: "exam simulation",
    title: "Solve Authentic English MCQs",
    description:
      "Practice with questions formatted to mirror test-day conditions, complete with realistic distractors and standard 45-second exam pacing.",
    pills: ["English Interface", "45s Timer Pacing", "PMDC Aligned"],
  },
  {
    num: "03",
    tag: "bilingual remediation",
    title: "Unpack Mistakes in Roman Urdu",
    description:
      "Whenever you miss a question, read the explanation in plain Roman Urdu. Scientific terms stay in English, but the reasoning is explained simply so the concept clicks.",
    pills: ["Code-Mixed Urdu", "Textbook Verified", "Instant Feedback"],
  },
  {
    num: "04",
    tag: "adaptive tracking",
    title: "Auto-Log to Your Weak-Spot Radar",
    description:
      "Your session score updates your chapter accuracy radar automatically, highlighting remaining gaps and feeding your personalized study plan.",
    pills: ["Accuracy Breakdown", "Study Plan Sync", "Targeted Re-tests"],
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-20 sm:py-28 relative bg-[#070b16]/70 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 glass-pill border-white/10 text-slate-300 text-xs font-mono">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            From Diagnostic Practice to{" "}
            <span className="gradient-text">Concept Retention</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            A structured, 4-step learning loop designed to replace blind memorization with
            genuine biological understanding.
          </p>
        </motion.div>

        {/* 4 Step Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c1222]/90 backdrop-blur-xl p-6 flex flex-col justify-between shadow-xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div>
                {/* Header: Large Hollow Number & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-black text-primary-light/40 group-hover:text-primary-light transition-colors">
                    {s.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 leading-snug">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {s.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface text-slate-400 border border-white/5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
