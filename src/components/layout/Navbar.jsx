import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Button from "../ui/Button.jsx";
import { navLinks, links, site } from "../../utils/config.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={clsx("navbar", { "navbar--scrolled": scrolled })}>
      <div className="navbar__inner container-wide">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          {site.brand}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href={links.booking} variant="ghost" showArrow={false}>
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={clsx("navbar__mobile", { "navbar__mobile--open": menuOpen })}>
        <nav aria-label="Mobile" className="navbar__mobile-links">
          {navLinks.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__mobile-link"
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={links.booking} variant="primary" className="navbar__mobile-cta" onClick={closeMenu}>
          Book a Call
        </Button>
      </div>
    </header>
  );
}
