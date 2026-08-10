import { Play } from "lucide-react";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import Tag from "../components/ui/Tag.jsx";
import { links } from "../utils/config.js";
import "./LoomWalkthrough.css";

export default function LoomWalkthrough() {
  return (
    <section className="section loom">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="loom__card">
            <a
              href={links.loom}
              target="_blank"
              rel="noopener noreferrer"
              className="loom__visual"
              aria-label="Watch the full build walkthrough on Loom"
            >
              <div className="loom__texture" aria-hidden="true" />
              <span className="loom__play">
                <Play size={20} strokeWidth={1.5} fill="currentColor" />
              </span>
            </a>

            <div className="loom__copy">
              <span className="eyebrow">Process, not a pitch</span>
              <h2 className="loom__headline">See how I built it.</h2>
              <p className="loom__body">
                A real walkthrough of the NMO merch operation I built — from the Shopify store and product setup to Printful, shipping, and the fulfillment workflow behind it.
              </p>
              <div className="loom__actions">
                <a href={links.loom} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <span>Watch the Loom</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
