import { footerColumns, img } from "@/lib/content/home-2";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Facebook", abbr: "f" },
  { label: "X", abbr: "𝕏" },
  { label: "Instagram", abbr: "ig" },
  { label: "Pinterest", abbr: "p" },
  { label: "Youtube", abbr: "▶" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <div className="container-bocpak">
        
        {/* Bocpak Info Section (Above the main footer columns) */}
        <div className="mb-12 border-b border-border pb-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {/* Column 1: Logo and Social */}
            <div className="flex flex-col justify-center lg:-ml-6">
              <Link href="/" className="mb-6 inline-flex items-center gap-2">
                <Image
                  src={img("logo3.svg")}
                  alt="Bocpak"
                  width={40}
                  height={40}
                  className="h-10 w-auto shrink-0"
                />
                <span className="font-heading text-[32px] font-bold text-dark tracking-tight">bocpak</span>
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-[14px] text-text">Follow us:</span>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, abbr }) => (
                    <Link
                      key={label}
                      href="#"
                      aria-label={label}
                      className="text-[14px] font-bold text-text transition-colors hover:text-primary"
                    >
                      {abbr}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Column 2: 24/7 Support */}
            <div className="flex items-start gap-4">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><line x1="14" y1="10" x2="21" y2="3"></line><polyline points="14 3 21 3 21 10"></polyline></svg>
              </div>
              <div className="pt-1">
                <span className="mb-1 block text-[13px] text-text">24/7 Support</span>
                <strong className="block text-[15px] font-bold text-dark">+1834 123 456 789</strong>
                <span className="mt-1 block text-[14px] text-text">hello@bocpak.com</span>
              </div>
            </div>

            {/* Column 3: Find our store */}
            <div className="flex items-start gap-4">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="pt-1">
                <span className="mb-1 block text-[13px] text-text">Find our store</span>
                <span className="block text-[14px] leading-[22px] text-text">5609 E Sprague Ave,<br />Spokane Valley, WA 99212,<br />USA</span>
              </div>
            </div>

            {/* Column 4: Opening hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="pt-1">
                <span className="mb-1 block text-[13px] text-text">Opening hours</span>
                <span className="block text-[14px] leading-[22px] text-text">Monday - Sunday 9:00 am<br />to 11:30pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - 5 Columns */}
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[17px] font-bold text-dark">
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group relative inline-block text-[16px] leading-[24px] text-text transition-colors hover:text-dark"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-dark transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h3 className="mb-3 text-[17px] font-bold text-dark">Newsletter</h3>
            <p className="mb-3 text-[16px] leading-[26px] text-text">
              Sign up for exclusive offers and updates!
            </p>
            <form className="flex flex-col gap-4" action="#" method="post">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email..."
                className="h-[50px] w-full rounded-md border border-border px-4 text-[16px] outline-none transition-colors hover:border-[#2563EB] focus:border-[#2563EB]"
              />
              <button
                type="submit"
                className="group relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-md bg-[#2563EB] text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-black"
              >
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  SUBSCRIBE
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  SUBSCRIBE
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Copyright & Payment */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[15px] text-text">
            © 2024 Bocpak. All Rights Reserved
          </p>
          <Image
            src={img("payment.png")}
            alt="Accepted payment methods"
            width={326}
            height={24}
            className="h-6 w-auto shrink-0"
          />
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-[15px] text-text hover:text-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              English
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <button className="flex items-center gap-1.5 text-[15px] text-text hover:text-dark">
              USD
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
