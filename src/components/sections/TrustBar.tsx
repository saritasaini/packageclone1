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
      className="border-b border-border bg-[#F8F8F8] py-3 lg:py-4"
    >
      <div className="container-bocpak flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 lg:-ml-6">
          <p className="text-[14px] font-semibold text-dark lg:text-[15px] whitespace-nowrap">
            2,989+ brands big and small love us!
          </p>
          <StarRating rating={4.9} />
        </div>

        <div className="overflow-hidden lg:w-[55%] lg:ml-auto lg:-mr-8" ref={emblaRef}>
          <div className="flex gap-10 items-center">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={`${brand.alt}-${i}`}
                className="flex min-w-[80px] flex-[0_0_auto] items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-80"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={80}
                  height={20}
                  className="h-4 w-auto max-h-4 shrink-0 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
