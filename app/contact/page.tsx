"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch within two business days.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SiteLayout>
      <section className="container-tight pt-20 pb-12 text-center">
        <FadeIn direction="up">
          <span className="section-label mb-6 justify-center inline-flex">Contact</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
            Let's build something <span className="highlight-mark">remarkable</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            Tell us about your project. We read every message and reply within two business days.
          </p>
        </FadeIn>
      </section>

      <section className="container-tight pb-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6">
          <FadeIn direction="left">
            <div className="surface-card p-8 space-y-6 h-full">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:hello@pixpert.studio" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> samodigital026@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+14155550101" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (+252)064991174
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Studio</h3>
                <p className="text-muted-foreground inline-flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  Sanaag <br /> / Erigavo Area  candlight
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary border border-border relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)/0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm shadow-lg">Sanaag / Erigavo</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <form onSubmit={onSubmit} className="surface-card p-8 space-y-5">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 px-4 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 px-4 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project, timeline and budget…"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-white/90 rounded-full font-semibold h-12">
                Send message <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our privacy policy.</p>
            </form>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
}
