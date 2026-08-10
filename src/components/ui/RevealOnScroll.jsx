import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

/**
 * Scroll-triggered fade/rise used across every section. Fires once, respects
 * prefers-reduced-motion (falls back to an instant, no-motion appearance),
 * and accepts a `delay` so sibling elements can stagger.
 */
export default function RevealOnScroll({
  children,
  as = "div",
  delay = 0,
  y = 22,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}) {
  const reduceMotion = usePrefersReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
