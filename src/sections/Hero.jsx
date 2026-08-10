import { motion } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import Tag from "../components/ui/Tag.jsx";
import HeroVisual from "../components/hero/HeroVisual.jsx";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery.js";
import { links } from "../utils/config.js";
import "./Hero.css";

const easing = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: easing },
        };

  return (
    <section id="top" className="hero">
      <div className="hero__backdrop" aria-hidden="true" />

      <div className="container-wide hero__grid">
        <div className="hero__copy">
          <motion.div {...rise(0)}>
            <span className="eyebrow">Merchandise operations for creators</span>
          </motion.div>

          <motion.h1 className="hero__headline" {...rise(0.08)}>
            Turn your audience
            <br />
            into <em>a brand.</em>
          </motion.h1>

          <motion.p className="hero__sub" {...rise(0.16)}>
            I build and manage the systems behind creator merch — from the store and products to print-on-demand and fulfillment.
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.24)}>
            <Button href="#work" variant="primary">
              View My Work
            </Button>
            <Button href={links.booking} variant="ghost" showArrow={false}>
              Book a Call
            </Button>
          </motion.div>

          <motion.div className="hero__proof" {...rise(0.32)}>
            <Tag dot tone="accent">
              Built from experience
            </Tag>
            <span>Built a complete Shopify + Printful merch operation for Next Move Only.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual-col"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easing }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
