"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { img } from "@/lib/content/home-2";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function PromoBannersSection() {
  return (
    <Section className="!py-10 md:!py-12">
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal>
          <motion.article
            whileHover={{ scale: 1.01 }}
            className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl bg-[#C62828] p-8 text-white"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] opacity-90">
                Special offer
              </p>
              <h2 className="font-heading mt-2 max-w-[200px] text-[28px] leading-[34px] md:text-[32px]">
                Eco-Friendly Packaging
              </h2>
            </div>
            <Link
              href="#"
              className="relative z-10 text-[13px] font-bold uppercase tracking-wide hover:underline"
            >
              explore more
            </Link>
            <Image
              src={img("h2-category1.png")}
              alt="Eco-friendly coffee bag packaging"
              width={180}
              height={220}
              className="pointer-events-none absolute bottom-0 right-4 h-[55%] w-auto max-w-[45%] object-contain"
            />
          </motion.article>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.article
            whileHover={{ scale: 1.01 }}
            className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl bg-[#1a1a1a]"
          >
            <Image
              src={img("h2-image-1.png")}
              alt=""
              fill
              className="object-cover object-center opacity-50"
              sizes="33vw"
            />
            <div className="relative z-10 text-center text-white">
              <span className="inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-accent-green font-heading text-[28px] leading-none shadow-lg md:h-[128px] md:w-[128px] md:text-[32px]">
                -50%
              </span>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.1em]">
                New collection
              </p>
              <p className="mx-auto mt-2 max-w-[220px] text-[15px] leading-[22px] text-white/85">
                All-in-one custom packaging solution
              </p>
            </div>
          </motion.article>
        </Reveal>

        <Reveal delay={0.12}>
          <motion.article
            whileHover={{ scale: 1.01 }}
            className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl bg-[#E65100] p-8 text-white"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] opacity-90">
                professional
              </p>
              <h2 className="font-heading mt-2 max-w-[200px] text-[28px] leading-[34px] md:text-[32px]">
                Drink & Juice Packaging
              </h2>
            </div>
            <Link
              href="#"
              className="relative z-10 text-[13px] font-bold uppercase tracking-wide hover:underline"
            >
              explore more
            </Link>
            <Image
              src={img("h2-category5.png")}
              alt="Drink and juice packaging"
              width={120}
              height={280}
              className="pointer-events-none absolute bottom-0 right-6 h-[70%] w-auto max-w-[40%] object-contain"
            />
          </motion.article>
        </Reveal>
      </div>
    </Section>
  );
}
