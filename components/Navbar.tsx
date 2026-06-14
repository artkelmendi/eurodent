"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ToothMark from "./ToothMark";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-3.5 ${
          scrolled
            ? "glass shadow-lift ring-1 ring-brand-100"
            : "bg-white/55 ring-1 ring-white/60 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 pl-1.5" aria-label="EuroDent">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6">
            <ToothMark className="h-5 w-5" withShine />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Euro<span className="text-gradient">Dent</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    active ? "text-white" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 shadow-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3 py-2 text-xs font-bold text-ink-soft transition-colors duration-200 hover:border-brand-400 hover:text-brand-700"
            aria-label={lang === "sq" ? "Switch to English" : "Kalo në shqip"}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
            </svg>
            {t.langName}
          </button>

          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-700 hover:shadow-glow sm:inline-flex"
          >
            {t.nav.book}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-brand-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl glass p-2 shadow-lift md:hidden"
          >
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                    active ? "bg-brand-100 text-brand-700" : "text-ink-soft hover:bg-brand-50 hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-1 block rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-white"
            >
              {t.nav.book}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
