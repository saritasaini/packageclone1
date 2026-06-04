import { announcementItems } from "@/lib/content/home-2";

export function AnnouncementBar() {
  const items = [...announcementItems, ...announcementItems];

  return (
    <div
      className="overflow-hidden bg-announcement py-2.5 text-white"
      role="region"
      aria-label="Promotional announcements"
    >
      <div className="flex w-max marquee-track gap-8 whitespace-nowrap px-4 text-[11px] font-semibold uppercase tracking-[0.08em]">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            {item}
            <span className="text-white/70" aria-hidden>
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
