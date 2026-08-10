import { ArrowRight } from "lucide-react";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import "./SolutionSection.css";

const flow = [
  { label: "Strategy", detail: "Products, collections, pricing, positioning" },
  { label: "Storefront", detail: "Shopify build and product pages" },
  { label: "Production", detail: "Printful integration, products, mockups" },
  { label: "Operations", detail: "Orders, fulfillment, shipping, tracking" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="section solution">
      <div className="container-wide">
        <div className="solution__lead">
          <RevealOnScroll>
            <span className="eyebrow">The solution</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="solution__headline">You create. I handle what's behind the merch.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.14}>
            <p className="solution__intro">
              You shouldn't have to learn Shopify, connect print-on-demand products, figure out fulfillment, and keep checking whether orders are moving.

              I handle the operational side so the merch has a proper system behind it.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.18}>
          <div className="solution__flow" role="list" aria-label="The merchandise operation Suliman manages">
            {flow.map((step, i) => (
              <div className="solution__flow-item" role="listitem" key={step.label}>
                <div className="solution__flow-node">
                  <span className="solution__flow-label">{step.label}</span>
                  <span className="solution__flow-detail">{step.detail}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="solution__flow-arrow" size={16} strokeWidth={1.5} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
