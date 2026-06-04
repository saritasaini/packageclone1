import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function StarRating({
  rating = 4.9,
  className,
}: {
  rating?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-secondary text-secondary"
            strokeWidth={0}
          />
        ))}
      </div>
      <span className="text-[15px] font-semibold text-dark">{rating}</span>
      <span className="text-[14px] text-text">Google Reviews</span>
    </div>
  );
}
