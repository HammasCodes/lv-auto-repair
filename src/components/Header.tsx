"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "254-235-3885";
const PHONE_TEL = "tel:+12542353885";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-md" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
          L <span className="text-red">&amp;</span> V Auto Repair
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_TEL}
            className="text-sm font-bold tracking-wide text-white hover:text-red"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-red px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-deep"
          >
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-white/85 hover:text-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="text-base font-bold text-white hover:text-red"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-sm bg-red px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Free Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
