"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Badge, Card } from "@/components/ui";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "general" | "ai" | "urdu" | "pricing";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What is MedAce AI and how does it help MDCAT aspirants?",
    answer:
      "MedAce AI is an intelligent adaptive learning platform built specifically for Pakistani MDCAT students. It uses AI trained on official provincial textbooks (Punjab, Sindh, KPK, Federal) to generate high-yield MCQs, track your weak concepts in real time, and provide instant bilingual explanations.",
  },
  {
    id: "faq-2",
    category: "general",
    question: "Are MedAce AI questions aligned with official PMDC syllabus?",
    answer:
      "Yes! Every question in our bank is indexed according to the official PMDC / PMC MDCAT syllabus specifications across Biology, Chemistry, Physics, English, and Logical Reasoning.",
  },
  {
    id: "faq-3",
    category: "ai",
    question: "How does the AI adaptive difficulty system work?",
    answer:
      "Our AI monitors your response speed, accuracy, and confidence per topic. If you master basic recall questions in genetics or thermodynamics, it automatically introduces higher-level analytical and application questions to prepare you for top exam scores.",
  },
  {
    id: "faq-4",
    category: "urdu",
    question: "How do the Roman Urdu AI explanations work?",
    answer:
      "Many medical aspirants understand complex biological and chemical concepts much faster in their native tongue. MedAce AI breaks down every MCQ option in clear English AND easy-to-understand Roman Urdu, highlighting exactly why the right option is correct.",
  },
  {
    id: "faq-5",
    category: "ai",
    question: "How does weak-spot tracking help me review faster?",
    answer:
      "Instead of re-reading entire textbook chapters, MedAce AI generates a personalized Weak-Spot Heatmap. It pinpoints exact subtopics (e.g. Enzyme Kinetics, Electric Potential) where your accuracy drops below 70% and creates targeted revision quizzes.",
  },
  {
    id: "faq-6",
    category: "pricing",
    question: "Is MedAce AI free to use?",
    answer:
      "Yes, MedAce AI offers a free tier allowing all students to practice daily MCQs, attempt chapter diagnostics, and view AI explanations. Premium options are available for unlimited mock exams and advanced RAG textbook queries.",
  },
  {
    id: "faq-7",
    category: "general",
    question: "Can I use MedAce AI on mobile devices?",
    answer:
      "Absolutely! MedAce AI is fully optimized for smartphones, tablets, and desktop browsers. You can practice on the go anytime, anywhere.",
  },
  {
    id: "faq-8",
    category: "pricing",
    question: "Is MedAce AI helpful for MDCAT Repeaters?",
    answer:
      "Repeaters benefit immensely because MedAce AI skips redundant material you already know and focuses 100% of your prep time on fixing your previous exam weak spots.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "ai", label: "AI & Adaptive Practice" },
  { id: "urdu", label: "Urdu Explanations" },
  { id: "pricing", label: "Pricing & Access" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-4"]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-12 md:py-16 overflow-hidden text-center">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <HelpCircle className="h-3.5 w-3.5" />
              Help & Support Center
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Everything you need to know about MedAce AI, textbook RAG practice, Urdu explanations, and exam tracking.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted" />
              <input
                type="text"
                placeholder="Search questions (e.g. Urdu, syllabus, weak spots)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-text placeholder-muted focus:outline-none focus:border-primary/50 transition-colors shadow-lg shadow-black/20"
              />
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-surface/60 text-muted hover:text-text hover:bg-surface border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-3">
            {filteredFAQs.length === 0 ? (
              <Card variant="elevated" padding="lg" className="text-center py-12">
                <HelpCircle className="h-8 w-8 text-muted mx-auto mb-3 opacity-50" />
                <p className="text-muted text-sm">No matching questions found for &quot;{searchQuery}&quot;.</p>
              </Card>
            ) : (
              filteredFAQs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <Card
                    key={faq.id}
                    variant="elevated"
                    padding="none"
                    className="overflow-hidden border-white/5 hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer gap-4"
                    >
                      <span className="text-base font-semibold text-text">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-5 pt-1 text-sm text-muted leading-relaxed border-t border-white/5 bg-surface/30">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                );
              })
            )}
          </div>
        </section>

        {/* Support Banner */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="lg" className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-b from-surface to-surface/80 border-primary/20">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-text flex items-center justify-center sm:justify-start gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Have More Questions?
              </h3>
              <p className="text-xs sm:text-sm text-muted">
                Our support team is here to help you get the most out of MedAce AI.
              </p>
            </div>

            <Link href="/contact" className="shrink-0">
              <Button size="md" glow>
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
