import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type IconName =
  | "tooth"
  | "implant"
  | "veneer"
  | "braces"
  | "whitening"
  | "checkup"
  | "kids"
  | "shield"
  | "heart"
  | "clock"
  | "sparkle"
  | "phone"
  | "mail"
  | "pin"
  | "arrow";

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {PATHS[name]}
    </svg>
  );
}

const PATHS: Record<IconName, React.ReactNode> = {
  tooth: (
    <path d="M12 4c-2-1.6-5-1.8-6.8 0C3.4 5.8 3.4 9 4 12c.4 2 .6 3.3.9 5 .3 1.5.5 3 1.4 3.6.9.5 1.7-.3 2-1.6.3-1.3.5-2.7 1-3.6.3-.6.8-.9 1.7-.9s1.4.3 1.7.9c.5.9.7 2.3 1 3.6.3 1.3 1.1 2.1 2 1.6.9-.6 1.1-2.1 1.4-3.6.3-1.7.5-3 .9-5 .6-3 .6-6.2-1.2-8-1.8-1.8-4.8-1.6-6.8 0Z" />
  ),
  implant: (
    <>
      <path d="M12 3c-1.6-1.2-4-1.3-5.3 0C5.3 4.4 5.4 7 6 9.3" />
      <path d="M12 3c1.6-1.2 4-1.3 5.3 0C18.7 4.4 18.6 7 18 9.3" />
      <path d="M9 11h6l-.7 3h-4.6L9 11Z" />
      <path d="M10 14l.8 7M14 14l-.8 7" />
    </>
  ),
  veneer: (
    <>
      <rect x="5" y="5" width="6" height="9" rx="2" />
      <rect x="13" y="5" width="6" height="9" rx="2" />
      <path d="M8 18c1.6 1.4 6.4 1.4 8 0" />
    </>
  ),
  braces: (
    <>
      <path d="M4 9c4 3 12 3 16 0M4 15c4-3 12-3 16 0" />
      <path d="M8 8v8M12 8v8M16 8v8" />
    </>
  ),
  whitening: (
    <>
      <path d="M12 3c-2-1.6-5-1.8-6.8 0C3.4 5.8 3.4 9 4 12c.4 2 .6 3.3.9 5 .3 1.5.5 3 1.4 3.6.9.5 1.7-.3 2-1.6.3-1.3.5-2.7 1-3.6.3-.6.8-.9 1.7-.9s1.4.3 1.7.9c.5.9.7 2.3 1 3.6.3 1.3 1.1 2.1 2 1.6.9-.6 1.1-2.1 1.4-3.6.3-1.7.5-3 .9-5 .6-3 .6-6.2-1.2-8-1.8-1.8-4.8-1.6-6.8 0Z" />
      <path d="M19 4l.6 1.4L21 6l-1.4.6L19 8l-.6-1.4L17 6l1.4-.6L19 4Z" fill="currentColor" />
    </>
  ),
  checkup: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l4 4" />
      <path d="M8.5 11l1.8 1.8L14 9" />
    </>
  ),
  kids: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <path d="M10 7.5h.01M14 7.5h.01M10.5 10c.9.6 2.1.6 3 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  heart: <path d="M12 20s-7-4.3-9.2-8.6C1.3 8.5 2.7 5 6 5c2 0 3.2 1.2 4 2.5C10.8 6.2 12 5 14 5c3.3 0 4.7 3.5 3.2 6.4C19 15.7 12 20 12 20Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  sparkle: <path d="M12 3c.5 4.5 2.5 6.5 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5-.5 6.5-2.5 7-7Z" />,
  phone: <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};
