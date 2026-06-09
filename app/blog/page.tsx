"use client";

import { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

const featured = {
  category: "Strategy",
  title: "Designing for trust: how interface details shape buyer confidence",
  excerpt: "A practical framework for stripping friction from your most consequential moments — the ones where users decide whether to believe you.",
  date: "Apr 18, 2026",
  read: "8 min read",
};

const posts = [
  { category: "Design", title: "Typography systems that scale across surfaces", excerpt: "How to build a type system that survives marketing, product, and brand.", date: "Apr 12, 2026", read: "6 min" },
  { category: "Engineering", title: "The case for boring tech in 2026", excerpt: "Velocity comes from constraints, not from chasing the bleeding edge.", date: "Apr 4, 2026", read: "5 min" },
  { category: "Brand", title: "What we got wrong about brand voice", excerpt: "A retrospective on five rebrands and the patterns we learned the hard way.", date: "Mar 28, 2026", read: "7 min" },
  { category: "SEO", title: "Topical authority: a content strategy that compounds", excerpt: "Why publishing more often isn't the answer.", date: "Mar 19, 2026", read: "9 min" },
  { category: "Design", title: "Microinteractions worth the JavaScript", excerpt: "A short list of motion patterns that earn their pixels.", date: "Mar 8, 2026", read: "4 min" },
  { category: "Strategy", title: "Pricing your services as a creative team", excerpt: "Frameworks we use when scoping engagements at every tier.", date: "Mar 1, 2026", read: "10 min" },
];

const cats = ["All", "Design", "Engineering", "Brand", "SEO", "Strategy"];

export default function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = posts.filter(
    (p) => (cat === "All" || p.category === cat) && (q === "" || p.title.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <SiteLayout>
      <section className="container-tight pt-20 pb-12 text-center">
        <span className="section-label mb-6 justify-center inline-flex">Journal</span>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
          Notes from the <span className="highlight-mark">studio</span>
        </h1>
      </section>

      <section className="container-tight">
        <article className="surface-card p-8 md:p-12 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary">{featured.category} · Featured</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 leading-tight">{featured.title}</h2>
            <p className="text-muted-foreground mt-4">{featured.excerpt}</p>
            <div className="mt-6 text-sm text-muted-foreground">{featured.date} · {featured.read}</div>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/40 to-primary/5 border border-border" />
        </article>
      </section>

      <section className="container-tight py-12 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                cat === c ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles…"
            className="w-full h-11 pl-11 pr-4 rounded-full border border-border bg-input text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </section>

      <section className="container-tight pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => (
            <article key={p.title} className="surface-card p-6 group cursor-pointer">
              <div className="aspect-[5/3] rounded-lg bg-gradient-to-br from-secondary to-muted mb-5" />
              <span className="text-xs uppercase tracking-widest text-primary">{p.category}</span>
              <h3 className="text-lg font-semibold mt-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date} · {p.read}</span>
                <ArrowUpRight className="h-4 w-4 group-hover:text-primary transition-colors" />
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="text-center text-muted-foreground py-20">No articles match your search.</p>}
      </section>
    </SiteLayout>
  );
}
