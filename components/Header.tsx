"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="container-x mt-3">
        <div className="glass-strong rounded-full flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image src="/logo.png" alt="Orient" width={36} height={36} className="rounded-md" />
            <span className="font-bold text-lg text-[var(--primary)] tracking-tight">Orient</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 text-sm"
            >
              <MessageCircle size={16} />
              {t("cta")}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[var(--primary)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-medium text-[var(--foreground)]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
              <LocaleSwitcher />
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                <MessageCircle size={16} />
                {t("cta")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
