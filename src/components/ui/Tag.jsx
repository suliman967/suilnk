import clsx from "clsx";
import "./Tag.css";

/**
 * The site's signature structural motif: a small mono-set label styled
 * after a garment spec tag / shipping manifest line. Used only where it
 * encodes something real — a reference code, a status, a spec — never as
 * decorative numbering.
 */
export default function Tag({ children, tone = "default", dot = false, className }) {
  return (
    <span className={clsx("tag", `tag--${tone}`, className)}>
      {dot && <span className="tag__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
