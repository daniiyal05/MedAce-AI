"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { mdcTopics } from "@/lib/topics";

const categories = [
  { id: "all", label: "All 15 Chapters" },
  { id: "Human Physiology", label: "Human Physiology (Ch 1–8)" },
  { id: "Modern Topics", label: "Modern Topics (Ch 9–14)" },
  { id: "Pharmacology", label: "Pharmacology (Ch 15)" },
];

export default function SyllabusSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTopics = mdcTopics.filter((topic) => {
    if (selectedCategory === "all") return true;
    return topic.category === selectedCategory;
  });

  return (
    <section id="syllabus" ref={ref} className="py-16 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="default" className="px-3 py-1 text-xs border border-white/10 bg-white/5 font-mono">
            <BookOpen className="h-3.5 w-3.5 text-primary-light" />
            PMDC MDCAT Curriculum
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Complete 15-Chapter <span className="gradient-text">Biology Syllabus</span>
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed px-2">
            Biology accounts for over 40% of the MDCAT exam weightage. Review all 15 chapters and
            160+ subtopics mapped directly from the syllabus.
          </p>
        </motion.div>

        {/* Category Filters (Horizontally Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar sm:justify-center px-1 mb-8 sm:mb-12 -mx-3.5 sm:mx-0 px-3.5 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-primary text-black font-bold shadow-md shadow-primary/25 scale-102"
                  : "glass-pill text-muted hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredTopics.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 6) * 0.04, duration: 0.3 }}
            >
              <Link
                href="/practice"
                className="group block rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-xl p-4 sm:p-5 hover:border-primary/40 hover:bg-[#0e162b] transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.99]"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-primary/15 border border-primary/25 font-mono text-xs font-bold text-primary-light group-hover:scale-110 transition-transform">
                    {topic.chapterNum < 10 ? `0${topic.chapterNum}` : topic.chapterNum}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-primary-light transition-colors line-clamp-1 mb-2">
                  {topic.name}
                </h3>

                <div className="flex items-center justify-between text-xs text-muted pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Layers className="h-3.5 w-3.5 text-slate-400" />
                    {topic.subtopicsCount} Subtopics
                  </span>
                  <span className="text-primary-light group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium font-mono text-[11px]">
                    Practice <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 sm:mt-12 text-center px-2">
          <Link href="/practice" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full px-6 py-3 text-xs sm:text-sm glass-pill border-white/10">
              <Sparkles className="h-4 w-4 text-primary" />
              Practice Chapters in Adaptive Mode
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
