"use client";

import { Section } from "@/components/ui/Section";
import { services } from "@/lib/content/home-2";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

export function ServicesSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  return (
    <Section className="bg-[#E8F8F2] py-20 lg:py-[120px] whitespace-nowrap">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-heading text-[32px] leading-[1.15] text-dark md:text-[42px] lg:text-[48px]">
            Services for your packaging needs
          </h2>
          <p className="mt-3 text-[16px] leading-[26px] text-text whitespace-normal max-w-2xl">
            Improve your operational efficiencies, optimize costs and brand engagements.
          </p>
        </div>
        <Link
          href="#"
          className="shrink-0 rounded bg-[#2B63FF] px-8 py-2.5 text-[15px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-black"
        >
          SEE ALL SERVICES &gt;
        </Link>
      </div>

      <div className="-mr-[calc(50vw-50%)] mt-12 cursor-grab active:cursor-grabbing">
        <div className="overflow-hidden py-8 -my-8" ref={emblaRef}>
          <div className="flex -ml-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_38%] xl:flex-[0_0_28%] pl-6 select-none"
              >
                <article
                  className="group relative flex h-[520px] w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-sm whitespace-normal transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:z-10"
                >
                  <div className="relative z-20 flex flex-col px-8 pt-8">
                    <h3 className="font-heading text-[26px] leading-[1.3] text-dark">
                      {service.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-[14px] leading-[24px] text-text">
                      {service.description}
                    </p>
                    <Link
                      href="#"
                      className="mt-8 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.05em] text-[#2B63FF] hover:text-[#1e4bbd]"
                    >
                      EXPLORE MORE <ChevronRight className="h-[14px] w-[14px] stroke-[3]" />
                    </Link>
                  </div>

                  {/* Colored block taking exactly half the card (260px out of 520px) */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 z-0 h-[260px] ${service.color} transition-colors duration-300`}
                  ></div>

                  {/* Image positioned to completely fill the bottom half */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[260px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 85vw, 35vw"
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
