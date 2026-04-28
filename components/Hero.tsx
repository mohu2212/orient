"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative">
      <div className="container-x section text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          <Sparkles size={14} />
          {t("tag")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15]"
        >
          <span className="text-gradient">{t("title")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("primary")}
            <Arrow size={18} />
          </a>
          <a href="#services" className="btn-ghost">
            {t("secondary")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
