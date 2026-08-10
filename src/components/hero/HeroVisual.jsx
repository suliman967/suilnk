import { useMediaQuery, usePrefersReducedMotion } from "../../hooks/useMediaQuery.js";
import HeroVisualFallback from "./HeroVisualFallback.jsx";
import HeroHoodie from "./HeroHoodie.jsx";
import "./HeroVisual.css";

export default function HeroVisual() {
  const isDesktop = useMediaQuery("(min-width: 860px)");
  const reduceMotion = usePrefersReducedMotion();
  // Show the lightweight PNG hoodie on all sizes (desktop/tablet/mobile)
  // unless the user prefers reduced motion. This preserves the intent to
  // avoid heavy WebGL on mobile while keeping the product visual visible.
  const showHoodie = !reduceMotion;

  return (
    <div className="hero-visual" role="img" aria-label="A premium floating merchandise tag">
      {showHoodie ? <HeroHoodie /> : <HeroVisualFallback />}
    </div>
  );
}
