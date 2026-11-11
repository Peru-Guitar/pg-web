import { ReactNode } from "react";

/** Steps along each torn edge; more steps = finer tear. */
const TEAR_STEPS = 48;

/** Deterministic jitter (-1..1) so the tear is stable across renders. */
const jitter = (i: number, seed: number) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
};

/**
 * Torn-paper edges on a diagonal. `--slant` sets the diagonal drop
 * and `--tear` the depth of the rips (both set on the band).
 */
const tornPath = () => {
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= TEAR_STEPS; i++) {
    const t = i / TEAR_STEPS;
    const x = `${(t * 100).toFixed(2)}%`;
    const a = jitter(i, 1).toFixed(2);
    const b = jitter(i, 2).toFixed(2);
    top.push(`${x} calc(var(--slant) * ${(1 - t).toFixed(3)} + var(--tear) * (1 + ${a}))`);
    bottom.unshift(
      `${x} calc(100% - var(--slant) * ${t.toFixed(3)} - var(--tear) * (1 + ${b}))`,
    );
  }
  return `polygon(${[...top, ...bottom].join(",")})`;
};

const TORN_CLIP = tornPath();

/**
 * Full-width band with diagonal torn-paper edges, used to set a section apart
 * (Artistas PG invite, home community block). Pass background and padding in `className`.
 */
export const TornBand = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div
    className={`relative overflow-hidden [--slant:32px] [--tear:5px] md:[--slant:72px] md:[--tear:8px] ${className}`}
    style={{ clipPath: TORN_CLIP }}
  >
    {children}
  </div>
);
