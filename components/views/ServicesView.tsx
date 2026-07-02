"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Icon } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

export default function ServicesView() {
  const { t } = useLang();
  const sp = t.servicesPage;

  return (
    <>
      <PageHero
        eyebrow={sp.eyebrow}
        title={sp.title}
        highlight={sp.highlight}
        subtitle={sp.subtitle}
      />

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s) => (
            <StaggerItem
              key={s.title}
              className="card-hover group flex h-full flex-col rounded-2xl border border-brand-100 bg-white/80 p-7 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                  {s.price}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-ink">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-brand-100 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-ink-soft">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process band */}
      <section className="relative mx-5 my-12 overflow-hidden rounded-[2.5rem] bg-deep px-5 py-16 text-white sm:py-20">
        <div className="aurora-blob aurora-1 left-[-8%] top-[-15%] h-80 w-80" />
        <div className="aurora-blob aurora-3 bottom-[-15%] right-[-6%] h-80 w-80" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-200">
              {sp.approachEyebrow}
            </span>
            <AnimatedHeading
              key={sp.approachTitle}
              as="h2"
              text={sp.approachTitle}
              highlight={sp.approachHighlight}
              highlightClass="italic text-gradient-light"
              className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-5xl"
            />
          </div>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <StaggerItem key={p.step} className="relative rounded-2xl glass-dark p-6">
                <span className="font-display text-5xl font-semibold text-white/15">{p.step}</span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Guarantees */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {sp.guarantees.map((g) => (
            <StaggerItem key={g.t} className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-soft">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={g.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-ink">{g.t}</h3>
                <p className="mt-1 text-sm text-ink-muted">{g.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            {sp.faqEyebrow}
          </span>
          <AnimatedHeading
            key={sp.faqTitle}
            as="h2"
            text={sp.faqTitle}
            highlight={sp.faqHighlight}
            className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl"
          />
        </div>
        <Faq items={t.faqs} />

        <Reveal className="mt-10 text-center">
          <p className="text-ink-soft">{sp.faqCtaText}</p>
          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-700 hover:shadow-glow"
          >
            {sp.faqCtaButton}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
