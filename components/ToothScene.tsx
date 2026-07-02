"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useId, useState } from "react";
import { useLang } from "@/lib/i18n";

/**
 * ToothScene — the hero mascot. A softly-shaded 3D tooth character
 * whose eyes follow the cursor everywhere on the page. It tilts in
 * perspective toward the mouse, blinks at random, and squashes with
 * a sparkle burst when clicked. Two mini companion teeth float at
 * different parallax depths, eyes tracking too.
 */
export default function ToothScene() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  // viewport-wide cursor (0..1)
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  // perspective tilt of the whole scene
  const rotateY = useSpring(useTransform(mx, [0, 1], [-11, 11]), { stiffness: 60, damping: 16 });
  const rotateX = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 60, damping: 16 });

  // parallax: hero tooth drifts with the cursor, minis drift against it
  const heroX = useSpring(useTransform(mx, [0, 1], [-16, 16]), { stiffness: 50, damping: 18 });
  const heroY = useSpring(useTransform(my, [0, 1], [-11, 11]), { stiffness: 50, damping: 18 });
  const backX = useSpring(useTransform(mx, [0, 1], [14, -14]), { stiffness: 40, damping: 20 });
  const backY = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 40, damping: 20 });

  // pupils
  const px = useSpring(useTransform(mx, [0, 1], [-7.5, 7.5]), { stiffness: 320, damping: 22 });
  const py = useSpring(useTransform(my, [0, 1], [-5.5, 5.5]), { stiffness: 320, damping: 22 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1100 }}
    >
      {/* soft glow backdrop */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-500/40 via-brand-400/15 to-mint/20 blur-2xl" />

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
            r="172"
            fill="none"
            stroke="var(--color-brand-300)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="2 12"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* counter-rotating inner orbit with beads */}
      <motion.div
        className="absolute inset-10"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(242,184,75,0.6)]" />
        <span className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_2px_rgba(94,231,208,0.6)]" />
      </motion.div>

      {/* mini companion teeth — behind the star, drifting against the cursor */}
      <motion.div
        className="absolute left-[2%] top-[16%] w-[19%]"
        style={reduce ? undefined : { x: backX, y: backY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [4, -7, 4], rotate: [-4, 3, -4] }}
          transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
        >
          <ToothCharacter px={px} py={py} pupilScale={0.55} mini blinkSeed={1.8} />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] right-[3%] w-[15%]"
        style={reduce ? undefined : { x: backX, y: backY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [-5, 6, -5], rotate: [5, -3, 5] }}
          transition={{ duration: 8.6, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
        >
          <ToothCharacter px={px} py={py} pupilScale={0.45} mini blinkSeed={3.4} />
        </motion.div>
      </motion.div>

      {/* contact shadow under the hero tooth */}
      <motion.div
        className="absolute bottom-[9%] left-1/2 h-7 w-[46%] -translate-x-1/2 rounded-[100%] bg-black/45 blur-xl"
        animate={reduce ? {} : { scaleX: [1, 0.8, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />

      {/* the star of the show */}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        style={reduce ? undefined : { x: heroX, y: heroY }}
      >
        <motion.div
          className="relative h-[62%] w-[62%]"
          animate={reduce ? {} : { y: [8, -8, 8] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <ToothCharacter px={px} py={py} pupilScale={1} blinkSeed={0} interactive />
        </motion.div>
      </motion.div>

      {/* twinkling stars around the scene */}
      <Sparkle className="absolute left-[6%] top-[24%] h-6 w-6 text-gold" delay={0} />
      <Sparkle className="absolute right-[10%] bottom-[26%] h-8 w-8 text-brand-300" delay={1.1} />
      <Sparkle className="absolute left-[18%] bottom-[8%] h-5 w-5 text-mint" delay={0.7} />

      {/* floating check badge */}
      <motion.div
        className="absolute -right-1 top-[26%] flex items-center gap-2 rounded-full glass-dark px-3 py-2 shadow-lift"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-xs font-bold text-white">{t.badges.painless}</span>
      </motion.div>

      {/* floating rating badge */}
      <motion.div
        className="absolute -left-2 bottom-[30%] flex items-center gap-2 rounded-full glass-dark px-3 py-2 shadow-lift"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-sm font-extrabold text-white">4.9</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
            </svg>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   ToothCharacter — softly shaded tooth with tracking eyes.
   ================================================================ */

const TOOTH_PATH =
  "M100 18 C78 4 44 6 30 28 C18 47 20 74 27 100 C33 122 37 138 41 158 C45 178 48 204 58 216 C66 226 80 224 84 212 C88 199 90 182 93 170 C96 158 104 158 107 170 C110 182 112 199 116 212 C120 224 134 226 142 216 C152 204 155 178 159 158 C163 138 167 122 173 100 C180 74 182 47 170 28 C156 6 122 4 100 18 Z";

function ToothCharacter({
  px,
  py,
  pupilScale = 1,
  mini = false,
  interactive = false,
  blinkSeed = 0,
}: {
  px: MotionValue<number>;
  py: MotionValue<number>;
  pupilScale?: number;
  mini?: boolean;
  interactive?: boolean;
  blinkSeed?: number;
}) {
  const reduce = useReducedMotion();
  const ids = useId();
  const [blink, setBlink] = useState(false);
  const [burst, setBurst] = useState(0);

  // scaled pupil travel for the minis
  const pxs = useTransform(px, (v) => v * pupilScale);
  const pys = useTransform(py, (v) => v * pupilScale);

  // random blinking
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let alive = true;
    const loop = (delay: number) => {
      timeout = setTimeout(() => {
        if (!alive) return;
        setBlink(true);
        setTimeout(() => alive && setBlink(false), 140);
        loop(2400 + Math.random() * 2800);
      }, delay);
    };
    loop(1200 + blinkSeed * 1000);
    return () => {
      alive = false;
      clearTimeout(timeout);
    };
  }, [blinkSeed]);

  const excited = burst > 0;

  return (
    <motion.div
      className={`relative h-full w-full ${interactive ? "cursor-pointer" : ""}`}
      whileTap={interactive ? { scaleX: 1.12, scaleY: 0.86 } : undefined}
      transition={{ type: "spring", stiffness: 420, damping: 12 }}
      onPointerDown={
        interactive
          ? () => {
              setBurst((b) => b + 1);
              setTimeout(() => setBurst(0), 900);
            }
          : undefined
      }
    >
      <svg
        viewBox="0 0 200 240"
        className={`h-full w-full ${mini ? "drop-shadow-[0_14px_20px_rgba(0,0,0,0.35)]" : "drop-shadow-[0_34px_54px_rgba(0,0,0,0.55)]"}`}
        role="img"
        aria-label="A happy, healthy tooth"
      >
        <defs>
          <linearGradient id={`${ids}-body`} x1="0.2" y1="0" x2="0.65" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.45" stopColor="#f2fbfd" />
            <stop offset="0.8" stopColor="#d4edf3" />
            <stop offset="1" stopColor="#bfe2ea" />
          </linearGradient>
          <radialGradient id={`${ids}-ao`} cx="0.5" cy="1.05" r="0.9">
            <stop offset="0" stopColor="#6ba9b8" stopOpacity="0.55" />
            <stop offset="0.55" stopColor="#8fc3cf" stopOpacity="0.2" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${ids}-spec`} cx="0.32" cy="0.2" r="0.5">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${ids}-pupil`} cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#2e505c" />
            <stop offset="1" stopColor="#071e27" />
          </radialGradient>
          <linearGradient id={`${ids}-rim`} x1="1" y1="0.2" x2="0.6" y2="0.9">
            <stop offset="0" stopColor="#5ee7d0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#2fc6d6" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`${ids}-clip`}>
            <path d={TOOTH_PATH} />
          </clipPath>
          <filter id={`${ids}-soft`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* body */}
        <path d={TOOTH_PATH} fill={`url(#${ids}-body)`} stroke="#b3dde6" strokeWidth="2.5" />

        <g clipPath={`url(#${ids}-clip)`}>
          {/* ambient occlusion toward the roots */}
          <rect x="0" y="0" width="200" height="240" fill={`url(#${ids}-ao)`} />
          {/* big soft specular, top-left */}
          <ellipse cx="62" cy="46" rx="46" ry="30" fill={`url(#${ids}-spec)`} filter={`url(#${ids}-soft)`} />
          {/* crisp catch highlight */}
          <path d="M40 40 C46 26 62 18 78 18" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.9" />
          {/* rim light on the right edge */}
          <path
            d="M170 30 C180 52 179 78 172 102 C166 124 162 140 158 158"
            fill="none"
            stroke={`url(#${ids}-rim)`}
            strokeWidth="7"
            strokeLinecap="round"
            filter={`url(#${ids}-soft)`}
          />
          {/* root shading crease */}
          <path d="M100 168 C97 182 95 198 90 210" stroke="#a8cfd9" strokeWidth="4" strokeLinecap="round" opacity="0.5" fill="none" />

          {/* sweeping shine */}
          {!reduce && !mini && (
            <motion.rect
              x="-70"
              y="-20"
              width="54"
              height="300"
              fill="#ffffff"
              fillOpacity="0.5"
              transform="rotate(16 100 120)"
              animate={{ x: [-140, 300] }}
              transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
            />
          )}
        </g>

        {/* ---------- face ---------- */}
        {/* eyes */}
        {[68, 132].map((cx) => (
          <motion.g
            key={cx}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              scaleY: blink ? 0.08 : 1,
            }}
            transition={{ duration: 0.1 }}
          >
            {/* eye white with subtle top shadow */}
            <ellipse cx={cx} cy={92} rx={mini ? 15 : 13.5} ry={mini ? 16.5 : 15.5} fill="#ffffff" stroke="#cfe9ef" strokeWidth="1.5" />
            <ellipse cx={cx} cy={86} rx={mini ? 13 : 11.5} ry={5} fill="#e8f5f8" opacity="0.9" />
            {/* pupil follows the cursor */}
            <motion.g style={{ x: pxs, y: pys }}>
              <circle cx={cx} cy={93} r={mini ? 7 : 6.5} fill={`url(#${ids}-pupil)`} />
              <circle cx={cx - 2.2} cy={90.4} r={2.4} fill="#ffffff" />
              <circle cx={cx + 2.4} cy={95.6} r={1.1} fill="#ffffff" opacity="0.75" />
            </motion.g>
          </motion.g>
        ))}

        {/* blush */}
        <ellipse cx="46" cy="115" rx="11" ry="6.5" fill="#ff9fb0" opacity={mini ? 0.28 : 0.4} filter={`url(#${ids}-soft)`} />
        <ellipse cx="154" cy="115" rx="11" ry="6.5" fill="#ff9fb0" opacity={mini ? 0.28 : 0.4} filter={`url(#${ids}-soft)`} />

        {/* mouth — grins wide when clicked */}
        {excited ? (
          <g>
            <path d="M78 122 Q100 150 122 122 Q100 132 78 122 Z" fill="#123640" />
            <path d="M88 132 Q100 142 112 132 Q100 138 88 132 Z" fill="#ff8b9e" />
          </g>
        ) : (
          <path d="M82 124 Q100 140 118 124" fill="none" stroke="#123640" strokeWidth={mini ? 5 : 4.5} strokeLinecap="round" />
        )}
      </svg>

      {/* sparkle burst on click */}
      {interactive && (
        <AnimatePresence>
          {burst > 0 && (
            <motion.div key={burst} className="pointer-events-none absolute inset-0" initial={false} exit={{ opacity: 0 }}>
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
                    style={{ background: i % 2 ? "var(--color-gold)" : "var(--color-mint)" }}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos(angle) * 120,
                      y: Math.sin(angle) * 120,
                      scale: [0, 1.4, 0],
                      opacity: [1, 1, 0],
                    }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
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
