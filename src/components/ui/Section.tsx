import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
};

export function Section({ children, className, id, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("section-py", className)}
    >
      <div className="container-bocpak">{children}</div>
    </section>
  );
}
