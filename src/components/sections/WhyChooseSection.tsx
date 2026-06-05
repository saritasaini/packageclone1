"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { whyChooseFeatures, whyChooseImages } from "@/lib/content/home-2";
import Image from "next/image";
import { motion } from "framer-motion";
import icon1 from "../../../public/images/home-2/imgi_149_default.jpeg";
import icon2 from "../../../public/images/home-2/imgi_150_default.jpeg";
import icon3 from "../../../public/images/home-2/imgi_151_default.jpeg";

export function WhyChooseSection() {
  // Use the last 4 images for the 2x2 grid
  const gridImages = whyChooseImages.slice(1, 5);
  const leftIcons = [icon1, icon2, icon3];

  return (
    <Section className="py-20 lg:py-[120px]">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
        {/* Left Side: Text and Features */}
        <div className="lg:col-span-6 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#2B63FF]">
              WHY CHOOSE BOCPAK?
            </p>
            <h2 className="font-heading text-[32px] leading-[1.2] text-dark md:text-[42px]">
              Switch to eco-friendly packaging<br />with an expert&rsquo;s help
            </h2>

            <div className="mt-12 space-y-10">
              {whyChooseFeatures.map((feature, i) => (
                <article key={feature.title} className="flex items-start gap-6">
                  <div className="mt-1 flex shrink-0">
                    <Image
                      src={leftIcons[i]}
                      alt={feature.title}
                      width={54}
                      height={54}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-[22px] leading-[28px] text-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[26px] text-text">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image Grid */}
        <div className="relative py-12 lg:col-span-6 lg:py-16 lg:-mr-16 lg:pl-10">
          {/* Green Background Blob */}
          <div className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-[#E8F8F2] rotate-[36deg]" />
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Column 1 (Pushed Down) */}
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2 pt-8 lg:gap-6 lg:pt-12">
                <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={gridImages[0].src}
                    alt={gridImages[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 300px"
                  />
                </div>
                <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={gridImages[2].src}
                    alt={gridImages[2].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 300px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 2 (Pushed Up) */}
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4 pb-12 lg:gap-6 lg:pb-16">
                <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={gridImages[1].src}
                    alt={gridImages[1].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 300px"
                  />
                </div>
                <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={gridImages[3].src}
                    alt={gridImages[3].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 300px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
