"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "@/image/samodigital.png";
import { useTheme } from "next-themes";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200/50" 
          : "bg-white shadow-sm"
      }`}
    >
      <nav className={`container-tight flex items-center justify-between transition-all duration-500 ${
        scrolled ? "h-20 md:h-24" : "h-24 md:h-28"
      }`}>
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <Image 
            src={logo} 
            alt="Samodigital" 
            width={72} 
            height={72} 
            className={`transition-all duration-500 ${
              scrolled ? "h-16 w-auto md:h-20 md:w-auto" : "h-20 w-auto md:h-24 md:w-auto"
            }`}
            priority 
          />
        </Link>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-2 shadow-sm">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive ? "bg-black text-white shadow-md" : "text-gray-700 hover:text-black hover:bg-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid place-items-center h-10 w-10 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Button asChild className="h-10 px-8 bg-black text-white hover:bg-gray-900 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-xl">
          <div className="container-tight py-6 flex flex-col gap-2">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive ? "bg-black text-white shadow-md" : "text-gray-700 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="flex gap-2 mt-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1 flex items-center justify-center h-12 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300 font-semibold"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <><Sun className="h-5 w-5 mr-2" /> Light</> : <><Moon className="h-5 w-5 mr-2" /> Dark</>}
                </button>
              )}
              <Button asChild className="flex-1 bg-black text-white hover:bg-gray-900 rounded-full font-semibold h-12 shadow-md hover:shadow-lg transition-all">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
