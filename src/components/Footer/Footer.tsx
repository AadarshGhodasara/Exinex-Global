import { Link } from "react-router-dom";
import {
  ClockIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { navLinks } from "../../data/navigation";
import { products } from "../../data/products";
import { useSectionNav } from "../../hooks/useSectionNav";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socials = [
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
];

export function Footer() {
  const { goToSection } = useSectionNav();

  return (
    <footer id="contact" className="footer">
      <div className="page-container footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-row">
              <span className="footer__mark">
                <GlobeIcon size={20} aria-hidden="true" />
              </span>
              <span className="footer__wordmark">
                EXINEX <span>GLOBAL</span>
              </span>
            </div>
            <p className="footer__about">
              Delivering Trust, Quality, and Global Trade Excellence in plastic
              scraps, raw materials and plastic products.
            </p>
            <div className="footer__socials">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="footer__social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              {navLinks.map((l) => (
                <li key={l.sectionId}>
                  <button
                    type="button"
                    onClick={() => goToSection(l.sectionId)}
                    className="footer__link"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <h3 className="footer__heading">Products</h3>
            <ul className="footer__list">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="footer__link">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list footer__contact">
              <li className="footer__contact-item">
                <MapPinIcon
                  size={20}
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                Exinex Global, Gujarat, India.
              </li>
              <li className="footer__contact-item">
                <MailIcon
                  size={20}
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <a href="mailto:info@exinexglobal.com" className="footer__link">
                  info@exinexglobal.com
                </a>
              </li>
              <li className="footer__contact-item">
                <PhoneIcon
                  size={20}
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <a href="tel:+918320970639" className="footer__link">
                  +91-8320970639
                </a>
              </li>
              <li className="footer__contact-item">
                <ClockIcon
                  size={20}
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <span>
                  Mon – Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Exinex Global. All Rights Reserved.</p>
          <p>
            Exinex Global – Delivering Trust, Quality, and Global Trade
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
