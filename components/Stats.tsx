"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { site } from "@/lib/site";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `+${Math.round(v).toLocaleString()}`);
  const [display, setDisplay] = useState("+0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: [0.2, 0.8, 0.2, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, count, rounded]);

  return <span ref={ref}>{display}</span>;
}

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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.9, 0.2, 1] }}
            className="text-center md:border-x md:border-[var(--border)] md:first:border-s-0 md:last:border-e-0"
          >
            <div className="text-5xl md:text-6xl font-extrabold text-gradient leading-none">
              <Counter to={it.value} />
            </div>
            <div className="mt-3 text-[var(--muted)] font-semibold">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
