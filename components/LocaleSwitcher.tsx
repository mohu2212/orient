"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("locale");
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = locale === "ar" ? "en" : "ar";

  const onClick = () => {
    const segments = pathname.split("/");
    if (segments[1] === "ar" || segments[1] === "en") {
      segments[1] = switchTo;
    } else {
      segments.splice(1, 0, switchTo);
    }
    router.push(segments.join("/") || `/${switchTo}`);
  };

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm font-medium hover:bg-[var(--surface)] transition"
      aria-label={t("switch")}
    >
      <Globe size={14} />
      {t("switch")}
    </button>
  );
}
