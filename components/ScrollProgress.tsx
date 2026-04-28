"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-[#11b85a] via-[#1ed16b] to-[#f2c12e]"
    />
  );
}
