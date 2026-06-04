"use client";

import { Button } from "@/components/ui/Button";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { heroSlides, trustBullets } from "@/lib/content/home-2";
import { cn } from "@/lib/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroCarousel() {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section
      aria-label="Hero carousel"
      className="relative overflow-hidden pb-14"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "min-w-0 flex-[0_0_100%] transition-colors duration-500",
                slide.bg,
              )}
            >
              <div className="container-bocpak grid min-h-[630px] items-center gap-8 py-10 lg:min-h-[800px] lg:grid-cols-2 lg:gap-12 lg:py-16">
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <h1 className="font-heading text-[36px] leading-[1.12] text-dark sm:text-[48px] lg:text-[56px] xl:text-[64px]">
                    <UnderlineHighlight
                      text={slide.title}
                      highlight={slide.highlightWord}
                    />
                  </h1>
                  <p className="mt-5 max-w-[480px] text-[15px] leading-[26px] text-text lg:text-[16px]">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="#" variant="primary">
                      Discover now
                    </Button>
                    <Button href="#" variant="secondary">
                      View all products
                    </Button>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                    {trustBullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-text"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-secondary"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="relative flex items-center justify-center lg:justify-end">
                  <motion.div
                    className="relative w-full max-w-[520px]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {slide.badge && (
                      <span className="absolute right-[18%] top-[8%] z-10 rounded-full bg-accent-green px-4 py-2 text-[12px] font-bold uppercase text-white shadow-md">
                        {slide.badge}
                      </span>
                    )}
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      width={640}
                      height={640}
                      className="h-auto w-full object-contain"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Hero slides"
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={selected === i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-1 rounded-full transition-all",
              selected === i
                ? "w-10 bg-dark"
                : "w-8 bg-border hover:bg-dark/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
