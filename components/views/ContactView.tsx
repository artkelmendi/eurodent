"use client";

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Icon } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

const MAP_QUERY = "Peja, Kosovo";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&hl=sq&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export default function ContactView() {
  const { t } = useLang();
  const c = t.contactPage;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        highlight={c.highlight}
        subtitle={c.subtitle}
      />

      {/* Team — two specialists */}
      <section className="mx-auto max-w-4xl px-5 pb-8">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {t.team.map((d) => (
            <StaggerItem
              key={d.name}
              className="card-hover group overflow-hidden rounded-3xl border border-brand-100 bg-white/80 shadow-soft"
            >
              <div className={`relative grid h-52 place-items-center bg-gradient-to-br ${d.accent}`}>
                <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid" />
                <span className="font-display text-6xl font-semibold text-white drop-shadow">{d.initials}</span>
                <Icon name="tooth" className="absolute bottom-3 right-3 h-8 w-8 text-white/40" />
                {d.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 shadow-soft">
                    {d.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{d.name}</h3>
                <p className="text-sm font-semibold text-brand-600">{d.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{d.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Contact + form */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              {c.getInTouch}
            </span>
            <AnimatedHeading
              key={c.formTitle}
              as="h2"
              text={c.formTitle}
              highlight={c.formHighlight}
              className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            />
            <Reveal delay={0.3} className="mt-4 max-w-md text-ink-soft">
              <p>{c.formIntro}</p>
            </Reveal>

            <Stagger className="mt-8 space-y-3">
              {c.cards.map((card) => (
                <StaggerItem key={card.label}>
                  <a href={card.href} className="card-hover flex items-center gap-4 rounded-2xl border border-brand-100 bg-white/80 p-4 shadow-soft">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={card.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wide text-ink-muted">{card.label}</span>
                      <span className="block font-semibold text-ink">{card.value}</span>
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2} className="mt-6">
              <div className="rounded-2xl border border-brand-100 bg-white/80 p-5 shadow-soft">
                <div className="flex items-center gap-2 text-ink">
                  <Icon name="clock" className="h-5 w-5 text-brand-600" />
                  <h3 className="font-bold">{c.hoursTitle}</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {c.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-ink-soft">{h.day}</span>
                      <span className="font-semibold text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Google Map */}
      <section id="map" className="mx-auto max-w-6xl px-5 pb-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white/80 shadow-soft">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-brand-100 p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">{c.mapName}</p>
                  <p className="text-sm text-ink-muted">{c.mapAddress}</p>
                </div>
              </div>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {c.openMaps}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <iframe
              title={c.mapName}
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full sm:h-96"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
