import { cn } from "@/lib/utils/cn";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href = "#",
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rev-btn inline-flex items-center gap-1 overflow-hidden rounded-md px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]",
        variant === "primary" &&
          "bg-accent-green text-white hover:bg-[#4aad62]",
        variant === "secondary" &&
          "border border-border bg-white text-dark hover:border-dark/30",
        className,
      )}
    >
      <span className="bocpak_btn_text inline-flex items-center gap-1">
        {children}
        <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </Link>
  );
}

export function TextLink({
  href = "#",
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "section-cta group inline-flex items-center gap-2",
        className,
      )}
    >
      <span>{children}</span>
      <span className="inline-block h-px w-6 bg-primary transition-all group-hover:w-8 group-hover:bg-dark" />
    </Link>
  );
}
