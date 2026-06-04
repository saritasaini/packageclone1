"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ecoStats, testimonials } from "@/lib/content/home-2";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

export function EcoStatsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section className="bg-white">
      <Reveal>
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
          Packaging process
        </p>
        <h2 className="font-heading max-w-3xl text-[32px] leading-[1.2] text-dark md:text-[42px]">
          A greener, meaner eco-friendly packaging that speaks results.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          {ecoStats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.08}>
              <article className="text-center sm:text-left">
                <p className="font-heading text-[48px] leading-none text-primary md:text-[56px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[14px] leading-[22px] text-text">
                  {stat.label}
                </p>
                <div className="mt-6 flex justify-center sm:justify-start">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-4" delay={0.15}>
          <div
            ref={emblaRef}
            className="overflow-hidden rounded-2xl bg-primary text-white"
          >
            <div className="flex">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] px-8 py-10"
                >
                  <p className="text-[18px] leading-[28px] md:text-[20px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <cite className="not-italic">
                      <span className="block text-[15px] font-bold">
                        {t.name}
                      </span>
                      <span className="text-[14px] text-white/80">
                        {t.role}
                      </span>
                    </cite>
                  </footer>
                  <div className="mt-6 flex gap-2">
                    {testimonials.map((_, dot) => (
                      <button
                        key={dot}
                        type="button"
                        aria-label={`Testimonial ${dot + 1}`}
                        onClick={() => emblaApi?.scrollTo(dot)}
                        className={cn(
                          "h-1.5 rounded-full transition-all",
                          active === dot
                            ? "w-6 bg-white"
                            : "w-3 bg-white/40",
                        )}
                      />
                    ))}
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
