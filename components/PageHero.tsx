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
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(60%_55%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal direction="none">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </span>
        </Reveal>
        <AnimatedHeading
          as="h1"
          text={title}
          highlight={highlight}
          delay={0.1}
          className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl"
        />
        <Reveal delay={0.45} className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          <p>{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
