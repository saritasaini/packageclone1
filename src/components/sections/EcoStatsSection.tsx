"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ecoStats, testimonials } from "@/lib/content/home-2";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils/cn";

function Counter({ value }: { value: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/\d+/);
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (inView && targetNumber > 0) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(1, targetNumber, {
          duration: 2,
          ease: "easeOut",
          onUpdate(val) {
            node.textContent = Math.round(val).toString();
          },
        });
        return () => controls.stop();
      }
    }
  }, [targetNumber, inView]);

  if (targetNumber === 0) return <span>{value}</span>;

  return (
    <>
      <span ref={nodeRef}>1</span>
      <span>{suffix}</span>
    </>
  );
}

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
    <Section className="bg-white !py-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
          Packaging process
        </p>
        <h2 className="font-heading max-w-3xl text-[32px] leading-[1.2] text-dark md:text-[42px]">
          A greener, meaner eco-friendly packaging that speaks results.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-9 lg:gap-6">
          {ecoStats.map((stat, i) => (
            <motion.article
              key={stat.value}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm sm:p-8"
            >
              <p className="font-heading text-[48px] font-bold leading-none text-primary md:text-[56px]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-4 flex-grow text-[16px] leading-[24px] text-text">
                {stat.label}
              </p>
              <div className="mt-8 flex justify-start">
                <Image
                  src={stat.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="lg:col-span-3 h-full"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-primary text-white">
            <div ref={emblaRef} className="flex-1 overflow-hidden">
              <div className="flex h-full">
                {testimonials.map((t) => (
                  <blockquote
                    key={t.name}
                    className="flex min-w-0 flex-[0_0_100%] flex-col px-8 pb-6 pt-10"
                  >
                    <p className="flex-grow text-[18px] leading-[28px] md:text-[20px]">
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
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="flex gap-2 px-8 pb-10 pt-2">
              {testimonials.map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Testimonial ${dot + 1}`}
                  onClick={() => emblaApi?.scrollTo(dot)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    active === dot ? "w-8 bg-white" : "w-4 bg-white/40",
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
