import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-[32px] leading-[1.15] text-dark md:text-[42px] lg:text-[48px]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[16px] leading-[26px] text-text">{description}</p>
        )}
      </div>
      {ctaLabel && (
        <Link
          href={ctaHref}
          className="section-cta group inline-flex shrink-0 items-center gap-2 pb-1"
        >
          <span>{ctaLabel}</span>
          <span className="inline-block h-px w-8 bg-primary transition-all group-hover:w-10 group-hover:bg-dark" />
        </Link>
      )}
    </div>
  );
}
