"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const t = useTranslations("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t("subjectPrefix")} ${name || ""}`);
    const body = encodeURIComponent(
      `${t("nameLabel")}: ${name}\n${t("emailLabel")}: ${email}\n${t("phoneLabel")}: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("nameLabel")}
          className={inputCls}
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailLabel")}
          className={inputCls}
        />
      </div>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={t("phoneLabel")}
        dir="ltr"
        className={inputCls}
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t("messageLabel")}
        rows={5}
        className={inputCls}
      />
      <button type="submit" className="btn-primary shine-btn justify-center">
        {t("submit")}
        <Send size={16} />
      </button>
    </form>
  );
}
