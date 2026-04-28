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
    <section className="relative overflow-hidden">
      <div className="grid-bg" aria-hidden />
      <motion.div
        className="orb hidden md:block -z-10"
        style={{ width: 320, height: 320, background: "rgba(17,184,90,0.4)", top: -60, left: "8%" }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="orb hidden md:block -z-10"
        style={{ width: 280, height: 280, background: "rgba(242,193,46,0.35)", top: 40, right: "8%" }}
        animate={{ x: [0, -25, 20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="orb md:hidden -z-10"
        style={{ width: 180, height: 180, background: "rgba(17,184,90,0.22)", top: -40, left: "-10%" }}
        animate={{ x: [0, 20, -10, 0], y: [0, -12, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="orb md:hidden -z-10"
        style={{ width: 160, height: 160, background: "rgba(242,193,46,0.2)", top: 20, right: "-10%" }}
        animate={{ x: [0, -16, 10, 0], y: [0, 14, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-x section text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          <Sparkles size={14} className="animate-pulse" />
          {t("tag")}
        </motion.span>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1]">
          {t("title").split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.2, 0.9, 0.2, 1] }}
              className="inline-block me-3"
            >
              <span className="text-gradient">{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shine-btn pulse-ring"
          >
            {t("primary")}
            <motion.span
              animate={{ x: [0, locale === "ar" ? -4 : 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Arrow size={18} />
            </motion.span>
          </a>
          <a href="#services" className="btn-ghost shine-btn">
            {t("secondary")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
