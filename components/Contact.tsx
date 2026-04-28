"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  const t = useTranslations("contact");

  const items = [
    {
      Icon: Phone,
      label: t("phone"),
      value: site.phoneDisplay,
      href: `tel:${site.phone}`,
      grad: "from-[#1e8449] to-[#27ae60]",
    },
    {
      Icon: Mail,
      label: t("email"),
      value: site.email,
      href: `mailto:${site.email}`,
      grad: "from-[#27ae60] to-[#f1c40f]",
    },
    {
      Icon: MapPin,
      label: t("addressLabel"),
      value: t("address"),
      href: undefined,
      grad: "from-[#f1c40f] to-[#1e8449]",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4">{t("title")}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-gradient">{t("title")}</span>
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((it, i) => {
              const Wrapper = it.href ? "a" : "div";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Wrapper
                    {...(it.href ? { href: it.href } : {})}
                    className="glass rounded-2xl p-6 h-full flex flex-col items-start gap-3 hover:border-[var(--primary)]/30 transition"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${it.grad} text-white shadow-md`}>
                      <it.Icon size={20} />
                    </div>
                    <div className="text-sm text-[var(--muted)]">{it.label}</div>
                    <div className="font-semibold text-[var(--foreground)] break-words" dir="ltr">
                      {it.value}
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              {t("whatsapp")}
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              <Mail size={18} />
              {t("emailUs")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
