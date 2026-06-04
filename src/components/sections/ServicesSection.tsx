"use client";

import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/Button";
import { services } from "@/lib/content/home-2";
import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesSection() {
  return (
    <Section className="bg-services-bg">
      <SectionHeader
        title="Services for your packaging needs"
        description="Improve your operational efficiencies, optimize costs and brand engagements."
        ctaLabel="see all services"
      />

      <RevealStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {services.map((service) => (
          <RevealItem key={service.title}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="flex flex-1 flex-col px-6 pb-2 pt-6">
                <h3 className="font-heading text-[20px] leading-[26px] text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[22px] text-text line-clamp-4">
                  {service.description}
                </p>
                <TextLink href="#" className="mt-4 text-[14px] normal-case">
                  explore more
                </TextLink>
              </div>
              <div className={`relative h-[130px] ${service.color}`}>
                <Image
                  src={service.image}
                  alt=""
                  width={160}
                  height={160}
                  className="absolute -top-10 left-1/2 h-auto max-h-[130px] w-[78%] -translate-x-1/2 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
