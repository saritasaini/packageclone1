"use client";

import { img, navLinks } from "@/lib/content/home-2";
import { cn } from "@/lib/utils/cn";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white">
      <div className="container-bocpak flex h-[72px] items-center justify-between gap-4 lg:h-[80px]">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={img("logo3.svg")}
            alt="Bocpak"
            width={36}
            height={36}
            className="h-9 w-auto shrink-0"
          />
          <span className="text-[22px] font-bold tracking-tight text-dark">
            bocpak
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          style={{ gap: 28 }}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide text-dark transition-colors hover:text-primary"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#search"
            className="text-dark transition-colors hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="#wishlist"
            className="relative text-dark transition-colors hover:text-primary"
            aria-label="Wishlist, 0 items"
          >
            <Heart className="h-5 w-5" strokeWidth={1.75} />
            <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
              0
            </span>
          </Link>
          <Link
            href="#cart"
            className="relative inline-flex items-center gap-2 text-dark transition-colors hover:text-primary"
            aria-label="Cart, 0 items, $0.00"
          >
            <span className="relative">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="hidden text-[13px] font-semibold text-dark sm:inline">
              $0.00
            </span>
          </Link>

          <span
            className="hidden h-6 w-px bg-border sm:block"
            aria-hidden
          />

          <Link
            href="#account"
            className="hidden items-center gap-1.5 text-[13px] font-semibold text-dark transition-colors hover:text-primary sm:inline-flex"
          >
            <User className="h-5 w-5" strokeWidth={1.75} />
            <span>My Account</span>
          </Link>
          <button
            type="button"
            className="inline-flex p-1 text-dark lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-white lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
        aria-label="Mobile navigation"
      >
        <ul className="container-bocpak flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block py-2.5 text-[14px] font-semibold uppercase tracking-wide text-dark"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#account"
              className="flex items-center gap-2 py-2.5 text-[14px] font-semibold text-dark"
              onClick={() => setMobileOpen(false)}
            >
              <User className="h-5 w-5" />
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
