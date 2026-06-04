"use client";

import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/lib/content/home-2";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { Eye, GitCompare, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductGridSection() {
  return (
    <Section className="bg-section-muted">
      <SectionHeader
        title="Discover our bestselling products"
        description="Find the perfect packaging solutions tailored to your industry niche."
        ctaLabel="see all shop"
      />

      <RevealStagger className="mt-10 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <RevealItem key={product.title}>
            <motion.article
              className="product-loop-card group relative overflow-hidden bg-white"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#f7f7f7]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 280px"
                />
                {product.sale && (
                  <span className="absolute left-3 top-3 z-10 rounded-sm bg-secondary px-2 py-0.5 text-[11px] font-bold uppercase text-white">
                    Sale!
                  </span>
                )}
                <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  {[
                    { Icon: Heart, label: "Add to wishlist" },
                    { Icon: Eye, label: "Quick view" },
                    { Icon: GitCompare, label: "Compare" },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark shadow-md transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center gap-2 bg-white/95 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
                  <label className="sr-only" htmlFor={`qty-${product.title}`}>
                    Quantity
                  </label>
                  <input
                    id={`qty-${product.title}`}
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="h-9 w-14 rounded border border-border px-2 text-center text-[14px]"
                  />
                  <Link
                    href="#"
                    className="flex-1 rounded bg-accent-green py-2 text-center text-[12px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#4aad62]"
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <div className="mb-1.5 flex flex-wrap gap-x-1 text-[12px] text-text">
                  {product.categories.map((cat, i) => (
                    <span key={cat}>
                      {cat}
                      {i < product.categories.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <h3 className="woocommerce-loop-product__title font-heading text-[18px] leading-[26px] text-dark">
                  <Link href="#" className="hover:text-primary">
                    {product.title}
                  </Link>
                </h3>
                <p className="short-description mt-2 line-clamp-2 text-[14px] leading-[22px] text-text">
                  {product.shortDescription}
                </p>
                <div className="price_badge mt-3 flex flex-wrap items-center gap-2">
                  {product.sale && product.salePercent && (
                    <span className="rounded bg-secondary/10 px-1.5 py-0.5 text-[11px] font-bold text-secondary">
                      {product.salePercent}
                    </span>
                  )}
                  {product.originalPrice && (
                    <del className="text-[14px] text-text">{product.originalPrice}</del>
                  )}
                  <span className="text-[17px] font-bold text-dark">
                    {product.price}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[12px] text-text">
                  <div className="flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < Math.floor(product.rating)
                            ? "fill-secondary text-secondary"
                            : "fill-border text-border",
                        )}
                      />
                    ))}
                  </div>
                  <span>
                    Rated <strong>{product.rating}</strong> out of 5 ({product.reviews})
                  </span>
                </div>
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
