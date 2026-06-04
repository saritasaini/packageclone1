"use client";

import { RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { categories, img } from "@/lib/content/home-2";
import useEmblaCarousel from "embla-carousel-react";
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
    <article className="group min-w-0 flex-[0_0_78%] sm:flex-[0_0_calc((100%-30px)/2)]">
      <Link href="#" className="block">
        <div className="category-card-img relative mb-[21px] flex aspect-square items-center justify-center overflow-hidden bg-white">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-auto max-h-[calc(100%-2rem)] w-auto max-w-[calc(100%-2rem)] object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="280px"
          />
        </div>
        <div className="category-product-caption text-left">
          <h3 className="font-heading text-[18px] leading-[26px] text-dark transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-1 text-[14px] text-text">
            <span className="font-semibold text-dark">{count}</span>{" "}
            <span>{itemLabel}</span>
          </p>
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
    <Section className="bg-section-muted">
      <SectionHeader
        title="4900+ Eco-friendly packaging"
        description="Personalized and specialized custom packaging wholesale service."
        ctaLabel="see all shop"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[30px]">
              {categories.map((cat) => (
                <CategoryCard key={cat.title} {...cat} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-4">
          <RevealItem>
            <Link
              href="#"
              className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-[#2EC4B6] px-[30px] pb-[30px] pt-8 text-white"
            >
              <h3
                className="font-heading max-w-[220px] text-[34px] leading-[40px] text-white"
              >
                15% Discount
              </h3>
              <p className="mt-2.5 text-[16px] leading-[26px] text-white/90">
                On all mailer boxes orders of 500 pieces or more.
              </p>
              <span className="mt-[27px] inline-flex items-center gap-1 text-[14px] font-semibold uppercase tracking-wide after:block after:h-px after:w-8 after:bg-white after:content-['']">
                shop now
              </span>
              <Image
                src={img("h2-image-banner-1.jpg")}
                alt=""
                width={200}
                height={200}
                className="pointer-events-none absolute right-0 top-4 h-auto w-[42%] object-contain"
              />
            </Link>
          </RevealItem>
          <RevealItem>
            <Link
              href="#"
              className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-[#8B7355] px-[30px] pb-[30px] pt-8 text-white"
            >
              <h3 className="font-heading max-w-[220px] text-[34px] leading-[40px]">
                Custom packaging, simplified
              </h3>
              <span className="mt-[27px] inline-flex items-center gap-1 text-[14px] font-semibold uppercase tracking-wide after:block after:h-px after:w-8 after:bg-white after:content-['']">
                shop now
              </span>
              <Image
                src={img("h2-image-banner-2.jpg")}
                alt=""
                width={200}
                height={200}
                className="pointer-events-none absolute right-0 top-4 h-auto w-[48%] object-contain"
              />
            </Link>
          </RevealItem>
        </div>
      </div>
    </Section>
  );
}
