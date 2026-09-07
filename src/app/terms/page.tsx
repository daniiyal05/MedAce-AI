"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Card } from "@/components/ui";
import { FileText, ShieldAlert, CheckCircle2, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Header */}
        <section className="relative py-12 text-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <Scale className="h-3.5 w-3.5" />
              Terms & Conditions
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>

            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
              Effective Date: September 7, 2026 &bull; Last Updated: 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <Card variant="elevated" padding="lg" className="space-y-8 border-white/10 text-sm leading-relaxed text-muted">
            <div className="p-4 rounded-xl bg-surface/50 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-text font-semibold">
                <FileText className="h-4 w-4 text-primary" />
                Agreement Overview
              </div>
              <p className="text-xs text-muted">
                Welcome to MedAce AI. By creating an account or accessing our website and adaptive prep services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">1.</span> Description of Service
              </h2>
              <p>
                MedAce AI provides an online adaptive learning platform, question bank, RAG-powered textbook explanations in English and Roman Urdu, weak-spot tracking analytics, and exam simulation tools designed for MDCAT candidates in Pakistan.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">2.</span> Account Registration & Security
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. You agree to provide accurate information upon registration and notify us immediately of any unauthorized access.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">3.</span> Intellectual Property Rights
              </h2>
              <p>
                All content on MedAce AI—including adaptive MCQ generation algorithms, user interface designs, logo artwork, Roman Urdu translations, and analytical dashboards—is owned by MedAce AI and protected under Pakistani and international intellectual property laws. You may not copy, scrape, redistribute, or reverse engineer any part of the platform.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">4.</span> Disclaimer Regarding Exam Bodies
              </h2>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
                <p className="font-semibold flex items-center gap-1">
                  <ShieldAlert className="h-4 w-4 shrink-0 text-amber-400" />
                  Independent Educational Tool Notice
                </p>
                <p>
                  MedAce AI is an independent prep coach platform engineered for medical entrance preparation. MedAce AI is not affiliated with, endorsed by, or sponsored by the Pakistan Medical & Dental Council (PMDC), PMC, or any provincial testing university (KMU, UHS, DUHS, SZABMU).
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">5.</span> Acceptable Use & Conduct
              </h2>
              <p>When using MedAce AI, you agree not to:</p>
              <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                <li>Use automated bots, scrapers, or software to extract question bank content.</li>
                <li>Attempt to bypass security controls or gain unauthorized access to backend systems.</li>
                <li>Share your account credentials with multiple users to circumvent subscription limits.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">6.</span> Limitation of Liability
              </h2>
              <p>
                While MedAce AI strives for 100% accuracy grounded in official textbook content, we make no guarantees regarding individual exam performance or admission outcomes. MedAce AI shall not be liable for any indirect, incidental, or consequential damages arising from site usage.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">7.</span> Contact & Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. For inquiries regarding these terms, please email{" "}
                <a href="mailto:hello@medace.ai" className="text-primary font-semibold">
                  hello@medace.ai
                </a>
                .
              </p>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
