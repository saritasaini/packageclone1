"use client";

import { brandLogos } from "@/lib/content/home-2";
import { StarRating } from "@/components/ui/StarRating";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function TrustBar() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <section
      aria-label="Customer trust and partner brands"
      className="border-b border-border bg-white py-8 lg:py-[40px]"
    >
      <div className="container-bocpak flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-[16px] font-semibold text-dark lg:text-[18px]">
            2,989+ brands big and small love us!
          </p>
          <StarRating rating={4.9} />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={`${brand.alt}-${i}`}
                className="flex min-w-[100px] flex-[0_0_auto] items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-80"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={32}
                  className="h-8 w-auto max-h-8 shrink-0 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
