"use client";

import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryImages } from "@/lib/content/home-2";
import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
  return (
    <Section>
      <SectionHeader
        title="Find our works with gallery"
        description="Find galleries that show work and represent artists that are similar to you."
        align="center"
      />

      <RevealStagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {galleryImages.map((src, i) => (
          <RevealItem key={src} className={i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}>
            <motion.div
              className="relative aspect-square overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Gallery work ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 200px"
              />
            </motion.div>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
