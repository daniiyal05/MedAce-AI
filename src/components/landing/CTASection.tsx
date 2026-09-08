"use client";

import { Button } from "@/components/ui";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Layers, BookOpen } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-28 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-6xl px-3.5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#0c1427]/95 to-[#060912]/95 shadow-2xl p-6 sm:p-14 text-center"
        >
          {/* Laser Border Accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Micro Tag */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass-pill border-white/10 mb-5 text-[11px] sm:text-xs font-mono text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-primary-light" />
            Adaptive Biology Preparation
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight mb-4">
            Ready to Study Smarter for the{" "}
            <span className="gradient-text">MDCAT?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-7 px-1">
            Experience authentic English MCQs with instant Roman Urdu conceptual explanations.
            Pinpoint your weak chapters and master high-yield topics without friction.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md mx-auto w-full px-1">
            <Link href="/practice" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 flex items-center justify-center gap-2"
              >
                Start Practice Session
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto rounded-full px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium glass-pill border-white/10 text-white hover:bg-white/10"
              >
                Create Account
              </Button>
            </Link>
          </div>

          {/* Reassurance Feature Strip */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-muted">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              PMDC Syllabus Aligned
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Layers className="h-3.5 w-3.5 text-primary" />
              15 Chapters
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <BookOpen className="h-3.5 w-3.5 text-accent-light" />
              Free Practice Tier
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
