"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, Button } from "@/components/ui";
import { useAuth } from "@/components/auth/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Calendar,
  User,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const appNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/practice", label: "Practice", icon: BookOpen },
  { href: "/study-plan", label: "Study Plan", icon: Calendar },
  { href: "/profile", label: "Profile", icon: User },
];

const landingNavLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#syllabus", label: "15 Chapters" },
  { href: "#methodology", label: "Methodology" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  variant?: "landing" | "app";
  userName?: string;
}

export default function Navbar({ variant = "landing", userName }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const displayName = userName || user?.fullName || "Medical Student";

  // App variant (Dashboard, Practice, etc.)
  if (variant === "app") {
    return (
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 glass-nav border-b border-white/5",
          scrolled ? "h-14 bg-bg/95" : "h-16"
        )}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 border border-primary/20 transition-all duration-200">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-bold tracking-tight text-text">
                Med<span className="text-primary">Ace</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent/20 text-accent-light uppercase">
                AI
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {appNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 flex items-center gap-2",
                      isActive ? "text-primary" : "text-muted hover:text-text"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/profile"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-hover/60 border border-white/5 hover:border-primary/30 transition-all"
            >
              <Avatar name={displayName} size="sm" />
              <span className="text-xs font-medium text-text max-w-[120px] truncate">
                {displayName}
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-muted hover:text-text hover:bg-surface-hover transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-x-0 top-14 bg-surface/98 border-b border-border p-4 space-y-2 md:hidden backdrop-blur-2xl z-50 shadow-2xl"
            >
              {appNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted hover:text-text hover:bg-surface-hover"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border">
                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-text"
                >
                  <Avatar name={displayName} size="sm" />
                  <span>{displayName}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // Floating Dynamic Glass Pill Navbar for Landing
  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-2.5 sm:pt-4 px-2.5 sm:px-6 pointer-events-none transition-all duration-300">
      <nav
        className={cn(
          "pointer-events-auto mx-auto max-w-5xl rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between",
          scrolled
            ? "glass-pill shadow-[0_12px_36px_rgba(0,0,0,0.65)] border-white/15 bg-[#060911]/90"
            : "bg-[#060911]/75 backdrop-blur-xl border border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-all shadow-sm shadow-primary/20">
            <Brain className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-primary-light" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
              Med<span className="text-primary-light">Ace</span>
            </span>
            <span className="rounded-full bg-accent/20 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-accent-light border border-accent/30 hidden sm:inline-block">
              MDCAT
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 relative">
          {landingNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredNav(link.href)}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
            >
              {hoveredNav === link.href && (
                <motion.div
                  layoutId="landing-nav-hover"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right Section: CTAs & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-block text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
          >
            Sign In
          </Link>

          <Link href="/signup">
            <Button
              size="sm"
              className="rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm shadow-md shadow-primary/20 hover:shadow-primary/40 flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-white/90" />
              <span>Start Free</span>
              <ArrowRight className="h-3 w-3 hidden sm:inline" />
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Polished for thumb access) */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="fixed top-16 inset-x-2.5 sm:inset-x-6 bg-[#0a0f1e]/98 border border-white/15 rounded-3xl p-5 z-50 md:hidden shadow-2xl backdrop-blur-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-[11px] font-mono text-emerald-400">
                    PMDC Biology Curriculum Aligned
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-1">
                {landingNavLinks.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5 text-muted" />
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/25"
                >
                  <Sparkles className="h-4 w-4" />
                  Start Practicing Free
                </Link>

                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full block py-2 text-center text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Already have an account? Sign In
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
