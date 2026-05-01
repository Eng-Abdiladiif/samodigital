import Link from "next/link";
import { ArrowRight, Award, Heart, Zap, Globe } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer } from "@/components/animations";

const team = [
  { name: "Sofia Lindqvist", role: "Founder & Creative Director", initials: "SL" },
  { name: "Marcus Okafor", role: "Head of Engineering", initials: "MO" },
  { name: "Yuki Tanaka", role: "Design Lead", initials: "YT" },
  { name: "Elena Rossi", role: "Brand Strategist", initials: "ER" },
];

const values = [
  { icon: Heart, title: "Care deeply", desc: "We treat your work like it&apos;s our own — because it is." },
  { icon: Zap, title: "Move with intent", desc: "Speed comes from clarity, not chaos. We pick the right battles." },
  { icon: Award, title: "Make it last", desc: "We optimize for systems and decisions that age well." },
  { icon: Globe, title: "Stay curious", desc: "We&apos;re students of the craft, the market, and the medium." },
];

const stats = [
  { v: "5+", l: "Years of practice" },
  { v: "100", l: "Projects shipped" },
  { v: "94%", l: "Client retention" },
  { v: "5", l: "Industry awards" },
];

export default function About() {
  return (
    <SiteLayout>
      <section className="container-tight pt-20 pb-16 text-center">
        <FadeIn direction="up">
          <span className="section-label mb-6 justify-center inline-flex">Our story</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
            A small studio with a <span className="highlight-mark">big appetite</span> for ambitious work
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Samo Digital Solution was founded in 2026 around a simple belief: that the best digital work happens when strategy, design, and engineering live in the same room. We&apos;ve been building that way ever since.
          </p>
        </FadeIn>
      </section>

      <section className="container-tight">
        <FadeIn direction="up" delay={0.2}>
          <div className="surface-card p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-semibold">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container-tight py-24">
        <FadeIn direction="up">
          <SectionHeader label="Our values" title="What we stand for" description="The principles that guide how we work, hire, and partner." />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {values.map(({ icon: Icon, ...v }) => (
            <FadeIn key={v.title} direction="up">
              <div className="surface-card p-6 h-full">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary mb-4"><Icon className="h-5 w-5" /></div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-tight py-12">
        <FadeIn direction="up">
          <SectionHeader label="The team" title="The people behind the work" />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {team.map((m) => (
            <FadeIn key={m.name} direction="up">
              <div className="surface-card p-6 text-center h-full">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 grid place-items-center text-2xl font-semibold">
                  {m.initials}
                </div>
                <h3 className="mt-5 font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-tight py-24">
        <FadeIn direction="up">
          <div className="surface-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Want to work with us?</h2>
            <p className="text-muted-foreground mt-3">We take on a small number of partners each quarter.</p>
            <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-white/90 rounded-full font-semibold h-12 px-8"><Link href="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </FadeIn>
      </section>
    </SiteLayout>
  );
}
