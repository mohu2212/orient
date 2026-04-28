"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/services";

const gradients = [
  "from-emerald-500 to-cyan-500",
  "from-pink-500 to-rose-500",
  "from-violet-500 to-indigo-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-pink-500",
  "from-lime-500 to-emerald-500",
  "from-indigo-500 to-purple-500",
  "from-orange-500 to-red-500",
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4">{t("title")}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            <span className="text-gradient">{t("title")}</span>
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="glass-card p-7"
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} text-white shadow-lg`}>
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t(`${s.id}.title`)}</h3>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">
                  {t(`${s.id}.desc`)}
                </p>
                <ul className="mt-5 space-y-2">
                  {(["f1", "f2", "f3"] as const).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--accent)]/15 text-[var(--accent-600)]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[var(--foreground)]/80">
                        {t(`${s.id}.${f}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
