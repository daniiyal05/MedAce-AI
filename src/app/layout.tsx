import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0f1a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "MedAce AI — Adaptive MDCAT Prep Coach",
  description:
    "AI-powered adaptive prep coach for MDCAT. English MCQs with Urdu explanations, weak-spot tracking, and RAG-powered question generation from real textbooks.",
  keywords: [
    "MDCAT",
    "MDCAT prep",
    "MDCAT 2026",
    "medical admission Pakistan",
    "MDCAT biology",
    "adaptive learning",
    "AI tutor",
    "Urdu explanations",
  ],
  openGraph: {
    title: "MedAce AI — Adaptive MDCAT Prep Coach",
    description:
      "AI-powered MDCAT preparation with adaptive practice, Urdu explanations, and weak-spot tracking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedAce AI — Adaptive MDCAT Prep Coach",
    description:
      "AI-powered MDCAT preparation with adaptive practice, Urdu explanations, and weak-spot tracking.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="bg-bg text-text font-sans antialiased min-h-screen overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
