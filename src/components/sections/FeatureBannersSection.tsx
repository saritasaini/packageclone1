import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { img } from "@/lib/content/home-2";
import { Check } from "lucide-react";
import Image from "next/image";

const leftBullets = [
  ["Vibrant printed colors", "Made for sustainability"],
  ["Sturdy and rigid packaging", "Fast and free standard shipping"],
];

export function FeatureBannersSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#E8F5E9] p-8 lg:min-h-[360px] lg:p-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
              amazing stories
            </p>
            <h2 className="font-heading mt-2 max-w-[280px] text-[28px] leading-[36px] text-dark md:text-[34px] md:leading-[40px]">
              Top sale food packaging pouch
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {leftBullets.map((group, gi) => (
                <ul key={gi} className="space-y-3">
                  {group.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] leading-[22px] text-text"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="mt-8 inline-flex items-baseline gap-2">
              <span className="font-heading text-[56px] leading-none text-dark">
                15K+
              </span>
              <span className="text-[15px] font-semibold text-text">
                Products
              </span>
            </div>
            <Image
              src={img("h2-image-banner-1.jpg")}
              alt="Food packaging pouch"
              width={300}
              height={300}
              className="pointer-events-none absolute bottom-0 right-0 hidden w-[42%] max-w-[240px] object-contain lg:block"
            />
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-[#FFF8E7] p-8 lg:min-h-[360px] lg:p-10">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
                The full package
              </p>
              <h2 className="font-heading mt-2 text-[28px] leading-[36px] text-dark md:text-[34px] md:leading-[40px]">
                Quick, easy & affordable printing
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-[26px] text-text">
                We&apos;re a multi-talented school that delivers a complete brand
                makeover. Packaging, brand guidelines, stationery, vehicles,
                logos, adverts…
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Compostable", "biodegradable", "Plastic Free"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-white px-5 py-2.5 text-[14px] font-semibold capitalize text-dark"
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
