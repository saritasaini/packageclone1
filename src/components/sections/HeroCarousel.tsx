"use client";

import { Button } from "@/components/ui/Button";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { heroSlides, trustBullets, img } from "@/lib/content/home-2";
import { cn } from "@/lib/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const titleVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const itemsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6, // Start after title animation
    },
  },
};

const itemUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export function HeroCarousel() {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
    Fade(),
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
      className="relative overflow-hidden"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "relative min-w-0 flex-[0_0_100%] transition-colors duration-500",
                slide.bg,
              )}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className={cn(
                    "object-contain object-center lg:object-right lg:origin-right mix-blend-darken",
                    index === 0 ? "-translate-x-2 lg:-translate-x-8" : "-translate-x-4 lg:-translate-x-22",
                    index === 2 ? "scale-[0.75]" : "scale-[1.00]"
                  )}
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>

              <div className="relative z-10 container-bocpak grid min-h-[630px] items-center gap-8 py-10 lg:min-h-[800px] lg:grid-cols-2 lg:gap-12 lg:py-16 -translate-y-6 lg:-translate-y-12">
                <div className="flex flex-col justify-center -ml-4 lg:-ml-12 translate-y-8 lg:translate-y-16">
                  <motion.h1
                    initial="hidden"
                    animate={selected === index ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="font-heading text-[48px] leading-[1.05] text-dark sm:text-[64px] lg:text-[80px] xl:text-[80px]"
                  >
                    <UnderlineHighlight
                      text={slide.title}
                      highlight={slide.highlightWord}
                    />
                  </motion.h1>
                  
                  <motion.div
                    initial="hidden"
                    animate={selected === index ? "visible" : "hidden"}
                    variants={itemsContainerVariants}
                  >
                    <motion.p
                      variants={itemUpVariants}
                      className="mt-6 max-w-[540px] text-[16px] leading-[28px] text-text lg:text-[20px] lg:leading-[32px]"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      variants={itemUpVariants}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      <Button href="#" variant="primary">
                        Discover now
                      </Button>
                      <Button href="#" variant="secondary">
                        View all products
                      </Button>
                    </motion.div>
                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                      {trustBullets.map((item) => (
                        <motion.li
                          key={item}
                          variants={itemUpVariants}
                          className="flex items-center gap-2 text-[15px] font-semibold text-dark hover:text-accent-green transition-colors cursor-pointer"
                        >
                          <Check
                            className="h-4 w-4 shrink-0 text-secondary"
                            strokeWidth={2.5}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="relative flex items-start justify-end h-full pt-24 pr-0 lg:pt-40 lg:-mr-36">
                  {slide.badge && (
                    <div className="relative z-10 flex h-32 w-32 items-center justify-center">
                      <Image
                        src={img("h2-bg-3.png")}
                        alt="Badge Background"
                        fill
                        className="animate-[spin_10s_linear_infinite] object-contain drop-shadow-md"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">
                          {slide.badge.split(' ')[0]}
                        </span>
                        <span className="text-[32px] font-black leading-none">
                          {slide.badge.split(' ')[1]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-14 left-1/2 flex -translate-x-1/2 gap-2"
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
