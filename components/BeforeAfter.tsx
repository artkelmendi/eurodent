"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * BeforeAfter — draggable comparison slider showing a stylised
 * smile transformation. Left of the handle = "before" (stained,
 * uneven), right = "after" (bright, aligned). Pointer + keyboard.
 */
export default function BeforeAfter({
  beforeLabel,
  afterLabel,
  hint,
}: {
  beforeLabel: string;
  afterLabel: string;
  hint: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const pos = useMotionValue(50);
  const clip = useMotionTemplate`inset(0 ${useTransform(pos, (p) => 100 - p)}% 0 0)`;
  const left = useMotionTemplate`${pos}%`;
  const [ariaNow, setAriaNow] = useState(50);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);
  const nudged = useRef(false);

  useEffect(() => pos.on("change", (v) => setAriaNow(Math.round(v))), [pos]);

  // one-time nudge so people notice it's draggable
  useEffect(() => {
    if (reduce || nudged.current) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !nudged.current) {
          nudged.current = true;
          animate(pos, [50, 63, 42, 50], { duration: 2.2, ease: "easeInOut", delay: 0.5 });
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pos, reduce]);

  const setFromClientX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    pos.set(Math.min(94, Math.max(6, pct)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // synthetic or already-released pointers can't be captured — dragging still works
    }
    draggingRef.current = true;
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const stopDrag = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") pos.set(Math.max(6, pos.get() - 4));
    if (e.key === "ArrowRight") pos.set(Math.min(94, pos.get() + 4));
  };

  return (
    <div
      ref={ref}
      className={`relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-brand-100 sm:aspect-[16/9] ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onPointerDown={onPointerDown}
      onPointerMove={(e) => draggingRef.current && setFromClientX(e.clientX)}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onKeyDown={onKeyDown}
      role="slider"
      aria-label={`${beforeLabel} / ${afterLabel}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={ariaNow}
      tabIndex={0}
    >
      {/* AFTER — full background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6f8fb] via-[#eefcfd] to-[#d8f3f0]">
        <Smile variant="after" />
      </div>

      {/* BEFORE — clipped top layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#f0e9db] via-[#ece2cd] to-[#e3d5ba]"
        style={{ clipPath: clip }}
      >
        <Smile variant="before" />
      </motion.div>

      {/* labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand-500/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* divider + grip */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(5,39,51,0.35)]"
        style={{ left }}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-2.5 shadow-lift ring-1 ring-brand-100">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 7l-5 5 5 5" />
          </svg>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink">{hint}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 7l5 5-5 5" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Stylised smile illustration. Same geometry for both variants so
   the reveal reads as one continuous scene.
   ---------------------------------------------------------------- */

const UPPER = [
  { x: 96, w: 54, h: 50 },
  { x: 154, w: 52, h: 56 },
  { x: 210, w: 52, h: 62 },
  { x: 266, w: 56, h: 72 },
  { x: 326, w: 56, h: 72 },
  { x: 386, w: 52, h: 62 },
  { x: 442, w: 52, h: 56 },
  { x: 498, w: 54, h: 50 },
];
const LOWER = [
  { x: 116, w: 48, h: 38 },
  { x: 168, w: 46, h: 44 },
  { x: 218, w: 46, h: 48 },
  { x: 268, w: 50, h: 52 },
  { x: 322, w: 50, h: 52 },
  { x: 376, w: 46, h: 48 },
  { x: 426, w: 46, h: 44 },
  { x: 476, w: 48, h: 38 },
];
const JITTER_ROT = [-5, 4, -2, 3, -4, 5, -3, 4];
const JITTER_Y = [2, -3, 4, 0, 3, -2, 5, 1];

function Smile({ variant }: { variant: "before" | "after" }) {
  const isAfter = variant === "after";
  const toothFill = isAfter ? `url(#afterTooth)` : `url(#beforeTooth)`;
  const toothStroke = isAfter ? "#b7e3ea" : "#c6ad7c";
  const gum = isAfter ? "#f2a7b4" : "#dd93a0";

  return (
    <svg viewBox="0 0 648 405" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="afterTooth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dcf2f7" />
        </linearGradient>
        <linearGradient id="beforeTooth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2e8c9" />
          <stop offset="1" stopColor="#d9c496" />
        </linearGradient>
        <radialGradient id="mouthShade" cx="0.5" cy="0.5" r="0.75">
          <stop offset="0" stopColor="#3d1620" />
          <stop offset="1" stopColor="#24070e" />
        </radialGradient>
      </defs>

      {/* soft backdrop glow */}
      <ellipse cx="324" cy="205" rx="290" ry="185" fill={isAfter ? "rgba(47,198,214,0.14)" : "rgba(130,105,60,0.10)"} />

      {/* mouth cavity */}
      <rect x="70" y="96" width="508" height="216" rx="104" fill="url(#mouthShade)" />

      {/* upper gum */}
      <path d="M86 96h476c8 0 14 6 14 14v28c0 26-24 34-58 34H130c-34 0-58-8-58-34v-28c0-8 6-14 14-14Z" fill={gum} />
      {/* lower gum */}
      <path d="M130 312c-34 0-58-8-58-34v-14h504v14c0 26-24 34-58 34H130Z" fill={gum} opacity="0.92" />

      {/* upper teeth (hang from y=150) */}
      {UPPER.map((t, i) => {
        const rot = isAfter ? 0 : JITTER_ROT[i];
        const dy = isAfter ? 0 : JITTER_Y[i];
        return (
          <g key={`u${i}`} transform={`rotate(${rot} ${t.x + t.w / 2} 150)`}>
            <rect x={t.x} y={148 + dy} width={t.w} height={t.h} rx={t.w / 3.2} fill={toothFill} stroke={toothStroke} strokeWidth="1.5" />
            {!isAfter && i % 3 === 1 && (
              <ellipse cx={t.x + t.w * 0.62} cy={158 + dy + t.h * 0.5} rx={t.w * 0.16} ry={t.h * 0.2} fill="#b39158" opacity="0.5" />
            )}
            {isAfter && (
              <rect x={t.x + 6} y={154} width={t.w * 0.22} height={t.h * 0.55} rx={t.w * 0.11} fill="#ffffff" opacity="0.85" />
            )}
          </g>
        );
      })}

      {/* lower teeth (rise to y=262) */}
      {LOWER.map((t, i) => {
        const rot = isAfter ? 0 : -JITTER_ROT[i] * 0.8;
        const dy = isAfter ? 0 : -JITTER_Y[i];
        return (
          <g key={`l${i}`} transform={`rotate(${rot} ${t.x + t.w / 2} 262)`}>
            <rect x={t.x} y={262 - t.h + dy} width={t.w} height={t.h} rx={t.w / 3.4} fill={toothFill} stroke={toothStroke} strokeWidth="1.5" />
            {!isAfter && i % 4 === 2 && (
              <ellipse cx={t.x + t.w * 0.4} cy={262 - t.h * 0.45 + dy} rx={t.w * 0.15} ry={t.h * 0.18} fill="#b39158" opacity="0.45" />
            )}
          </g>
        );
      })}

      {/* sparkles on the after side */}
      {isAfter && (
        <>
          <path d="M560 70c2 14 8 20 22 22-14 2-20 8-22 22-2-14-8-20-22-22 14-2 20-8 22-22Z" fill="#2fc6d6" opacity="0.85" />
          <path d="M90 330c1.5 10 6 14.5 16 16-10 1.5-14.5 6-16 16-1.5-10-6-14.5-16-16 10-1.5 14.5-6 16-16Z" fill="#f2b84b" opacity="0.9" />
          <path d="M600 300c1 8 4.5 11.5 12.5 12.5-8 1-11.5 4.5-12.5 12.5-1-8-4.5-11.5-12.5-12.5 8-1 11.5-4.5 12.5-12.5Z" fill="#5ee7d0" opacity="0.9" />
        </>
      )}
    </svg>
  );
}
