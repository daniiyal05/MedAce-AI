import Link from "next/link";
import { Brain, Github, Twitter, Linkedin, Mail, Heart, ShieldCheck } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Adaptive Practice", href: "/practice" },
    { label: "15 Biology Chapters", href: "/#syllabus" },
    { label: "AI Study Planner", href: "/study-plan" },
    { label: "Diagnostic Dashboard", href: "/dashboard" },
  ],
  curriculum: [
    { label: "Human Physiology (Ch 1–8)", href: "/practice" },
    { label: "Modern Topics (Ch 9–14)", href: "/practice" },
    { label: "Pharmacology (Ch 15)", href: "/practice" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "MDCAT Syllabus Guide", href: "/syllabus" },
  ],
  resources: [
    { label: "About Our Mission", href: "/about" },
    { label: "Frequently Asked Questions", href: "/#faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@medace.ai", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050811] overflow-hidden">
      {/* Top Laser Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 space-y-3.5">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-colors shadow-sm shadow-primary/20">
                <Brain className="h-4.5 w-4.5 text-primary-light" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  Med<span className="text-primary-light">Ace</span>
                </span>
                <span className="rounded-full bg-accent/20 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-accent-light border border-accent/30">
                  AI
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pakistan&apos;s adaptive prep coach for MDCAT. Preserving authentic English exam
              conditions with instant Roman Urdu conceptual explanations and real-time weak-spot
              tracking.
            </p>

            {/* Live System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>PMDC Biology Aligned</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-muted hover:text-primary-light hover:border-primary/30 hover:bg-primary/10 transition-all"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-primary-light transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Curriculum */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Curriculum
            </h4>
            <ul className="space-y-2">
              {footerLinks.curriculum.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-primary-light transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-primary-light transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <p className="text-[10px] sm:text-[11px] text-muted leading-relaxed">
            <strong>Disclaimer:</strong> MedAce AI is an independent educational prep platform.
            MDCAT is a registered exam of the Pakistan Medical and Dental Council (PMDC). MedAce AI
            is not affiliated with or endorsed by PMDC, UHS, SZABMU, or DUHS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-muted pt-1">
            <p>&copy; {new Date().getFullYear()} MedAce AI. Built for Pakistan&apos;s Pre-Meds.</p>
            <p className="flex items-center gap-1.5 text-slate-300">
              Crafted with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> for the future
              doctors of Pakistan 🇵🇰
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
