"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Input, Textarea, Card, Badge } from "@/components/ui";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Navbar variant="landing" />
      <main className="min-h-screen pt-24 pb-16">
        {/* Header */}
        <section className="relative py-12 md:py-16 text-center overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="ai" className="px-3 py-1 mb-4 text-xs">
              <Mail className="h-3.5 w-3.5" />
              Contact MedAce AI Team
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">
              We&apos;re Here to <span className="gradient-text">Help You Succeed</span>
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about your MDCAT preparation, AI explanations, subscription plans, or textbook syllabus indexing? Drop us a line!
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <Card variant="elevated" padding="lg" className="space-y-6 border-white/10">
                <h2 className="text-xl font-bold text-text flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Get in Touch
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-surface/50 border border-white/5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium">Official Support Email</p>
                      <a href="mailto:hello@medace.ai" className="text-text font-semibold hover:text-primary transition-colors">
                        hello@medace.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-surface/50 border border-white/5">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium">Response Window</p>
                      <p className="text-text font-semibold">Under 24 Hours (Mon - Sat)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-surface/50 border border-white/5">
                    <div className="p-2 rounded-lg bg-info/10 text-info">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium">Headquarters</p>
                      <p className="text-text font-semibold">Lahore & Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Quick Help Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/faq"
                      className="flex items-center justify-between text-xs text-text hover:text-primary transition-colors p-2 rounded-lg bg-surface/30"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="h-3.5 w-3.5 text-primary" />
                        Frequently Asked Questions
                      </span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/syllabus"
                      className="flex items-center justify-between text-xs text-text hover:text-primary transition-colors p-2 rounded-lg bg-surface/30"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-accent" />
                        MDCAT Syllabus Overview
                      </span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <Card variant="elevated" padding="lg" className="border-white/10">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="h-14 w-14 rounded-full bg-success/10 border border-success/20 text-success flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-text">Message Received!</h3>
                    <p className="text-muted text-sm max-w-md mx-auto">
                      Thank you for contacting MedAce AI. One of our support specialists will get back to your email ({email}) shortly.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="ghost" size="sm">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-text">Send Us a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Your Name"
                        placeholder="e.g. Ayesha Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text uppercase tracking-wider">
                        Topic / Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-xl bg-surface border border-white/10 px-4 py-2.5 text-sm text-text focus:outline-none focus:border-primary/50 transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Syllabus / MCQ Suggestion">Syllabus / MCQ Suggestion</option>
                        <option value="Partnerships / Academies">Partnerships / Academies</option>
                      </select>
                    </div>

                    <Textarea
                      label="Your Message"
                      placeholder="How can we help your MDCAT prep journey?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />

                    <Button type="submit" size="lg" glow className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
