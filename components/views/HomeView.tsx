"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import ToothScene from "@/components/ToothScene";
import BeforeAfter from "@/components/BeforeAfter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Magnetic from "@/components/fx/Magnetic";
import Tilt from "@/components/fx/Tilt";
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
      <Stats />
      <SmileSlider />
      <Features />
      <ServicesPreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

/* ================================================================
   HERO — full-screen cinematic dark stage. Aurora blobs drift in
   the background, a spotlight follows the cursor, the headline
   rises word by word and the whole stage parallaxes away on scroll.
   ================================================================ */
function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // cursor spotlight
  const sx = useMotionValue(-600);
  const sy = useMotionValue(-600);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${sx}px ${sy}px, rgba(47,198,214,0.14), transparent 70%)`;

  // parallax exit on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        if (reduce) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        sx.set(e.clientX - rect.left);
        sy.set(e.clientY - rect.top);
      }}
      className="relative flex min-h-screen flex-col overflow-hidden bg-deep text-white"
    >
      {/* layered backdrop */}
      <div className="aurora-blob aurora-1 left-[-10%] top-[-15%] h-[34rem] w-[34rem]" />
      <div className="aurora-blob aurora-2 right-[-12%] top-[10%] h-[30rem] w-[30rem]" />
      <div className="aurora-blob aurora-3 bottom-[-20%] left-[30%] h-[28rem] w-[28rem]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(75%_65%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-32 pb-24 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16">
        <motion.div style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
          <Reveal direction="none">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 [animation:pulseRing_2.4s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {t.hero.badge}
            </span>
          </Reveal>

          <AnimatedHeading
            key={t.hero.title}
            as="h1"
            text={t.hero.title}
            highlight={t.hero.highlight}
            highlightClass="italic text-gradient-light"
            delay={0.15}
            className="mt-7 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          />

          <Reveal delay={0.5} className="mt-7 max-w-md text-lg leading-relaxed text-white/70">
            <p>{t.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={0.65} className="mt-9">
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-4 text-sm font-bold text-deep shadow-glow transition-shadow duration-300 hover:shadow-[0_24px_70px_-12px_rgba(47,198,214,0.7)]"
                >
                  <span className="pointer-events-none absolute inset-y-0 w-16 bg-white/40 blur-md [animation:shimmer_3.4s_ease-in-out_infinite]" />
                  {t.hero.ctaPrimary}
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-brand-300 hover:text-brand-200"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.8} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AK", "BG", "VH", "EN"].map((i, idx) => (
                <span
                  key={i}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-deep text-xs font-bold text-white ${
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
              <p className="text-white/60">
                <span className="font-bold text-white">4.9/5</span> {t.hero.reviews}
              </p>
            </div>
          </Reveal>
        </motion.div>

        <motion.div className="relative" style={reduce ? undefined : { y: sceneY }}>
          <ToothScene />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        style={{ opacity: contentOpacity }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">{t.hero.scroll}</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-brand-300" />
        </span>
      </motion.div>

      {/* marquee riding the hero's bottom edge */}
      <div className="relative border-t border-white/10 bg-white/[0.03] py-4 backdrop-blur-sm">
        <div className="flex w-max marquee-track gap-4">
          {[...t.marquee, ...t.marquee].map((it, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap px-4 text-sm font-semibold text-white/50">
              <Icon name="tooth" className="h-4 w-4 text-brand-400" />
              {it}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-deep to-transparent" />
      </div>
    </section>
  );
}

/* ================================================================
   STATS — editorial numerals on porcelain
   ================================================================ */
function Stats() {
  const { t } = useLang();
  return (
    <section className="border-b border-brand-100/60 bg-porcelain">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {t.stats.map((s) => (
            <StaggerItem key={s.label} className="relative pl-5 text-left">
              <span className="absolute left-0 top-1 h-full w-0.5 rounded-full bg-gradient-to-b from-brand-400 to-gold" />
              <div className="font-display text-4xl font-medium text-ink sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ================================================================
   SMILE SLIDER — interactive before / after
   ================================================================ */
function SmileSlider() {
  const { t } = useLang();
  const ba = t.beforeAfter;
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{ba.eyebrow}</Eyebrow>
        <AnimatedHeading
          key={ba.title}
          as="h2"
          text={ba.title}
          highlight={ba.highlight}
          className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl"
        />
        <Reveal delay={0.3} className="mt-4 text-ink-soft">
          <p>{ba.subtitle}</p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl">
        <BeforeAfter beforeLabel={ba.before} afterLabel={ba.after} hint={ba.hint} />
        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {ba.caption}
        </p>
      </Reveal>
    </section>
  );
}

/* ================================================================
   FEATURES — 3D tilt cards
   ================================================================ */
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
          className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl"
        />
      </div>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.features.map((f) => (
          <StaggerItem key={f.title}>
            <Tilt className="group relative h-full rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
            </Tilt>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

/* ================================================================
   SERVICES PREVIEW — numbered editorial cards
   ================================================================ */
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
            className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl"
          />
        </div>
        <Reveal>
          <Magnetic strength={0.25}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
            >
              {t.servicesPreview.all}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.services.slice(0, 6).map((s, idx) => (
          <StaggerItem key={s.title}>
            <Link
              href="/services"
              className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-soft"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[6rem] font-medium leading-none text-brand-50 transition-colors duration-300 group-hover:text-brand-100" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="relative flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">{s.price}</span>
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
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

/* ================================================================
   PROCESS — dark band with a scroll-driven timeline: the center
   line draws itself as you scroll, steps light up alternately.
   ================================================================ */
function Process() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="relative mx-5 my-10 overflow-hidden rounded-[2.5rem] bg-deep px-5 py-20 text-white sm:py-24">
      <div className="aurora-blob aurora-1 left-[-8%] top-[-10%] h-96 w-96" />
      <div className="aurora-blob aurora-3 bottom-[-14%] right-[-6%] h-96 w-96" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-200">
            {t.processSection.eyebrow}
          </span>
          <AnimatedHeading
            key={t.processSection.title}
            as="h2"
            text={t.processSection.title}
            highlight={t.processSection.highlight}
            highlightClass="italic text-gradient-light"
            className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-5xl"
          />
        </div>

        <div ref={ref} className="relative mt-16">
          {/* timeline rail + animated fill */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-400 via-mint to-gold md:left-1/2"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-12 md:space-y-16">
            {t.process.map((p, i) => {
              const rightSide = i % 2 === 1;
              return (
                <Reveal key={p.step} delay={0.05} direction={rightSide ? "left" : "right"}>
                  <div className={`relative pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0`}>
                    {/* node on the rail */}
                    <span className="absolute left-5 top-1 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-brand-400/50 bg-deep text-xs font-extrabold text-brand-300 shadow-glow md:left-1/2">
                      {p.step}
                    </span>
                    <div className={rightSide ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}>
                      <h3 className="font-display text-2xl font-medium">{p.title}</h3>
                      <p className="mt-2 leading-relaxed text-white/65">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   TESTIMONIALS — carousel
   ================================================================ */
function Testimonials() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{t.testimonialsSection.eyebrow}</Eyebrow>
        <AnimatedHeading
          key={t.testimonialsSection.title}
          as="h2"
          text={t.testimonialsSection.title}
          highlight={t.testimonialsSection.highlight}
          className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl"
        />
      </div>
      <div className="mt-12">
        <TestimonialCarousel items={t.testimonials} />
      </div>
    </section>
  );
}

/* ================================================================
   CTA — dark stage with a giant outline watermark
   ================================================================ */
function CTA() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-deep px-6 py-16 text-center text-white shadow-lift sm:px-12 sm:py-24">
          <div className="aurora-blob aurora-2 left-[-10%] top-[-30%] h-96 w-96" />
          <div className="aurora-blob aurora-1 bottom-[-30%] right-[-10%] h-96 w-96" />
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
          <span
            className="pointer-events-none absolute inset-x-0 bottom-2 select-none whitespace-nowrap text-center font-display text-[16vw] font-semibold leading-none text-outline sm:text-[9rem] lg:text-[11rem]"
            aria-hidden="true"
          >
            EuroDent
          </span>

          <div className="relative">
            <AnimatedHeading
              key={t.cta.title}
              as="h2"
              text={t.cta.title}
              highlightClass="italic text-gradient-light"
              className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-5xl"
            />
            <p className="mx-auto mt-5 max-w-lg text-white/70">{t.cta.text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-8 py-4 text-sm font-bold text-deep shadow-glow transition-shadow duration-300 hover:shadow-[0_24px_70px_-12px_rgba(47,198,214,0.7)]"
                >
                  <span className="pointer-events-none absolute inset-y-0 w-16 bg-white/40 blur-md [animation:shimmer_3.4s_ease-in-out_infinite]" />
                  {t.cta.primary}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href={t.clinic.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-brand-300 hover:text-brand-200"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {t.cta.call}
                </a>
              </Magnetic>
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
