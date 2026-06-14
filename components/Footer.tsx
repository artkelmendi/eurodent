"use client";

import Link from "next/link";
import ToothMark from "./ToothMark";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const columns = [
    {
      title: t.footer.clinic,
      links: [
        { label: t.nav.home, href: "/" },
        { label: t.nav.services, href: "/services" },
        { label: t.nav.contact, href: "/contact" },
      ],
    },
    {
      title: t.footer.treatments,
      links: t.services.slice(0, 4).map((s) => ({ label: s.title, href: "/services" })),
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden mesh-dark text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                <ToothMark className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Euro<span className="text-brand-300">Dent</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {["instagram", "facebook", "x"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-brand-400 hover:text-white"
                >
                  <Social name={s} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-brand-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.visit}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>{t.clinic.address}</li>
              <li>
                <a href={t.clinic.phoneHref} className="hover:text-brand-300">
                  {t.clinic.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.clinic.email}`} className="hover:text-brand-300">
                  {t.clinic.email}
                </a>
              </li>
              <li className="text-white/55">{t.footer.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} EuroDent. {t.footer.rights}</p>
          <p>
            {t.footer.crafted} · <span className="text-white/70">{t.footer.privacy}</span> ·{" "}
            <span className="text-white/70">{t.footer.terms}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({ name }: { name: string }) {
  const common = "h-4 w-4";
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.2c0-.84.26-1.41 1.47-1.41h1.43V5.2c-.7-.1-1.4-.14-2.1-.14-2.1 0-3.5 1.28-3.5 3.62v2.02H8v2.9h2.3V21h3.2Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
      <path d="M17.5 4h2.6l-5.7 6.5L21 20h-5.3l-4.1-5.4L6.8 20H4.2l6.1-7L3.4 4h5.4l3.7 4.9L17.5 4Zm-.9 14.3h1.4L8.4 5.4H6.9l9.7 12.9Z" />
    </svg>
  );
}
