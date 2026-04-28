"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Users, LineChart } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const values = [
    { Icon: Target, t: t("values.v1t"), d: t("values.v1d") },
    { Icon: Users, t: t("values.v2t"), d: t("values.v2d") },
    { Icon: LineChart, t: t("values.v3t"), d: t("values.v3d") },
  ];

  return (
    <section id="about" className="section">
      <div className="container-x">
        <div className="glass-card rounded-3xl p-8 md:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow mb-4">{t("title")}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                {t("subtitle")}
              </h2>
              <p className="mt-5 text-[var(--muted)] leading-relaxed text-lg">
                {t("p1")}
              </p>
            </div>

            <div className="grid gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 flex gap-4 items-start"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent-600)] shrink-0">
                    <v.Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{v.t}</h3>
                    <p className="text-[var(--muted)] mt-1">{v.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
