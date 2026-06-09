"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, ScaleOnHover } from "@/components/animations";
import projMobile from "@/assets/project-mobile.jpg";
import projBrand from "@/assets/project-brand.jpg";
import projLaptop from "@/assets/project-laptop.jpg";
import projDashboard from "@/assets/project-dashboard.jpg";

const all = [
  { img: projMobile, title: "Hallo Helper App", category: "Mobile", desc: "A concierge mobile app connecting travelers with locals.", challenge: "Make the discovery flow feel personal in under 30 seconds.", solution: "A swipe-first onboarding paired with a curated map.", results: "+38% session length, 4.8 rating in store." },
  { img: projBrand, title: "Fabio&apos;s Pizza", category: "Branding", desc: "Identity rooted in craft, taste, and Italian warmth.", challenge: "Stand out in a saturated local market.", solution: "Bold typography system + custom illustration suite.", results: "+62% YoY revenue, viral packaging." },
  { img: projLaptop, title: "Enstack Landing", category: "Web", desc: "Conversion-focused launch site for a B2B SaaS.", challenge: "Communicate a complex platform in a single scroll.", solution: "Narrative-driven sections + interactive demo.", results: "3.4x signup conversion in week one." },
  { img: projDashboard, title: "Wallet Dashboard", category: "Product", desc: "Analytics dashboard for a fintech product.", challenge: "Surface insight without overwhelming users.", solution: "Progressive disclosure and signal-first layout.", results: "Time-to-insight cut from 4 minutes to 20 seconds." },
];

const filters = ["All", "Web", "Mobile", "Branding", "Product"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? all : all.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="container-tight pt-20 pb-10 text-center">
        <FadeIn direction="up">
          <span className="section-label mb-6 justify-center inline-flex">Selected work</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
            Work we&apos;re <span className="highlight-mark">proud of</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            A glimpse into the brands and products we&apos;ve helped design, build, and grow.
          </p>
        </FadeIn>
      </section>

      <section className="container-tight">
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  filter === f ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
          {list.map((p) => (
            <FadeIn key={p.title} direction="up">
              <ScaleOnHover scale={1.02}>
                <article className="surface-card overflow-hidden group h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
                        <h3 className="text-2xl font-semibold mt-1">{p.title}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground mt-3">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border text-sm">
                      <div><div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Challenge</div>{p.challenge}</div>
                      <div><div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Solution</div>{p.solution}</div>
                      <div><div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Results</div>{p.results}</div>
                    </div>
                  </div>
                </article>
              </ScaleOnHover>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-tight py-24">
        <FadeIn direction="up">
          <div className="surface-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Your project could be next</h2>
            <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-white/90 rounded-full font-semibold h-12 px-8"><Link href="/contact">Start a project</Link></Button>
          </div>
        </FadeIn>
      </section>
    </SiteLayout>
  );
}
