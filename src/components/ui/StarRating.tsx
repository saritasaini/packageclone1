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
      <div className="flex items-center gap-2 rounded-full bg-[#FF4DF8] px-4 py-1.5">
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-white text-white"
              strokeWidth={0}
            />
          ))}
        </div>
        <span className="flex h-5 items-center justify-center rounded-full bg-black px-2.5 text-[12px] font-bold text-white">
          {rating}
        </span>
      </div>
      <span className="text-[14px] text-text whitespace-nowrap">Google Reviews</span>
    </div>
  );
}
