import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, MoveDown, Lightbulb, Users, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Solutions } from "@/components/site/Solutions";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, ScaleOnHover } from "@/components/animations";
import heroImg from "@/assets/hero-team.jpg";
import backgroundImg from "@/image/backgroundimg.png";
import projMobile from "@/assets/project-mobile.jpg";
import projBrand from "@/assets/project-brand.jpg";
import projLaptop from "@/assets/project-laptop.jpg";
import projDashboard from "@/assets/project-dashboard.jpg";

const services = [
  { n: "01", title: "Development", desc: "Engineering performant, scalable web platforms with modern stacks and elegant DX." },
  { n: "02", title: "Design", desc: "High-quality UI/UX systems for products that feel inevitable to use." },
  { n: "03", title: "Brand Strategy", desc: "Positioning, identity, and narrative that make your brand impossible to ignore." },
  { n: "04", title: "ERP Consulting", desc: "Strategic implementation and optimization of enterprise resource planning systems for seamless business operations." },
  { n: "05", title: "Digital Marketing", desc: "Data-driven campaigns that amplify your reach, engage audiences, and drive measurable growth." },
];

const projects = [
  { img: projMobile, title: "Hallo Helper App", desc: "A mobile-first concierge platform connecting travelers with local experts.", tags: ["Mobile", "Web"] },
  { img: projBrand, title: "Fabio's Pizza", desc: "Brand identity rooted in craft, taste, and unmistakable Italian warmth.", tags: ["Brand", "Identity"] },
  { img: projLaptop, title: "Enstack Landing Page", desc: "A conversion-focused marketing site with crisp interactions.", tags: ["Landing", "Web"] },
  { img: projDashboard, title: "Digital Wallet Dashboard", desc: "An analytics dashboard surfacing financial insights at a glance.", tags: ["Product", "UI"] },
];

const testimonials = [
  { quote: "Pixpert has been a true partner for our business. Their attention to detail shaped a product that resonates and converts.", name: "Emily Johnson", role: "Marketing Manager, KX Co." },
  { quote: "Choosing Pixpert was the best decision we made for our brand. They turned strategy into a website that actually performs.", name: "Liam Brown", role: "Founder, Northbeam" },
  { quote: "We were impressed by the creativity Pixpert brought, and the time they took to understand our vision end-to-end.", name: "Sarah Thompson", role: "Founder of XYZ Studio" },
];

const partners = ["Vertex", "Vision", "Lumina", "Proforma", "Trace", "Rise", "Cactus"];

