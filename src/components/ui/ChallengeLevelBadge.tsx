import { CHALLENGE_LEVELS, ChallengeLevel } from "@/content/challenges";

/** Difficulty as three bars plus its name: "▮▮▯ Intermedio". */
export const ChallengeLevelBadge = ({
  level,
  className = "",
}: {
  level: ChallengeLevel;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${className}`}
    title={`Dificultad: ${CHALLENGE_LEVELS[level]}`}
  >
    <span aria-hidden className="flex items-end gap-0.5">
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={`w-1 rounded-sm ${bar <= level ? "bg-current" : "bg-current opacity-25"}`}
          style={{ height: `${4 + bar * 3}px` }}
        />
      ))}
    </span>
    <span>
      <span className="sr-only">Dificultad: </span>
      {CHALLENGE_LEVELS[level]}
    </span>
  </span>
);
