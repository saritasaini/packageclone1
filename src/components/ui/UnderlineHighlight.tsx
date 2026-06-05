import { cn } from "@/lib/utils/cn";

type UnderlineHighlightProps = {
  text: string;
  highlight: string;
  className?: string;
};

export function UnderlineHighlight({
  text,
  highlight,
  className,
}: UnderlineHighlightProps) {
  const parts = text.split(new RegExp(`(${highlight})`, "i"));
  return (
    <span className={cn("font-heading", className)}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="relative inline pb-1">
            {part}
            <svg
              className="absolute bottom-4 left-0 w-full h-[10px] text-secondary animate-swing"
              viewBox="0 0 120 10"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 8 C28 3, 55 10, 118 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
