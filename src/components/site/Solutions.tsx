"use client";

import { Code, Palette, Megaphone, ShoppingCart, BarChart, Shield, Lightbulb } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";

const solutions = [
  { icon: Code, title: "Web Development", desc: "Custom web applications built with cutting-edge technologies for optimal performance." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that creates intuitive and engaging digital experiences." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven campaigns that amplify your brand and drive measurable results." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Scalable online stores with seamless checkout and inventory management." },
  { icon: BarChart, title: "Analytics & SEO", desc: "Strategic optimization to increase visibility and convert traffic into growth." },
  { icon: Shield, title: "Security & Support", desc: "Robust protection and ongoing maintenance to keep your digital assets secure." },
  { icon: Lightbulb, title: "Consulting", desc: "Expert guidance and strategic insights to navigate digital transformation and achieve your business goals." },
];

export const Solutions = () => {
  return (
    <section className="py-24 container-tight">
      <FadeIn direction="up">
        <div className="text-center mb-14">
          <span className="section-label mb-6">Solutions</span>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-balance max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end solutions that drive business growth and digital transformation.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <FadeIn key={solution.title} direction="up">
              <div className="surface-card p-7 group hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 h-full">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{solution.desc}</p>
              </div>
            </FadeIn>
          );
        })}
      </StaggerContainer>
    </section>
  );
};
