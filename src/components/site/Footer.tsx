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
    <footer className="border-t border-border mt-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="inline-block">
            <Image 
              src={logo} 
              alt="Samodigital" 
              width={140} 
              height={47} 
              className="h-12 w-auto" 
            />
          </Link>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
            A digital agency designing and engineering brands and products that endure.
          </p>
          <div className="mt-6 flex gap-2">
            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="grid place-items-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label={`Social link ${i + 1}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.items.map((it) => (
                <li key={it.label}>
                  <Link 
                    href={it.to} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container-tight py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-500">
          <p>© {currentYear} Samodigital. All rights reserved.</p>
          <p>Crafted with intention in Sanaag.</p>
        </div>
      </div>
    </footer>
  );
};
