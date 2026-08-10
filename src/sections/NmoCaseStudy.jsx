import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Tag from "../components/ui/Tag.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery.js";
import { nmoCaseStudy, nmoGallery } from "../utils/nmoData.js";
import "./NmoCaseStudy.css";

export default function NmoCaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const active = nmoGallery[activeIndex];

  return (
    <section id="work" className="section nmo">
      <div className="container-wide">
        <div className="nmo__intro">
          <RevealOnScroll>
            <span className="eyebrow">Featured build</span>
          </RevealOnScroll>

          <div className="nmo__intro-grid">
            <RevealOnScroll delay={0.06}>
              <h2 className="nmo__headline">
                {nmoCaseStudy.fullName}
                <span className="nmo__headline-code">/ {nmoCaseStudy.client}</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <div className="nmo__intro-side">
                <p className="nmo__summary">{nmoCaseStudy.summary}</p>
                <div className="nmo__stack">
                  {nmoCaseStudy.stack.map((item) => (
                    <Tag key={item} tone="ghost">
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll delay={0.16}>
          <div className="nmo__viewer">
            <div className="nmo__stage">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active.id}
                  className="nmo__stage-figure"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.995 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={active.image} alt={`${nmoCaseStudy.fullName} — ${active.title}`} />
                </motion.figure>
              </AnimatePresence>

              <div className="nmo__stage-caption">
                <Tag tone="accent">{active.ref}</Tag>
                <div>
                  <p className="nmo__stage-title">{active.title}</p>
                  <p className="nmo__stage-detail">{active.description}</p>
                </div>
              </div>
            </div>

            <div className="nmo__rail" role="tablist" aria-label="NMO screenshots">
              {nmoGallery.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  className={clsx("nmo__thumb", { "is-active": i === activeIndex })}
                  onClick={() => setActiveIndex(i)}
                >
                  <img src={item.image} alt="" aria-hidden="true" />
                  <span className="nmo__thumb-label">
                    <span className="nmo__thumb-ref">{item.ref}</span>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
