"use client";

import { useTranslations } from "next-intl";

const placeholders = ["BRAND·01", "BRAND·02", "BRAND·03", "BRAND·04", "BRAND·05", "BRAND·06", "BRAND·07", "BRAND·08"];

export default function Clients() {
  const t = useTranslations("clients");
  const COPIES = 3;
  const all = Array.from({ length: COPIES }).flatMap(() => placeholders);

  return (
    <section className="py-14 border-y border-[var(--border)]">
      <div className="container-x">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-[var(--muted)] mb-8">
          {t("title")}
        </p>
      </div>
      <div className="overflow-hidden" dir="ltr">
        <div
          className="flex items-center"
          style={{
            animation: "marquee 35s linear infinite",
            width: "max-content",
            gap: "4rem",
            paddingInlineEnd: "4rem",
          }}
        >
          {all.map((label, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center h-12 px-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] font-mono text-sm tracking-[0.2em] text-[var(--muted)]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
