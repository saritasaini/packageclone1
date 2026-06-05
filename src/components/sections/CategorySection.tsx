"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { categories, img } from "@/lib/content/home-2";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({
  title,
  count,
  image,
}: {
  title: string;
  count: number;
  image: string;
}) {
  const itemLabel = count === 1 ? "item" : "items";
  return (
    <article className="group min-w-0 flex-[0_0_280px] select-none sm:flex-[0_0_400px]">
      <Link href="#" className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-shadow hover:shadow-[0_4px_25px_rgb(0,0,0,0.08)]">
        <div className="text-left">
          <span className="mb-3 inline-block rounded bg-[#E8F8F2] px-2 py-0.5 text-[12px] font-medium text-[#2EC4B6]">
            {count} {itemLabel}
          </span>
          <h3 className="font-heading text-[22px] leading-[28px] text-dark">
            {title}
          </h3>
        </div>
        <div className="relative mt-4 flex h-36 items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.05]"
            sizes="280px"
          />
        </div>
      </Link>
    </article>
  );
}

export function CategorySection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  return (
    <Section className="bg-[#F6F6F6] !py-[120px]">
      <Reveal>
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-[32px] leading-[1.15] text-dark md:text-[42px] lg:text-[48px]">
              <span className="text-[#009900]">4900+</span> Eco-friendly packaging
            </h2>
            <p className="mt-3 text-[16px] leading-[26px] text-text">
              Personalized and specialized <span className="font-bold">custom packaging</span> wholesale service.
            </p>
          </div>
          <Link
            href="#"
            className="shrink-0 rounded bg-[#2B63FF] px-8 py-2.5 text-[15px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-black"
          >
            SEE ALL SHOP &gt;
          </Link>
        </div>
      </Reveal>

      <motion.div
        className="-mr-[calc(50vw-50%)] overflow-hidden"
        ref={emblaRef}
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className="flex gap-[30px]">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
