/**
 * ToothMark — the EuroDent glyph.
 * A clean tooth carrying a subtle "E" negative-space cue.
 * Presentational only (no hooks) so it can render anywhere.
 * Swap freely once the real logo arrives.
 */
export default function ToothMark({
  className = "",
  withShine = false,
}: {
  className?: string;
  withShine?: boolean;
}) {
  return (
    <span className={`relative inline-grid place-items-center ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M24 6.5c-4.2-3-9.8-3.4-13.4-.4C6.4 9.5 5.5 15.4 6.8 21.8c.8 3.9 1.6 6.6 2.4 10.2.6 2.8 1 6.2 2.4 8.6 1.3 2.2 4 2.3 5.1.2 1-1.9 1.4-4.7 2-7.3.6-2.6 1.3-4.8 2.8-5.5h.9c1.5.7 2.2 2.9 2.8 5.5.6 2.6 1 5.4 2 7.3 1.1 2.1 3.8 2 5.1-.2 1.4-2.4 1.8-5.8 2.4-8.6.8-3.6 1.6-6.3 2.4-10.2 1.3-6.4.4-12.3-3.8-15.7-3.6-3-9.2-2.6-13.4.4Z"
          fill="currentColor"
        />
        <path
          d="M16.5 14.5c1.6-1.7 4.7-2.2 7.5-1"
          stroke="white"
          strokeOpacity="0.55"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      {withShine && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -inset-y-2 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent [animation:shimmer_3.4s_ease-in-out_infinite]" />
        </span>
      )}
    </span>
  );
}
