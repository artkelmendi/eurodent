"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/dictionary";
import { Icon } from "@/components/Icons";

const AUTOPLAY_MS = 6000;

/**
 * TestimonialCarousel — one large editorial quote at a time.
 * Auto-advances, drag/swipe to navigate, arrows + dots.
 */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const reduce = useReducedMotion();
  const [[index, direction], setIndex] = useState<[number, number]>([0, 1]);
  const paused = useRef(false);

  const go = useCallback(
    (dir: number) =>
      setIndex(([i]) => [(i + dir + items.length) % items.length, dir]),
    [items.length]
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [go, reduce]);

  const t = items[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-brand-100 bg-white/80 px-6 py-10 shadow-lift sm:min-h-[300px] sm:px-14">
        {/* oversized quote mark */}
        <span className="pointer-events-none absolute -top-3 left-6 font-display text-[9rem] leading-none text-brand-100 sm:left-10" aria-hidden="true">
          &ldquo;
        </span>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.figure
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: direction * -60, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) go(1);
              else if (info.offset.x > 70) go(-1);
            }}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="sparkle" className="h-4 w-4" fill="currentColor" stroke="none" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl leading-snug text-ink sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-white">
                {t.initials}
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">{t.name}</span>
                <span className="block text-xs text-ink-muted">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <CarouselArrow dir={-1} onClick={() => go(-1)} />
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`${i + 1} / ${items.length}`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-brand-500" : "w-2 bg-brand-200 hover:bg-brand-300"
              }`}
            />
          ))}
        </div>
        <CarouselArrow dir={1} onClick={() => go(1)} />
      </div>
    </div>
  );
}

function CarouselArrow({ dir, onClick }: { dir: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Next" : "Previous"}
      className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-brand-200 bg-white/80 text-ink transition-colors duration-200 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
    >
      <Icon name="arrow" className={`h-4 w-4 ${dir === -1 ? "rotate-180" : ""}`} />
    </button>
  );
}
