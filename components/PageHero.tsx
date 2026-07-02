import { AnimatedHeading, Reveal } from "./Motion";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string[];
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep pt-40 pb-20 text-white sm:pt-48 sm:pb-24">
      <div className="aurora-blob aurora-1 left-[-10%] top-[-30%] h-[26rem] w-[26rem]" />
      <div className="aurora-blob aurora-2 right-[-10%] top-[0%] h-[24rem] w-[24rem]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal direction="none">
          <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-200">
            {eyebrow}
          </span>
        </Reveal>
        <AnimatedHeading
          as="h1"
          text={title}
          highlight={highlight}
          highlightClass="italic text-gradient-light"
          delay={0.1}
          className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
        />
        <Reveal delay={0.45} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          <p>{subtitle}</p>
        </Reveal>
      </div>

      {/* fade into the light page body */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-cream/20" />
    </section>
  );
}
