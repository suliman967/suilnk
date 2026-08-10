import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import photo from "../assets/about/about__photo.png";
import Tag from "../components/ui/Tag.jsx";
import { site } from "../utils/config.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container-wide about__grid">
        <RevealOnScroll className="about__photo">
          {/* Real photo placed in src/assets/about/ */}
          <img src={photo} alt={site.name} className="about__photo-img" />
        </RevealOnScroll>

        <div className="about__copy">
          <RevealOnScroll delay={0.06}>
            <span className="eyebrow">About</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="about__headline">{site.name}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.14}>
            <div className="about__body">
              <p>
                I spent years working in email marketing.. writing campaigns, building sequences, working on deliverability, and helping brands communicate with their audience.
              </p>
              <p>
                Then I built a merch operation for Next Move Only.
              </p>
              <p>
                I found myself enjoying that work more. Building the store. Connecting the products. Setting up Printful. Working through shipping and fulfillment. Making all the pieces work together.
              </p>
              <p>
                So that's what I'm focused on now.
              </p>
              <p>
                I build the infrastructure behind creator merchandise so the creator can focus on the audience and the brand.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Tag tone="ghost" className="about__footnote">
              Background: Email marketing & lifecycle work
            </Tag>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
