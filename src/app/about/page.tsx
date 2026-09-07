"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Badge, Card } from "@/components/ui";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Heart,
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Academy-Grade Prep for Everyone",
    description:
      "High-cost conventional academies in big cities limit top medical education. MedAce AI brings elite-level, textbook-grounded adaptive coaching to every student's phone across Pakistan.",
  },
  {
    icon: Brain,
    title: "Zero-Hallucination Textbook RAG",
    description:
      "Generic AI models hallucinate medical facts. MedAce AI uses Retrieval-Augmented Generation strictly anchored to official Punjab, Sindh, KPK, and Federal textbook content.",
  },
  {
    icon: Heart,
    title: "Language-Inclusive Learning",
    description:
      "We believe language should never be a barrier to medical school. Instant Roman Urdu explanations bridge the gap between textbook English and deep conceptual clarity.",
  },
];

const stats = [
  { label: "Active Aspirants", value: "1,000+" },
  { label: "MCQs Indexed", value: "15,000+" },
  { label: "PMDC Alignment", value: "98.5%" },
  { label: "Cities Reached", value: "45+" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-12 md:py-20 overflow-hidden text-center">
          <div className="absolute inset-0 gradient-mesh opacity-60" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #14b8a6 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <Brain className="h-3.5 w-3.5" />
              Our Mission & Vision
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text tracking-tight mb-6">
              Empowering Pakistan&apos;s <br className="hidden sm:inline" />
              <span className="gradient-text">Next Generation of Doctors</span>
            </h1>

            <p className="text-muted text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              MedAce AI was built to solve a critical problem: making top-tier, adaptive MDCAT prep accessible, transparent, and effective for every medical aspirant in Pakistan.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
          <Card variant="elevated" padding="lg" className="border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-extrabold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Story Section */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Globe className="h-4 w-4" />
                The MedAce AI Story
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text">
                Why Conventional Prep Wasn&apos;t Enough
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Every year, over 200,000 students across Pakistan compete for fewer than 10,000 public medical college seats. Traditional academies rely on passive lectures, outdated paper test sessions, and generic answer keys.
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                We engineered MedAce AI to provide **personalized, 1-on-1 adaptive coaching**. By analyzing every response, our AI highlights exact conceptual weak spots in Biology, Chemistry, Physics, and English—delivering Roman Urdu explanations that click instantly.
              </p>
            </div>

            <div className="md:col-span-5">
              <Card variant="elevated" padding="md" className="space-y-4 bg-surface/50 border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text">Textbook Fidelity</h3>
                    <p className="text-xs text-muted">Grounded in official curriculum</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>Punjab Textbook Board (PTB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>Sindh Textbook Board (STBB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>KPK Textbook Board</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span>Federal Board (FBISE)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-12 bg-surface/30 border-y border-white/5 mb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-3">Our Core Principles</h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
                Built with care for Pakistani students striving for medical excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <Card key={idx} variant="elevated" padding="lg" className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {v.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="elevated" padding="lg" className="space-y-6 bg-gradient-to-b from-surface to-surface/80 border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Join the Future of MDCAT Preparation
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
              Start practicing today and see how adaptive AI coaching elevates your preparation score.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" glow>
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
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
