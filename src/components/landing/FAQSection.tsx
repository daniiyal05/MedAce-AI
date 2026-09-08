"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui";

const faqs = [
  {
    num: "01",
    q: "What is MedAce AI and how is it different from normal question banks?",
    a: "MedAce AI is an adaptive prep coach for Pakistan's MDCAT pre-medical entrance exam. Unlike static PDF booklets or generic question dumps, MedAce combines authentic English MCQs with an on-demand Roman Urdu explanation layer, automatic weak-spot tracking across 15 chapters, and custom revision planning powered by Google Gemini.",
  },
  {
    num: "02",
    q: "Why are the test questions in English if the explanations are in Urdu?",
    a: "The official MDCAT conducted by PMDC is 100% in English. Practicing with English questions builds essential exam muscle memory, reading speed, and vocabulary. However, when you miss a question, cognitive science demonstrates that unpacking the underlying biological mechanism in your primary spoken language (Urdu-English code-mix) produces much deeper understanding without academic confusion.",
  },
  {
    num: "03",
    q: "Which textbook boards and chapters are covered?",
    a: "MedAce AI covers the complete 15-chapter PMDC Biology syllabus (Human Physiology Ch 1–8, Modern Topics Ch 9–14, and Pharmacology Ch 15). Question generation and validation reference the standard Punjab and Sindh Textbook Board biology syllabi.",
  },
  {
    num: "04",
    q: "How does the Adaptive Weak-Spot Tracker work?",
    a: "As you solve questions, your results are categorized by chapter and subtopic. The dashboard automatically calculates your accuracy rates and highlights chapters where you score below 70%, allowing you to target your study time on actual gaps rather than repeating topics you've already mastered.",
  },
  {
    num: "05",
    q: "Is MedAce AI free to use for students?",
    a: "Yes. Our core mission is to make high-quality diagnostic MDCAT preparation accessible to every ambitious student in Pakistan regardless of their location or background. You can sign up and practice chapters without any paywalls.",
  },
  {
    num: "06",
    q: "Does MedAce AI replace my textbooks?",
    a: "No. Your official provincial textbooks are the foundational source of truth for the exam. MedAce AI serves as your practice and retention coach—testing your active recall, diagnosing gaps, and explaining tough concepts when you get stuck.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" ref={ref} className="py-16 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-3.5 sm:px-6 lg:px-8">
        {/* Jawab-AI Style 2-Column FAQ Layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Left Column: Title & CTA */}
          <div className="lg:sticky lg:top-32 h-fit space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass-pill border-white/10 text-slate-300 text-xs font-mono">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              Frequently Asked
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frequently<br className="hidden sm:inline" />
              <span className="gradient-text sm:ml-0 ml-1.5">Asked Questions.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Honest answers about syllabus alignment, the bilingual methodology, and how MedAce AI
              supports your prep.
            </p>
            <div className="pt-1 sm:pt-2">
              <Link href="/practice" className="inline-block w-full sm:w-auto">
                <Button size="md" className="w-full sm:w-auto rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
                  Start Practicing Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Numbered Accordions */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.num}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-primary/40 bg-[#0c1222]/95 shadow-xl"
                      : "border-white/10 bg-[#070b16]/60 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-3 min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-primary-light/70 shrink-0 mt-0.5 sm:mt-0">
                        {faq.num}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-white leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border transition-transform duration-200 shrink-0 ${
                        isOpen
                          ? "rotate-180 bg-primary/15 border-primary/40 text-primary-light"
                          : "border-white/10 text-muted"
                      }`}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pl-9 sm:pl-10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
