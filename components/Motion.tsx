"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* -----------------------------------------------------------
   Reveal — fades + slides children in when scrolled into view
   ----------------------------------------------------------- */
type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   Stagger container + item
   ----------------------------------------------------------- */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  ...props
}: { children: ReactNode } & HTMLMotionProps<"div">) {
  return (
    <motion.div className={className} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   AnimatedHeading — word-by-word rise reveal
   ----------------------------------------------------------- */
export function AnimatedHeading({
  text,
  className,
  highlight,
  delay = 0,
  as = "h1",
}: {
  text: string;
  className?: string;
  /** words (case-insensitive) to render with the gradient treatment */
  highlight?: string[];
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const hl = (highlight ?? []).map((w) => w.toLowerCase());
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isHl = hl.includes(word.toLowerCase().replace(/[.,!?]/g, ""));
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
          >
            <motion.span
              className={`inline-block ${isHl ? "font-display italic text-gradient" : ""}`}
              variants={{
                hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: EASE },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}

/* -----------------------------------------------------------
   Counter — counts up to a value when in view
   ----------------------------------------------------------- */
export { default as Counter } from "./Counter";
