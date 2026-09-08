"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";

// Below-the-fold sections are dynamically loaded for fast First Contentful Paint (FCP)
const ProblemSection = dynamic(() => import("@/components/landing/ProblemSection"), {
  ssr: true,
});
const HowItWorksSection = dynamic(() => import("@/components/landing/HowItWorksSection"), {
  ssr: true,
});
const FeaturesSection = dynamic(() => import("@/components/landing/FeaturesSection"), {
  ssr: true,
});
const SyllabusSection = dynamic(() => import("@/components/landing/SyllabusSection"), {
  ssr: true,
});
const StatsSection = dynamic(() => import("@/components/landing/StatsSection"), {
  ssr: true,
});
const FAQSection = dynamic(() => import("@/components/landing/FAQSection"), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/components/landing/CTASection"), {
  ssr: true,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060911] text-text selection:bg-primary/30 selection:text-white">
      {/* Floating Dynamic Glass Navbar */}
      <Navbar variant="landing" />

      {/* Main Page Flow */}
      <main className="overflow-hidden">
        {/* Animated Hero Section with Jawab-AI Style Split Live Simulator */}
        <HeroSection />

        {/* The Pre-Med Reality & Comparison Matrix */}
        <ProblemSection />

        {/* Jawab-AI Style Numbered 4-Step Learning Loop */}
        <HowItWorksSection />

        {/* Platform Capabilities Bento Grid */}
        <FeaturesSection />

        {/* Complete 15-Chapter PMDC Syllabus Directory */}
        <SyllabusSection />

        {/* Authentic Syllabus Metrics Scoreboard */}
        <StatsSection />

        {/* Numbered 2-Column FAQ */}
        <FAQSection />

        {/* High-Impact CTA */}
        <CTASection />
      </main>

      {/* Ultra-Luxury Footer with Legal Disclaimer */}
      <Footer />
    </div>
  );
}
