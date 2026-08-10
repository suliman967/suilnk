import { usePointerParallax } from "../../hooks/usePointerParallax.js";
import "./HeroVisualFallback.css";

/**
 * A flat rendition of the same hang-tag concept as the 3D scene, used on
 * mobile (kept off WebGL to protect battery and scroll performance) and as
 * the error-boundary fallback. Same silhouette, same accent thread loop —
 * the two versions should read as one visual, not two different ideas.
 */
export default function HeroVisualFallback() {
  const { containerRef, pointer } = usePointerParallax({ damping: 0.06 });

  const tiltStyle = {
    transform: `rotateX(${pointer.y * -6}deg) rotateY(${pointer.x * 8}deg)`,
  };

  return (
    <div className="hero-fallback" ref={containerRef}>
      <div className="hero-fallback__glow" aria-hidden="true" />
      <div className="hero-fallback__stage" style={tiltStyle}>
        <svg
          className="hero-fallback__tag hero-fallback__tag--back"
          viewBox="0 0 220 300"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="212" height="292" rx="20" fill="#121316" />
        </svg>

        <svg className="hero-fallback__tag hero-fallback__tag--front" viewBox="0 0 220 300" role="img" aria-label="A premium merchandise tag representing a creator merch operation">
          <defs>
            <linearGradient id="tagSheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4f1ea" />
              <stop offset="55%" stopColor="#e7e2d6" />
              <stop offset="100%" stopColor="#d9d3c4" />
            </linearGradient>
            <radialGradient id="tagHighlight" cx="30%" cy="18%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="6" y="6" width="208" height="288" rx="18" fill="url(#tagSheen)" />
          <rect x="6" y="6" width="208" height="288" rx="18" fill="url(#tagHighlight)" />

          {/* grommet */}
          <circle cx="110" cy="42" r="11" fill="none" stroke="#9a978f" strokeWidth="6" />

          {/* thread loop, accent color */}
          <path
            d="M 92 30 A 20 20 0 0 1 128 30"
            fill="none"
            stroke="#64789f"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* engraved spec lines */}
          <rect x="42" y="88" width="136" height="3" rx="1.5" fill="#a9a396" opacity="0.55" />
          <rect x="42" y="104" width="92" height="3" rx="1.5" fill="#a9a396" opacity="0.4" />
          <rect x="42" y="252" width="66" height="2.5" rx="1.25" fill="#a9a396" opacity="0.35" />
        </svg>
      </div>
    </div>
  );
}
