"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

export default function Marquee() {
  const t = useTranslations("services");
  const keys = [
    "marketing",
    "web",
    "ecommerce",
    "video",
    "seo",
    "ads",
    "social",
    "software",
    "mobile",
  ] as const;
  const items = keys.map((k) => t(`${k}.title`));
  const COPIES = 4;
  const all = Array.from({ length: COPIES }).flatMap(() => items);

  return (
    <section
      className="my-8 overflow-hidden border-y border-[var(--border)] bg-[var(--surface)]/40 backdrop-blur-md"
      dir="ltr"
    >
      <div
        className="marquee-track flex items-center py-5"
        style={{
          animation: "marquee 35s linear infinite",
          width: "max-content",
          gap: "2.5rem",
          paddingInlineEnd: "2.5rem",
        }}
      >
        {all.map((label, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 text-base md:text-lg font-bold text-[var(--foreground)]/85"
          >
            <Star size={16} className="text-[var(--accent)]" fill="currentColor" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
