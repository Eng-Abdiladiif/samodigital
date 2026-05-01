import Link from "next/link";
import { ArrowRight, Check, Code2, Palette, Megaphone, Search, PenTool, Smartphone, Database } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer } from "@/components/animations";

const services = [
  { icon: Palette, title: "Web Design", desc: "Beautiful, intentional interfaces that turn visitors into customers.", benefits: ["Design systems", "Prototyping", "User research"] },
  { icon: Code2, title: "Development", desc: "Performant, accessible, scalable engineering — built to last.", benefits: ["React & Next.js", "Headless CMS", "Edge deploys"] },
  { icon: PenTool, title: "Branding", desc: "Strategic identity systems that make your brand unmistakable.", benefits: ["Logo & identity", "Voice & tone", "Brand guidelines"] },
  { icon: Search, title: "SEO", desc: "Technical and content SEO that compounds over time.", benefits: ["Audits", "Content strategy", "Schema & speed"] },
  { icon: Megaphone, title: "Marketing", desc: "Full-funnel campaigns that find your audience and earn attention.", benefits: ["Paid social", "Email", "Analytics"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-quality experiences for iOS and Android.", benefits: ["React Native", "Design QA", "App Store launch"] },
  { icon: Database, title: "Odoo ERP Consulting", desc: "End-to-end Odoo implementation and customization for streamlined operations.", benefits: ["System integration", "Custom modules", "Training & support"] },
];

const tiers = [
  { name: "Starter", price: "$200", desc: "For early teams shipping their first MVP.", features: ["Landing page", "Brand starter kit", "Analytics setup", "1 round of revisions"] },
  { name: "Growth", featured: true, price: "$450", desc: "For scaling brands ready to compound.", features: ["5–8 page site", "Design system", "CMS integration", "SEO foundations", "3 rounds of revisions"] },
  { name: "Bespoke", price: "Let&apos;s talk", desc: "Custom engagements for ambitious teams.", features: ["Product design", "Custom engineering", "Dedicated team", "Quarterly strategy"] },
];

export default function Services() {
  return (
    <SiteLayout>
      <section className="container-tight pt-20 pb-12 text-center">
        <FadeIn direction="up">
          <span className="section-label mb-6 justify-center inline-flex">Our services</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
            Everything you need to <span className="highlight-mark">grow online</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            From brand to build to launch — a single team that owns the outcome and ships work that compounds.
          </p>
        </FadeIn>
      </section>

      <section className="container-tight py-12">
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, ...s }) => (
            <FadeIn key={s.title} direction="up">
              <article className="surface-card p-7 h-full">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-2">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-tight py-24">
        <FadeIn direction="up">
          <SectionHeader align="center" label="Pricing" title="Simple packages, serious work" description="Transparent starting points. Every engagement is shaped to your goals." />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-5 mt-12">
          {tiers.map((t) => (
            <FadeIn key={t.name} direction="up">
              <div className={`surface-card p-8 h-full flex flex-col ${t.featured ? "border-primary/50 bg-primary/5" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                  {t.featured && <span className="text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground">Popular</span>}
                </div>
                <div className="mt-4 text-4xl font-semibold">{t.price}</div>
                <p className="text-muted-foreground mt-2 text-sm">{t.desc}</p>
                <ul className="mt-6 space-y-2.5 flex-grow">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7 w-full bg-white text-black hover:bg-white/90 rounded-full font-semibold h-11">
                  <Link href="/contact">Get started <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-tight py-12">
        <FadeIn direction="up">
          <div className="surface-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Have a project in mind?</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">Tell us about your goals — we&apos;ll send back a tailored plan within two business days.</p>
            <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-white/90 rounded-full font-semibold h-12 px-8"><Link href="/contact">Book a call <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </FadeIn>
      </section>
    </SiteLayout>
  );
}
