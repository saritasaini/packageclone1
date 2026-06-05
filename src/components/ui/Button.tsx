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
        "rev-btn group inline-flex items-center gap-1 overflow-hidden rounded-md px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        variant === "primary" &&
          "bg-accent-green text-white hover:bg-secondary",
        variant === "secondary" &&
          "border border-border bg-white text-dark hover:bg-secondary hover:text-white hover:border-secondary",
        className,
      )}
    >
      <span className="relative overflow-hidden inline-flex w-full items-center justify-center">
        <span className="bocpak_btn_text inline-flex w-full items-center justify-center gap-1 transition-transform duration-300 ease-in-out group-hover:-translate-y-[120%]">
          {children}
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <span className="bocpak_btn_text absolute inset-0 inline-flex w-full items-center justify-center gap-1 translate-y-[120%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-white">
          {children}
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
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
