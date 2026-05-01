import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Zap, Globe } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Sofia Lindqvist", role: "Founder & Creative Director", initials: "SL" },
  { name: "Marcus Okafor", role: "Head of Engineering", initials: "MO" },
  { name: "Yuki Tanaka", role: "Design Lead", initials: "YT" },
  { name: "Elena Rossi", role: "Brand Strategist", initials: "ER" },
];

const values = [
  { icon: Heart, title: "Care deeply", desc: "We treat your work like it's our own — because it is." },
  { icon: Zap, title: "Move with intent", desc: "Speed comes from clarity, not chaos. We pick the right battles." },
  { icon: Award, title: "Make it last", desc: "We optimize for systems and decisions that age well." },
  { icon: Globe, title: "Stay curious", desc: "We're students of the craft, the market, and the medium." },
];

const stats = [
  { v: "12+", l: "Years of practice" },
  { v: "180", l: "Projects shipped" },
  { v: "94%", l: "Client retention" },
  { v: "32", l: "Industry awards" },
];

const About = () => (
  <SiteLayout>
    <section className="container-tight pt-20 pb-16 text-center">
      <span className="section-label mb-6 justify-center inline-flex">Our story</span>
      <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
        A small studio with a <span className="highlight-mark">big appetite</span> for ambitious work
      </h1>
      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        Pixpert was founded in 2014 around a simple belief: that the best digital work happens when strategy, design, and engineering live in the same room. We've been building that way ever since.
      </p>
    </section>

    <section className="container-tight">
      <div className="surface-card p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="text-4xl md:text-5xl font-semibold">{s.v}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="container-tight py-24">
      <SectionHeader label="Our values" title="What we stand for" description="The principles that guide how we work, hire, and partner." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {values.map(({ icon: Icon, ...v }) => (
          <div key={v.title} className="surface-card p-6">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary mb-4"><Icon className="h-5 w-5" /></div>
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-tight py-12">
      <SectionHeader label="The team" title="The people behind the work" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {team.map((m) => (
          <div key={m.name} className="surface-card p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 grid place-items-center text-2xl font-semibold">
              {m.initials}
            </div>
            <h3 className="mt-5 font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-tight py-24">
      <div className="surface-card p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Want to work with us?</h2>
        <p className="text-muted-foreground mt-3">We take on a small number of partners each quarter.</p>
        <Button asChild variant="hero" size="lg" className="mt-6"><Link to="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link></Button>
      </div>
    </section>
  </SiteLayout>
);

export default About;
