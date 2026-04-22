"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const SPOT_SIZE = 520;
const LIME = "#C6F432";

export function CursorSpot() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    setEnabled(true);

    const handleMove = (e: PointerEvent) => {
      mouseX.set(e.clientX - SPOT_SIZE / 2);
      mouseY.set(e.clientY - SPOT_SIZE / 2);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full blur-3xl mix-blend-screen"
      style={{
        x,
        y,
        width: SPOT_SIZE,
        height: SPOT_SIZE,
        background: `radial-gradient(circle at center, ${LIME} 0%, ${LIME}00 60%)`,
        opacity: 0.15,
      }}
    />
  );
}
