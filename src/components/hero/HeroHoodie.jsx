import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery.js";
import { usePointerParallax } from "../../hooks/usePointerParallax.js";
import "./HeroHoodie.css";

export default function HeroHoodie() {
  const reduceMotion = usePrefersReducedMotion();
  const { containerRef, pointer } = usePointerParallax({ damping: 0.06 });

  const floatAnim = reduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        rotate: [-0.6, 0.5, -0.3],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      };

  const parallaxStyle = {
    transform: `translate3d(${pointer.x * 10}px, ${pointer.y * -12}px, 0) rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 6}deg)`,
  };

  return (
    <div className="hero-hoodie" ref={containerRef} aria-hidden="true">
      <div className="hero-hoodie__glow" />

      <motion.img
        className="hero-hoodie__img"
        src="/images/hero-hoodie.png"
        alt="Premium creator merchandise hoodie"
        style={parallaxStyle}
        animate={floatAnim}
        draggable={false}
      />
    </div>
  );
}
