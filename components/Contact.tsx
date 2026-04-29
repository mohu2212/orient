"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("contact");
  const tForm = useTranslations("form");

  const items = [
    { Icon: Phone, label: t("phone"), value: site.phoneDisplay, href: `tel:${site.phone}` },
    { Icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
    { Icon: MapPin, label: t("addressLabel"), value: t("address"), href: undefined },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4">{t("title")}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-gradient">{tForm("title")}</span>
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
            {tForm("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 glass-card rounded-3xl p-7 md:p-10">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 grid gap-4 content-start">
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
                    className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--primary)]/30 transition"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--primary-100)] text-[var(--primary-600)] shrink-0">
                      <it.Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[var(--muted)] uppercase tracking-wide">{it.label}</div>
                      <div className="font-semibold text-[var(--foreground)] break-words mt-0.5" dir="ltr">
                        {it.value}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shine-btn justify-center mt-2"
            >
              <MessageCircle size={18} />
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
