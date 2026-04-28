"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Rocket, Target, Settings, TrendingUp } from "lucide-react";

export default function Pillars() {
  const t = useTranslations("pillars");

  const items = [
    { Icon: Rocket, title: t("p1t"), desc: t("p1d") },
    { Icon: Target, title: t("p2t"), desc: t("p2d") },
    { Icon: Settings, title: t("p3t"), desc: t("p3d") },
    { Icon: TrendingUp, title: t("p4t"), desc: t("p4d") },
  ];

  return (
    <section className="container-x mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass-card rounded-2xl p-5 flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#11b85a] to-[#f2c12e] text-white shadow-md shrink-0">
              <it.Icon size={20} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-[var(--foreground)] leading-tight">
                {it.title}
              </div>
              <div className="text-sm text-[var(--muted)] leading-tight mt-0.5">
                {it.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
