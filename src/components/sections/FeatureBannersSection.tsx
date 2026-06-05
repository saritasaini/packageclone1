"use client";

import { Section } from "@/components/ui/Section";
import { Check, Leaf, Ban, Recycle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import imgBanner1 from "../../../public/images/home-2/imgi_174_h2-image-banner-1.jpeg";
import imgBanner2 from "../../../public/images/home-2/imgi_176_h2-image-banner-2.jpeg";
import imgBadgeBg from "../../../public/images/home-2/h2-bg-2.png";
import imgLeftBg from "../../../public/images/home-2/imgi_9_megamenu-categories-2.jpeg";
import imgRightBg from "../../../public/images/home-2/imgi_173_h2-bg-banner-2.jpeg";

const leftBullets = [
  ["Vibrant printed colors", "Made for sustainability"],
  ["Sturdy and rigid packaging", "Fast and free standard shipping"],
];

export function FeatureBannersSection() {
  return (
    <Section className="bg-white py-20 lg:py-[120px]">
      <div className="grid gap-6 lg:grid-cols-2 overflow-hidden">
        {/* Left Card */}
        <motion.article
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[560px] overflow-hidden rounded-[20px] p-8 lg:min-h-[640px] lg:p-12 flex flex-col"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imgLeftBg}
              alt="Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="relative z-20">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/90">
              AMAZING STORIES
            </p>
            <h2 className="font-heading mt-4 text-[32px] leading-[1.2] text-white md:text-[40px] max-w-[380px]">
              Top sale food packaging pouch
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {leftBullets.map((group, gi) => (
                <ul key={gi} className="space-y-4">
                  {group.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[15px] font-medium text-white"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff5b9c]">
                        <Check className="h-3 w-3 text-white" strokeWidth={4} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Floating Rotating Badge */}
          <div className="absolute bottom-24 left-8 sm:left-1/4 z-30 flex h-[140px] w-[140px] items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={imgBadgeBg}
                alt="Badge background"
                fill
                className="object-contain"
              />
            </motion.div>
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <span className="text-[14px] text-white">Products</span>
              <span className="font-heading text-[36px] leading-none text-white font-bold">
                15K+
              </span>
            </div>
          </div>
        </motion.article>

        {/* Right Card */}
        <motion.article
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[560px] flex flex-col overflow-hidden rounded-[20px] p-8 lg:min-h-[640px] lg:p-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imgRightBg}
              alt="Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="relative z-20">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/90">
              THE FULL PACKAGE
            </p>
            <h2 className="font-heading mt-4 text-[32px] leading-[1.2] text-white md:text-[40px] max-w-[420px]">
              Quick, easy & affordable printing
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[26px] text-white/90">
              We&apos;re a multi-talented school that delivers a complete brand
              makeover. Packaging, brand guidelines, stationery, vehicles,
              logos, adverts…
            </p>
          </div>

          {/* Floating Chips */}
          <div className="absolute bottom-36 left-12 z-20 flex items-center gap-2 rounded-full bg-[#62C15B] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg">
            <Leaf className="h-4 w-4" />
            Compostable
          </div>
          <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#FF7940] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg">
            <Ban className="h-4 w-4" />
            Plastic Free
          </div>
          <div className="absolute bottom-40 right-12 z-20 flex items-center gap-2 rounded-full bg-[#F95CFF] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg">
            <Recycle className="h-4 w-4" />
            biodegradable
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
