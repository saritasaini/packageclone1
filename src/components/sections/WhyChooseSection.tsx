import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChooseFeatures, whyChooseImages } from "@/lib/content/home-2";
import { Headphones, Leaf, Truck } from "lucide-react";
import Image from "next/image";

const icons = {
  leaf: Leaf,
  truck: Truck,
  headset: Headphones,
};

export function WhyChooseSection() {
  const [tall, ...gridImages] = whyChooseImages;

  return (
    <Section>
      <SectionHeader
        eyebrow="why choose bocpak?"
        title="Switch to eco-friendly packaging with an expert's help"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-10">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <article className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
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
              </Reveal>
            );
          })}
        </div>

        <div className="relative">
          <span
            className="pointer-events-none absolute -left-2 top-0 z-10 font-heading text-[120px] leading-none text-dark/10 lg:-left-8 lg:text-[160px]"
            aria-hidden
          >
            &ldquo;
          </span>
          <div className="grid grid-cols-2 gap-4 lg:min-h-[480px]">
            <Reveal className="row-span-2">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl lg:min-h-0 lg:h-full">
                <Image
                  src={tall.src}
                  alt={tall.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 320px"
                  priority
                />
              </div>
            </Reveal>
            {gridImages.map((image, i) => (
              <Reveal key={image.src} delay={0.05 + i * 0.04}>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 200px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
