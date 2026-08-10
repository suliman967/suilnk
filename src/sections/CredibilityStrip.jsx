import clsx from "clsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./CredibilityStrip.css";

const capabilities = [
  "Shopify storefront",
  "Product & collection setup",
  "Print-on-demand integration",
  "Fulfillment & shipping operations",
];

export default function CredibilityStrip() {
  const [ref, visible] = useScrollReveal({ threshold: 0.4 });

  return (
    <div className="credibility" ref={ref}>
      <div className={clsx("container-wide credibility__inner", { "is-visible": visible })}>
        <span className="credibility__label">What I handle</span>
        <ul className="credibility__list">
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
