import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import "./Button.css";

/**
 * Shared CTA button. Renders as an <a> when `href` is provided, otherwise
 * a <button>. `variant` controls visual weight — use "primary" for the one
 * action you want taken per section, "ghost" for the secondary option.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  showArrow = true,
  target,
  className,
  ...rest
}) {
  const classes = clsx("btn", `btn--${variant}`, className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="btn__icon" size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (href) {
    const isExternal = target === "_blank" || /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
