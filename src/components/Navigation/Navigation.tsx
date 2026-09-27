import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { useSectionNav } from "../../hooks/useSectionNav";
import "./Navigation.css";

export function Navigation() {
  const location = useLocation();
  const { goToSection, isHome } = useSectionNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || !isHome || open;

  const handleNav = (id: string) => {
    setOpen(false);
    goToSection(id);
  };

  return (
    <header className={`nav${solid ? " nav--solid" : ""}`}>
      <nav className="page-container nav__inner" aria-label="Main">
        <Link
          to="/"
          onClick={() => handleNav("home")}
          className="nav__brand"
          aria-label="Exinex Global home"
        >
          <span className="nav__mark">
            <GlobeIcon size={20} aria-hidden="true" />
          </span>
          <span className="nav__wordmark">
            EXINEX <span>GLOBAL</span>
          </span>
        </Link>

        <div className="nav__links">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              type="button"
              onClick={() => handleNav(link.sectionId)}
              className="nav__link"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:info@exinexglobal.com?subject=Trade%20enquiry"
            className="btn btn--gold btn--sm"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="nav__mobile"
          >
            <div className="nav__mobile-inner">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  onClick={() => handleNav(link.sectionId)}
                  className="nav__mobile-link"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:info@exinexglobal.com?subject=Trade%20enquiry"
                className="btn btn--navy nav__mobile-cta"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
