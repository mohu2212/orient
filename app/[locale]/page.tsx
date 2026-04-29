import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Clients from "@/components/Clients";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ScrollProgress />
      <Hero />
      <Pillars />
      <Stats />
      <Clients />
      <Marquee />
      <Services />
      <About />
      <Contact />
    </>
  );
}
