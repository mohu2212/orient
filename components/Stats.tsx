"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function Stats() {
  const t = useTranslations("stats");
  const items = [
    { value: site.stats.clients, label: t("clients") },
    { value: site.stats.projects, label: t("projects") },
    { value: site.stats.years, label: t("years") },
  ];

  return (
    <section className="container-x relative z-10 -mt-6 mb-10">
      <div className="glass-card rounded-3xl grid grid-cols-1 md:grid-cols-3 p-8 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center md:border-x md:border-[var(--border)] md:first:border-s-0 md:last:border-e-0"
          >
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              +{it.value.toLocaleString()}
            </div>
            <div className="mt-2 text-[var(--muted)] font-medium">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
