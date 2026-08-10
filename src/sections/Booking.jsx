import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import Button from "../components/ui/Button.jsx";
import { links, site } from "../utils/config.js";
import "./Booking.css";

export default function Booking() {
  const hasEmbed = Boolean(links.bookingEmbed);

  return (
    <section id="contact" className="section booking">
      <div className="booking__backdrop" aria-hidden="true" />
      <div className="container booking__inner">
        <RevealOnScroll>
          <span className="eyebrow booking__eyebrow">Start here</span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06}>
          <h2 className="booking__headline">Thinking about launching merch?</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <p className="booking__sub">
            Book a call. We'll look at your brand, your audience, and what the merch operation would actually need.
          </p>
        </RevealOnScroll>

        {hasEmbed ? (
          <RevealOnScroll delay={0.18} className="booking__embed-wrap">
            <iframe
              src={links.bookingEmbed}
              title={`Book a call with ${site.name}`}
              className="booking__embed"
              loading="lazy"
            />
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay={0.18} className="booking__actions">
            <Button href={links.booking} variant="primary">
              Book a Call
            </Button>
            <a href={`mailto:${links.email}`} className="booking__email">
              or email {links.email}
            </a>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
