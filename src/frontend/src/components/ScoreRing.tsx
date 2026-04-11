import { cn } from "@/lib/utils";

interface ScoreRingProps {
  score: number; // 0-100
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const SIZE_CONFIG = {
  sm: {
    dim: 56,
    stroke: 5,
    r: 22,
    fontSize: "text-sm",
    labelSize: "text-[9px]",
  },
  md: {
    dim: 80,
    stroke: 7,
    r: 32,
    fontSize: "text-base",
    labelSize: "text-[10px]",
  },
  lg: {
    dim: 112,
    stroke: 8,
    r: 46,
    fontSize: "text-2xl",
    labelSize: "text-xs",
  },
};

export function ScoreRing({
  score,
  size = "md",
  showLabel = true,
  label,
  className,
}: ScoreRingProps) {
  const config = SIZE_CONFIG[size];
  const { dim, stroke, r } = config;
  const cx = dim / 2;
  const cy = dim / 2;
  const circumference = 2 * Math.PI * r;
  const clampedScore = Math.min(100, Math.max(0, score));
  const offset = circumference - (clampedScore / 100) * circumference;

  const scoreColor =
    clampedScore >= 70
      ? "oklch(0.55 0.18 150)"
      : clampedScore >= 50
        ? "oklch(0.65 0.15 65)"
        : clampedScore === 0
          ? "oklch(0.88 0.01 260)"
          : "oklch(0.55 0.22 25)";

  const textColor =
    clampedScore >= 70
      ? "text-[oklch(0.45_0.18_150)]"
      : clampedScore >= 50
        ? "text-accent"
        : clampedScore === 0
          ? "text-muted-foreground"
          : "text-destructive";

  return (
    <div
      className={cn("flex flex-col items-center gap-1", className)}
      aria-label={`Score: ${clampedScore}%`}
    >
      <div className="relative" style={{ width: dim, height: dim }}>
        <svg width={dim} height={dim} className="-rotate-90" aria-hidden="true">
          {/* Track */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="oklch(0.93 0.01 260)"
            strokeWidth={stroke}
          />
          {/* Progress */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={scoreColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={cn(
              "font-display font-bold leading-none",
              config.fontSize,
              textColor,
            )}
          >
            {clampedScore === 0 ? "—" : `${clampedScore}`}
          </span>
          {showLabel && clampedScore > 0 && (
            <span
              className={cn(
                "text-muted-foreground leading-none mt-0.5",
                config.labelSize,
              )}
            >
              %
            </span>
          )}
        </div>
      </div>
      {label && (
        <span className="text-xs text-muted-foreground text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
}
