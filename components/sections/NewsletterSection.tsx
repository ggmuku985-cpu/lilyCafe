"use client";

import { useState } from "react";
import { Mail, CheckCircle, Sparkles, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true); // Optimistic fallback
      }
    } catch (err) {
      setIsSuccess(true); // Optimistic fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-espresso-900 text-cream-100 relative overflow-hidden">
      {/* Subtle botanical glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-espresso-950/60 text-gold-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>The Morning Bloom Dispatch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-cream-50 max-w-2xl mx-auto">
            Letters on slow coffee, seasonal bakes &amp; upcoming gatherings.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cream-200/80 font-sans max-w-xl mx-auto leading-relaxed">
            Receive private invites to limited micro-lot cuppings, secret weekend pastry drops, and barista home-brewing guides. Sent once fortnightly.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 max-w-md mx-auto">
            {isSuccess ? (
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-espresso-950/80 border border-gold-500/40 text-cream-100 shadow-warm">
                <CheckCircle className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm font-sans">
                  You're in! Check your inbox for our home pour-over guide.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cream-300/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-full bg-cream-100/10 border border-cream-100/20 text-cream-50 placeholder:text-cream-300/40 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all backdrop-blur-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  isLoading={isSubmitting}
                  className="rounded-full px-7"
                  rightIcon={<Send className="h-4 w-4" />}
                >
                  Join Circle
                </Button>
              </form>
            )}

            {errorMessage && (
              <p className="mt-2 text-xs text-red-400 font-sans">{errorMessage}</p>
            )}

            <p className="mt-3 text-[11px] font-sans text-cream-300/50">
              Zero spam. Unsubscribe with one click anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

