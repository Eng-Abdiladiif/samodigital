"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import logo from "@/image/samodigital.png";

const cols = [
  {
    title: "Navigate",
    items: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Projects", to: "/projects" },
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Web Design", to: "/services" },
      { label: "Development", to: "/services" },
      { label: "Branding", to: "/services" },
      { label: "SEO", to: "/services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/about" },
      { label: "Privacy", to: "/" },
      { label: "Terms", to: "/" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 mt-24 bg-black">
    <div className="container-tight py-16 grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Samodigital" width={280} height={93} className="h-18 w-auto" />
        </Link>
        <p className="mt-4 text-sm text-white/60 max-w-xs">
          A digital agency designing and engineering brands and products that endure.
        </p>
        <div className="mt-6 flex gap-2">
          {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
            <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="text-sm font-semibold mb-4 text-white">{c.title}</h4>
          <ul className="space-y-2.5">
            {c.items.map((it) => (
              <li key={it.label}>
                <Link href={it.to} className="text-sm text-white/60 hover:text-white transition-colors">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-white/10">
      <div className="container-tight py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {currentYear} Samodigital. All rights reserved.</p>
        <p>Crafted with intention in San Francisco.</p>
      </div>
    </div>
  </footer>
  );
};
