"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Camera, Briefcase, Users2, AtSign } from "lucide-react";
import { site, asset } from "@/lib/site";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10">
      <div className="container-x pb-8">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <Image src={asset("/logo.png")} alt="Orient" width={40} height={40} className="rounded-md" />
                <span className="font-bold text-lg text-[var(--primary)]">Orient</span>
              </div>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {t("footer.tagline")}
              </p>
              <div className="mt-5 flex items-center gap-3">
                {[
                  { Icon: AtSign, href: site.social.twitter, label: "Twitter" },
                  { Icon: Camera, href: site.social.instagram, label: "Instagram" },
                  { Icon: Briefcase, href: site.social.linkedin, label: "LinkedIn" },
                  { Icon: Users2, href: site.social.facebook, label: "Facebook" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[var(--primary)] transition"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2 text-[var(--muted)]">
                <li><a href="#services" className="hover:text-[var(--primary)] transition">{t("nav.services")}</a></li>
                <li><a href="#about" className="hover:text-[var(--primary)] transition">{t("nav.about")}</a></li>
                <li><a href="#contact" className="hover:text-[var(--primary)] transition">{t("nav.contact")}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-3 text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <a href={`tel:${site.phone}`} dir="ltr" className="hover:text-[var(--primary)] transition">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <a href={`mailto:${site.email}`} className="hover:text-[var(--primary)] transition">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1 shrink-0" />
                  <span>{t("contact.address")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
            © {year} Orient. {t("footer.rights")}.
          </div>
        </div>
      </div>
    </footer>
  );
}
