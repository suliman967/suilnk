import { useEffect, useRef, useState } from "react";

/**
 * Tracks pointer position within a container, normalized to -1..1 on each
 * axis (0,0 = center). Powers the subtle hero parallax/tilt. Idle-resets
 * toward center when the pointer leaves so the visual settles instead of
 * freezing at the last offset.
 */
export function usePointerParallax({ damping = 0.08 } = {}) {
  const containerRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      target.current = { x: clamp(x, -1, 1), y: clamp(y, -1, 1) };
    };

    const handleLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    const tick = () => {
      setPos((prev) => ({
        x: prev.x + (target.current.x - prev.x) * damping,
        y: prev.y + (target.current.y - prev.y) * damping,
      }));
      frame.current = requestAnimationFrame(tick);
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);
    frame.current = requestAnimationFrame(tick);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [damping]);

  return { containerRef, pointer: pos };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