export default function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-black dark:from-gray-900 dark:via-gray-800 dark:to-background">
        <div className="relative h-[640px] md:h-[720px]">
          <Image 
            src={backgroundImg} 
            alt="Professional digital workspace" 
            fill 
            className="object-cover opacity-95 grayscale dark:opacity-10 dark:grayscale-0" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black dark:from-black/60 dark:via-gray-900/80 dark:to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
          <div className="relative container-tight h-full flex flex-col justify-center items-center text-center pt-12">
            <span className="section-label mb-6 animate-fade-in text-gray-300 dark:text-gray-300">Samo · Digital Solution</span>
            <h1 className="text-4xl md:text-7xl font-semibold leading-[1.02] text-balance max-w-4xl animate-fade-up text-white dark:text-white">
              Experience our expert<br />agency services
            </h1>
            <p className="mt-6 text-gray-300 dark:text-gray-300 max-w-xl animate-fade-up">
              We are a high-impact agency that specializes in building and engineering unique digital products that endure and create value.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md animate-fade-up">
              <Button asChild size="lg" className="h-12 px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-full font-semibold shadow-xl hover:scale-105 transition-all">
                <Link href="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto rounded-full font-semibold border-gray-400 text-white hover:bg-white/10 dark:border-gray-600 dark:text-white dark:hover:bg-white/10">
                <Link href="/projects">View our work</Link>
              </Button>
            </div>
            <MoveDown className="mt-10 h-5 w-5 text-gray-400 dark:text-gray-400 animate-bounce" />
          </div>
        </div>

        {/* Partner strip */}
        <div className="container-tight -mt-16 relative z-10">
          <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-4">
              Trusted by ambitious teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {partners.map((p) => (
                <span key={p} className="text-base md:text-lg font-medium text-muted-foreground/80 hover:text-foreground transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 container-tight">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-end">
          <FadeIn direction="up">
            <span className="section-label mb-6">About us</span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">
              Presenting superior services through{" "}
              <span className="highlight-mark">innovative concepts</span> that dare to be different.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col gap-5">
              <p className="text-muted-foreground">
                Our team of experts consists of web developers, UI/UX designers, digital marketers, and brand strategists — obsessed with crafting digital experiences.
              </p>
              <Button asChild variant="outline" className="self-start rounded-full">
                <Link href="/about">See more <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 container-tight">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start mb-12">
          <FadeIn direction="up">
            <span className="section-label mb-6">Services</span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">
              We offer several services for you
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="md:pt-10">
              <p className="text-muted-foreground">
                The services we offer are designed to help you and are necessary to take your business to the next level of operations.
              </p>
              <Button asChild variant="outline" className="mt-5 rounded-full">
                <Link href="/services">Explore our services <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1} className="space-y-3">
          {services.map((s, i) => (
            <FadeIn key={s.n} direction="up">
              <div
                className={`group surface-card p-7 md:p-9 grid md:grid-cols-[80px_1fr_auto] items-center gap-6 ${
                  i === 1 ? "border-primary/40 bg-primary/5" : ""
                }`}
              >
                <div className="text-sm text-muted-foreground">{s.n}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground max-w-xl">{s.desc}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      {/* SOLUTIONS */}
      <Solutions />

      {/* PROJECTS */}
      <section className="py-24 container-tight">
        <FadeIn direction="up">
          <SectionHeader
            label="Our products"
            title={<>Elevating our Partners' Products with Unparalleled Value</>}
          />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p) => (
            <FadeIn key={p.title} direction="up">
              <ScaleOnHover scale={1.02}>
                <article className="surface-card overflow-hidden group h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                        ))}
                      </div>
                      <Button asChild size="sm" className="h-9 bg-white text-black hover:bg-white/90 rounded-full font-semibold">
                        <Link href="/projects">View detail</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </ScaleOnHover>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      {/* PROCESS */}
      <section className="py-24 container-tight">
        <FadeIn direction="up">
          <SectionHeader
            align="center"
            label="Why us"
            title={<>Transforming Your Ideas into <span className="highlight-mark">Extraordinary Realities</span></>}
          />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-5 mt-14">
          <FadeIn direction="up" className="md:col-span-2">
            <div className="surface-card p-8">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary"><Lightbulb className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-2xl font-semibold">Expertise and Innovation</h3>
                  <p className="text-muted-foreground mt-2 max-w-xl">Our team consists of highly trained professionals who can keep up with the latest technologies and methodologies.</p>
                  <Button asChild variant="outline" size="sm" className="mt-5 rounded-full"><Link href="/about">Learn more</Link></Button>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up">
            <div className="surface-card p-8">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary mb-4"><Target className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold">Customized Strategies</h3>
              <p className="text-muted-foreground mt-2">We don't believe in one-size-fits-all. Every engagement is tailored to your audience and goals.</p>
            </div>
          </FadeIn>
          <FadeIn direction="up">
            <div className="surface-card p-8">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary mb-4"><Users className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold">Collaborative Partnership</h3>
              <p className="text-muted-foreground mt-2">We believe in you — close, communicative collaboration that puts your vision at the heart of the work.</p>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 container-tight">
        <FadeIn direction="up">
          <SectionHeader label="Testimonials" title="They are satisfied with the results we provide" />
        </FadeIn>
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t) => (
            <FadeIn key={t.name} direction="up">
              <figure className="surface-card p-7 h-full">
                <blockquote className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="py-24 container-tight">
        <FadeIn direction="up">
          <div className="relative rounded-3xl border border-border overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 glow-bg" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
                Create something awesome and extraordinary with us
              </h2>
              <p className="text-muted-foreground mt-5 max-w-lg mx-auto">
                With a bit of creativity, we can make your dreams come true.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="h-12 px-8 w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full font-semibold shadow-xl hover:scale-105 transition-all">
                  <Link href="/contact">Contact us <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto rounded-full font-semibold">
                  <Link href="/services">See pricing</Link>
                </Button>
              </div>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                {["Free 30-min consult", "No long contracts", "Senior team only"].map((x) => (
                  <li key={x} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </SiteLayout>
  );
}
