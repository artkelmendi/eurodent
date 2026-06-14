"use client";

import Link from "next/link";
import ToothScene from "@/components/ToothScene";
import {
  AnimatedHeading,
  Reveal,
  Stagger,
  StaggerItem,
  Counter,
} from "@/components/Motion";
import { Icon } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

export default function HomeView() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <ServicesPreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal direction="none">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 [animation:pulseRing_2.4s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {t.hero.badge}
            </span>
          </Reveal>

          <AnimatedHeading
            key={t.hero.title}
            as="h1"
            text={t.hero.title}
            highlight={t.hero.highlight}
            delay={0.15}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          />

          <Reveal delay={0.5} className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            <p>{t.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={0.65} className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-700 hover:shadow-glow"
              >
                {t.hero.ctaPrimary}
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand-400 hover:text-brand-700"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.8} className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AK", "BG", "VH", "EN"].map((i, idx) => (
                <span
                  key={i}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-cream text-xs font-bold text-white ${
                    ["bg-brand-400", "bg-brand-600", "bg-gold", "bg-brand-800"][idx]
                  }`}
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="sparkle" className="h-4 w-4" fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-ink-muted">
                <span className="font-bold text-ink">4.9/5</span> {t.hero.reviews}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <ToothScene />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  return (
    <div className="relative overflow-hidden border-y border-brand-100 bg-white/60 py-5">
      <div className="flex w-max marquee-track gap-4">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap px-4 text-sm font-semibold text-ink-soft">
            <Icon name="tooth" className="h-4 w-4 text-brand-400" />
            {it}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}

function Stats() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-100 bg-brand-100 shadow-soft lg:grid-cols-4">
        {t.stats.map((s) => (
          <StaggerItem key={s.label} className="bg-cream px-6 py-8 text-center">
            <div className="font-display text-4xl font-semibold text-brand-700 sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
            </div>
            <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Features() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{t.featuresSection.eyebrow}</Eyebrow>
        <AnimatedHeading
          key={t.featuresSection.title}
          as="h2"
          text={t.featuresSection.title}
          highlight={t.featuresSection.highlight}
          className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        />
      </div>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.features.map((f) => (
          <StaggerItem key={f.title} className="card-hover group rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <Icon name={f.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
        <div className="max-w-xl">
          <Eyebrow>{t.servicesPreview.eyebrow}</Eyebrow>
          <AnimatedHeading
            key={t.servicesPreview.title}
            as="h2"
            text={t.servicesPreview.title}
            highlight={t.servicesPreview.highlight}
            className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          />
        </div>
        <Reveal>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
          >
            {t.servicesPreview.all}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.services.slice(0, 6).map((s) => (
          <StaggerItem key={s.title}>
            <Link
              href="/services"
              className="card-hover group flex h-full flex-col rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-500">{s.price}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                {t.servicesPreview.learnMore}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Process() {
  const { t } = useLang();
  return (
    <section className="relative mx-5 my-8 overflow-hidden rounded-[2rem] mesh-dark px-5 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-200">
            {t.processSection.eyebrow}
          </span>
          <AnimatedHeading
            key={t.processSection.title}
            as="h2"
            text={t.processSection.title}
            highlight={t.processSection.highlight}
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
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
  );
}

function Testimonials() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{t.testimonialsSection.eyebrow}</Eyebrow>
        <AnimatedHeading
          key={t.testimonialsSection.title}
          as="h2"
          text={t.testimonialsSection.title}
          highlight={t.testimonialsSection.highlight}
          className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        />
      </div>

      <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
        {t.testimonials.map((tt) => (
          <StaggerItem key={tt.name} className="card-hover flex h-full flex-col rounded-2xl border border-brand-100 bg-white/80 p-7 shadow-soft">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="sparkle" className="h-4 w-4" fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">&ldquo;{tt.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                {tt.initials}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{tt.name}</p>
                <p className="text-xs text-ink-muted">{tt.role}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function CTA() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-mint/20 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-gold-soft/40 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-soft">{t.cta.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-700 hover:shadow-glow"
              >
                {t.cta.primary}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={t.clinic.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name="phone" className="h-4 w-4" />
                {t.cta.call}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
      {children}
    </span>
  );
}
