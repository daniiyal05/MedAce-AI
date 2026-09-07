"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Card } from "@/components/ui";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Header */}
        <section className="relative py-12 text-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <Shield className="h-3.5 w-3.5" />
              Legal & Transparency
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">
              Privacy <span className="gradient-text">Policy</span>
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
                <Lock className="h-4 w-4 text-primary" />
                Our Commitment to Student Data Protection
              </div>
              <p className="text-xs text-muted">
                At MedAce AI, your privacy and study data integrity are paramount. We store your data securely, never sell personal information to third parties, and use your practice metrics solely to deliver personalized adaptive MDCAT coaching.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">1.</span> Information We Collect
              </h2>
              <p>
                We collect information you provide directly when registering or using our platform:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                <li>
                  <strong className="text-text">Account & Profile Data:</strong> Email address, full name, target exam year (e.g. MDCAT 2026), and preferred province (Punjab, Sindh, KPK, Federal).
                </li>
                <li>
                  <strong className="text-text">Practice & Performance Metrics:</strong> MCQ responses, time taken per question, topic accuracy percentages, bookmark history, and weak-spot diagnostic tracking.
                </li>
                <li>
                  <strong className="text-text">Technical Data:</strong> Browser type, operating system, IP address, and session timestamps for platform stability.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">2.</span> How We Use Your Information
              </h2>
              <p>Your data is processed strictly for the following purposes:</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Powering adaptive MCQ difficulty adjustments",
                  "Generating personalized weak-spot study recommendations",
                  "Providing Roman Urdu AI explanations based on your active queries",
                  "Ensuring account security & fraud prevention",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-surface/30 border border-white/5 text-xs text-text">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">3.</span> Data Security & Storage
              </h2>
              <p>
                All account and practice data is encrypted in transit using industry-standard SSL/TLS protocols and stored in secure database infrastructure (Supabase PostgreSQL with Row Level Security). Access to raw database logs is strictly limited to authorized engineering staff.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">4.</span> Cookies and Local Storage
              </h2>
              <p>
                MedAce AI uses essential cookies and browser local storage to maintain active login sessions, save local practice preferences, and optimize page load speeds. You can clear local storage anytime through browser settings.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">5.</span> Your Rights & Data Deletion
              </h2>
              <p>
                You have the right to request access to your personal data, request corrections, or ask for permanent account deletion. To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@medace.ai" className="text-primary underline">
                  privacy@medace.ai
                </a>
                .
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-text flex items-center gap-2">
                <span className="text-primary font-mono font-black">6.</span> Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or data security practices, please reach out to our privacy compliance officer at{" "}
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
