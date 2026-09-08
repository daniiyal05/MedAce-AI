"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BookOpen, Layers, Languages, Sparkles } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: 15,
    suffix: "",
    label: "Biology Chapters",
    subtext: "100% PMDC syllabus catalog",
  },
  {
    icon: Layers,
    value: 160,
    suffix: "+",
    label: "Subtopics Mapped",
    subtext: "From physiology to pharmacology",
  },
  {
    icon: Languages,
    value: 2,
    suffix: " Layers",
    label: "Bilingual Explanations",
    subtext: "English test + Roman Urdu reasoning",
  },
  {
    icon: Sparkles,
    value: 0,
    suffix: " PKR",
    label: "Free Practice Tier",
    subtext: "Open to every student in Pakistan",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      if (value === 0) {
        setCount(0);
        return;
      }
      const duration = 1200;
      const steps = 40;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value === 0 ? "0" : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-14 sm:py-20 relative border-y border-white/5 bg-[#070b16]/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-center">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary-light">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">{s.label}</p>
                <p className="text-[11px] text-muted mt-0.5">{s.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
