"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/**
 * ToothScene — the hero centerpiece.
 * A glossy floating tooth with a sweeping shine, orbiting sparkles,
 * a slowly rotating dashed "care" ring, twinkling stars and a
 * self-drawing smile arc. Pure SVG + Framer Motion.
 */
export default function ToothScene() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* soft glow backdrop */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-200/70 via-brand-100/40 to-mint/30 blur-2xl" />

      {/* rotating dashed orbit */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle
            cx="200"
            cy="200"
            r="168"
            fill="none"
            stroke="var(--color-brand-400)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="2 12"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* counter-rotating inner orbit with a bead */}
      <motion.div
        className="absolute inset-10"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(242,184,75,0.6)]" />
        <span className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-mint" />
      </motion.div>

      {/* floating tooth */}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={reduce ? {} : { y: [0, -9, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="relative h-[60%] w-[60%]">
          <svg
            viewBox="22 8 156 204"
            className="h-full w-full drop-shadow-[0_24px_40px_rgba(6,42,51,0.22)]"
            aria-label="A bright, healthy tooth"
            role="img"
          >
            <defs>
              <linearGradient id="toothFill" x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.55" stopColor="#eef9fb" />
                <stop offset="1" stopColor="#cdeef3" />
              </linearGradient>
              <clipPath id="toothClip">
                <path d="M100 14c-17-12-40-13-55-1C28 26 24 50 30 76c4 16 7 27 10 42 3 12 4 26 10 36 5 9 17 9 21 0 4-8 6-19 8-30 2-11 6-20 11-22 5 2 9 11 11 22 2 11 4 22 8 30 4 9 16 9 21 0 6-10 7-24 10-36 3-15 6-26 10-42 6-26 2-50-15-63-15-12-38-11-55 1Z" />
              </clipPath>
            </defs>

            {/* body */}
            <path
              clipPath="url(#toothClip)"
              d="M100 14c-17-12-40-13-55-1C28 26 24 50 30 76c4 16 7 27 10 42 3 12 4 26 10 36 5 9 17 9 21 0 4-8 6-19 8-30 2-11 6-20 11-22 5 2 9 11 11 22 2 11 4 22 8 30 4 9 16 9 21 0 6-10 7-24 10-36 3-15 6-26 10-42 6-26 2-50-15-63-15-12-38-11-55 1Z"
              fill="url(#toothFill)"
              stroke="#bfe7ee"
              strokeWidth="2"
            />
            {/* soft inner highlight */}
            <path
              clipPath="url(#toothClip)"
              d="M70 36c-12 6-17 22-15 40"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* sweeping shine */}
            {!reduce && (
              <g clipPath="url(#toothClip)">
                <motion.rect
                  x="-120"
                  y="-40"
                  width="70"
                  height="320"
                  fill="#ffffff"
                  fillOpacity="0.6"
                  transform="rotate(18 100 120)"
                  animate={{ x: [-120, 280] }}
                  transition={{
                    duration: 3.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.6,
                  }}
                />
              </g>
            )}

            {/* drawing smile / sparkle on the tooth */}
            <motion.path
              d="M74 150c8 9 20 13 32 9"
              fill="none"
              stroke="var(--color-brand-400)"
              strokeOpacity="0.6"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: reduce ? 1 : [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                times: [0, 0.4, 0.7, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </svg>

          {/* the classic 4-point sparkle on the tooth */}
          <Sparkle className="absolute right-[8%] top-[14%] h-7 w-7 text-white" delay={0.2} />
        </div>
      </motion.div>

      {/* twinkling stars around the scene */}
      <Sparkle className="absolute left-[6%] top-[24%] h-6 w-6 text-gold" delay={0} />
      <Sparkle className="absolute right-[10%] bottom-[20%] h-8 w-8 text-brand-400" delay={1.1} />
      <Sparkle className="absolute left-[18%] bottom-[12%] h-5 w-5 text-mint" delay={0.7} />

      {/* floating check badge */}
      <motion.div
        className="absolute -right-1 top-[30%] flex items-center gap-2 rounded-full glass px-3 py-2 shadow-lift"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-xs font-bold text-ink">{t.badges.painless}</span>
      </motion.div>

      {/* floating rating badge */}
      <motion.div
        className="absolute -left-2 bottom-[26%] flex items-center gap-2 rounded-full glass px-3 py-2 shadow-lift"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-sm font-extrabold text-ink">4.9</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
            </svg>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Sparkle({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      animate={reduce ? {} : { scale: [0, 1, 0], rotate: [0, 25, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, delay, repeatDelay: 0.6 }}
    >
      <path d="M12 0c.6 5.7 3.1 8.7 9 9-5.9.3-8.4 3.3-9 9-.6-5.7-3.1-8.7-9-9 5.9-.3 8.4-3.3 9-9Z" />
    </motion.svg>
  );
}
