"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, salon } from "@/data/salon";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section crosses the middle of the viewport.
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector<HTMLElement>(l.href)).filter((el) => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-ink/10 bg-cream/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-rose" aria-hidden />
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label={`${salon.name} ${salon.suffix}, back to top`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 text-sm font-semibold text-stone-600 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "location" : undefined}
                className={`rounded-full px-3.5 py-2 transition hover:text-rose ${active === l.href ? "bg-ink/5 text-rose" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#book" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-rose sm:inline-block">
            Book Appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border border-ink/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-ink/10 px-4 pb-6 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-ink/5 py-3 font-display text-3xl hover:text-rose ${active === l.href ? "text-rose" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href="#book" onClick={() => setOpen(false)} className="block rounded-full bg-ink py-3 text-center font-bold text-cream">
              Book Appointment
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
