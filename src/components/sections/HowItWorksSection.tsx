import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps } from "@/lib/content/home-2";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <Section className="bg-[#fafafa]">
      <SectionHeader
        title="How does Bocpak work?"
        description="Your one-stop shop for eco-friendly packaging solutions."
        align="center"
      />

      <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
        {howItWorksSteps.map((step) => (
          <RevealItem key={step.step}>
            <article
              className={`flex h-full flex-col overflow-hidden rounded-2xl ${step.bg} p-8`}
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-primary">
                step {step.step}
              </span>
              <h3 className="font-heading mt-3 text-[22px] text-dark">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[24px] text-text">
                {step.description}
              </p>
              <div className="relative mt-6 aspect-[330/196] w-full">
                <Image
                  src={step.image}
                  alt={`${step.title} illustration`}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 330px"
                />
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
