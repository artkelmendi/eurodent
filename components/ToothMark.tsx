/**
 * ToothMark — the EuroDent glyph: a clean, simple tooth.
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
          d="M24 7c-4.6-3.4-10.8-3.7-14.6-.3C5.2 10.6 4.6 17 6 24c.9 4.3 1.7 7.2 2.6 11.1.6 3 1.1 6.6 2.7 9 1.4 2.1 4.2 2 5.3-.3 1-2 1.4-5 2-7.7.5-2.6 1.2-4.6 3.4-4.6h.1c2.2 0 2.9 2 3.4 4.6.6 2.7 1 5.7 2 7.7 1.1 2.3 3.9 2.4 5.3.3 1.6-2.4 2.1-6 2.7-9 .9-3.9 1.7-6.8 2.6-11.1 1.4-7 .8-13.4-3.4-17.3C34.8 3.3 28.6 3.6 24 7Z"
          fill="currentColor"
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
