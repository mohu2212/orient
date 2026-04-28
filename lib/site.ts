export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;

export const site = {
  name: "Orient",
  phone: "+966569328757",
  phoneDisplay: "+966 56 932 8757",
  email: "info@orientmarketer.com",
  whatsapp: "https://wa.me/966569328757",
  addressKey: "address",
  social: {
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  stats: { clients: 500, projects: 1200, years: 10 },
};
