import { site, links } from "../../utils/config.js";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__brand">
            {site.brand}
          </a>

          <p className="footer__tagline">{site.tagline}</p>

          <div className="footer__links">
            <a href={`mailto:${links.email}`}>{links.email}</a>
            <a href={links.social.x} target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a href={links.social.instagram} target="_blank" rel="noopener noreferrer">
              
            </a>
          </div>
        </div>

        <hr className="hairline footer__rule" />

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span className="footer__domain">{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
