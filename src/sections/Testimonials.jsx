import { Quote } from "lucide-react";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import Tag from "../components/ui/Tag.jsx";
import { testimonials } from "../utils/testimonialsData.js";
import "./Testimonials.css";

function initials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="section testimonials">
      <div className="container-wide">
        <RevealOnScroll>
          <span className="eyebrow">What clients say</span>
        </RevealOnScroll>

        {hasTestimonials ? (
          <div className="testimonials__rail">
            {testimonials.map((item, i) => (
              <RevealOnScroll as="figure" key={item.id} delay={i * 0.06} className="testimonials__card">
                <Quote className="testimonials__quote-mark" size={26} strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="testimonials__quote">{item.quote}</blockquote>
                <figcaption className="testimonials__person">
                  {item.avatar ? (
                    <img src={item.avatar} alt="" className="testimonials__avatar" />
                  ) : (
                    <span className="testimonials__avatar testimonials__avatar--fallback">
                      {initials(item.name)}
                    </span>
                  )}
                  <span>
                    <span className="testimonials__name">{item.name}</span>
                    <span className="testimonials__role">
                      {item.role}
                      {item.handle ? ` · ${item.handle}` : ""}
                    </span>
                  </span>
                </figcaption>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll delay={0.08}>
            <div className="testimonials__empty">
              <Tag dot tone="ghost">
                Awaiting testimonials
              </Tag>
              <p>
                Real client quotes will render here automatically. Add them to{" "}
                <code>src/utils/testimonialsData.js</code> — no layout changes needed.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
