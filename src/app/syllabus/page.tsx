"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Badge, Card } from "@/components/ui";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Dna,
  FlaskConical,
  Zap,
  Languages,
  Brain,
} from "lucide-react";

const examOverview = [
  { icon: FileText, label: "Total MCQs", value: "200 Questions" },
  { icon: Clock, label: "Total Time", value: "210 Minutes (3.5 Hours)" },
  { icon: ShieldAlert, label: "Negative Marking", value: "None (1 Mark / Question)" },
  { icon: CheckCircle, label: "Passing Criteria", value: "MBBS 55% | BDS 45%" },
];

const subjectsData = [
  {
    id: "biology",
    name: "Biology",
    icon: Dna,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    questions: 68,
    weightage: "34%",
    topics: [
      { name: "Biodiversity & Classification of Animals", weight: "High Yield", chapters: "Ch 1 - Diversity in Living Things" },
      { name: "Cell Structure & Function", weight: "High Yield", chapters: "Ch 2 - Cell Biology" },
      { name: "Biological Molecules & Enzymes", weight: "High Yield", chapters: "Ch 3 - Biochemistry" },
      { name: "Bioenergetics (Photosynthesis & Respiration)", weight: "Core Focus", chapters: "Ch 4 - Energy Transformations" },
      { name: "Coordination & Control (Nervous System & Endocrine)", weight: "High Yield", chapters: "Ch 5 - Human Physiology" },
      { name: "Genetics & Inheritance Patterns", weight: "High Yield", chapters: "Ch 6 - Genetics" },
      { name: "Reproduction & Development", weight: "Core Focus", chapters: "Ch 7 - Reproductive Biology" },
      { name: "Evolution & Biotechnology", weight: "Standard", chapters: "Ch 8 - Applied Biology" },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: FlaskConical,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    questions: 54,
    weightage: "27%",
    topics: [
      { name: "Fundamental Concepts & Stoichiometry", weight: "Core Focus", chapters: "Physical Chemistry" },
      { name: "States of Matter (Gases, Liquids, Solids)", weight: "Standard", chapters: "Physical Chemistry" },
      { name: "Atomic Structure & Chemical Bonding", weight: "High Yield", chapters: "Physical Chemistry" },
      { name: "Chemical Energetics & Reaction Kinetics", weight: "High Yield", chapters: "Physical Chemistry" },
      { name: "Chemical Equilibrium & Electrochemistry", weight: "High Yield", chapters: "Physical Chemistry" },
      { name: "s, p, d, f Block Elements & Transition Elements", weight: "Core Focus", chapters: "Inorganic Chemistry" },
      { name: "Hydrocarbons (Alkanes, Alkenes, Alkynes, Benzene)", weight: "High Yield", chapters: "Organic Chemistry" },
      { name: "Alkyl Halides, Alcohols, Phenols & Ethers", weight: "High Yield", chapters: "Organic Chemistry" },
      { name: "Aldehydes, Ketones, Carboxylic Acids & Macromolecules", weight: "High Yield", chapters: "Organic Chemistry" },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    questions: 54,
    weightage: "27%",
    topics: [
      { name: "Force, Motion & Momentum", weight: "High Yield", chapters: "Mechanics" },
      { name: "Work, Energy & Power", weight: "Core Focus", chapters: "Mechanics" },
      { name: "Circular Motion & Gravitation", weight: "Standard", chapters: "Mechanics" },
      { name: "Waves, Oscillations & Sound", weight: "High Yield", chapters: "Wave Optics & Acoustics" },
      { name: "Thermodynamics & Kinetic Theory", weight: "Core Focus", chapters: "Thermal Physics" },
      { name: "Electrostatics & Capacitance", weight: "High Yield", chapters: "Electricity" },
      { name: "Current Electricity & Magnetism", weight: "High Yield", chapters: "Electromagnetism" },
      { name: "Electromagnetic Induction & Alternating Current", weight: "Core Focus", chapters: "Electromagnetism" },
      { name: "Modern Physics, Quantum Phenomena & Nuclear Physics", weight: "High Yield", chapters: "Atomic Physics" },
    ],
  },
  {
    id: "english",
    name: "English",
    icon: Languages,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    questions: 18,
    weightage: "9%",
    topics: [
      { name: "Vocabulary & Contextual Word Choice", weight: "High Yield", chapters: "High-Frequency MDCAT Word List" },
      { name: "Subject-Verb Agreement & Tense Usage", weight: "Core Focus", chapters: "Grammar & Structure" },
      { name: "Prepositions, Articles & Conjunctions", weight: "Core Focus", chapters: "Grammar Rules" },
      { name: "Sentence Completion & Error Identification", weight: "High Yield", chapters: "Syntax & Sentence Correction" },
      { name: "Reading Comprehension & Logical Flow", weight: "Standard", chapters: "Comprehension Skills" },
    ],
  },
  {
    id: "logic",
    name: "Logical Reasoning",
    icon: Brain,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    questions: 6,
    weightage: "3%",
    topics: [
      { name: "Critical Thinking & Logical Deductions", weight: "High Yield", chapters: "Logical Reasoning" },
      { name: "Symbol Series & Pattern Completion", weight: "Core Focus", chapters: "Pattern Analysis" },
      { name: "Statement & Assumption Analysis", weight: "Standard", chapters: "Logical Statements" },
    ],
  },
];

export default function SyllabusPage() {
  const [activeSubject, setActiveSubject] = useState("biology");

  const currentSubject = subjectsData.find((s) => s.id === activeSubject) || subjectsData[0];

  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Header */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <BookOpen className="h-3.5 w-3.5" />
              Official PMDC Alignment
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">
              MDCAT <span className="gradient-text">Syllabus & Weightage</span>
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Complete subject-wise breakdown of topics, chapter focus, and question distributions for the upcoming MDCAT examination.
            </p>
          </div>
        </section>

        {/* Overview Stats Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {examOverview.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} variant="elevated" padding="md" className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-text">{item.value}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Subject Breakdown Tabs */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {subjectsData.map((subj) => {
              const Icon = subj.icon;
              const isActive = activeSubject === subj.id;
              return (
                <button
                  key={subj.id}
                  onClick={() => setActiveSubject(subj.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? `${subj.bgColor} ${subj.borderColor} ${subj.color} shadow-lg shadow-black/20`
                      : "bg-surface/50 border-white/5 text-muted hover:text-text hover:bg-surface"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{subj.name}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-text">
                    {subj.questions} Qs
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Subject Details */}
          <motion.div
            key={currentSubject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card variant="elevated" padding="lg" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${currentSubject.bgColor} ${currentSubject.borderColor} border`}>
                    <currentSubject.icon className={`h-6 w-6 ${currentSubject.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">{currentSubject.name} Syllabus</h2>
                    <p className="text-xs text-muted">
                      Weightage: <span className="text-primary font-semibold">{currentSubject.weightage}</span> ({currentSubject.questions} MCQs out of 200)
                    </p>
                  </div>
                </div>

                <Link href={`/practice?subject=${currentSubject.id}`}>
                  <Button size="sm" glow>
                    Practice {currentSubject.name} MCQs
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Topics Grid */}
              <div className="grid gap-3">
                {currentSubject.topics.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-white/10 transition-all gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs font-mono font-bold text-muted">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-text">{t.name}</h3>
                        <p className="text-xs text-muted">{t.chapters}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <Badge
                        variant={t.weight === "High Yield" ? "ai" : "default"}
                        className="text-[11px]"
                      >
                        {t.weight}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Practice CTA */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="lg" className="text-center space-y-4 bg-gradient-to-b from-surface to-surface/80 border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Master the MDCAT Syllabus with MedAce AI
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
              Start practicing topic-wise MCQs grounded directly in PMDC textbook content with instant Roman Urdu explanations.
            </p>
            <div className="pt-2">
              <Link href="/signup">
                <Button size="lg" glow>
                  Start Free Adaptive Practice
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
