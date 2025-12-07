import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
} from 'lucide-react'
import styles from '../styles/components/Footer.module.css'
const companyLinks = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About Us',
    href: '#about',
  },
  {
    name: 'Products',
    href: '#products',
  },
  {
    name: 'Global Trade Metrics',
    href: '#metrics',
  },
  {
    name: 'Contact Us',
    href: '#contact',
  },
]
const productLinks = [
  {
    name: 'EDTA Tubes',
    href: '#products',
  },
  {
    name: 'Clot Activator Tubes',
    href: '#products',
  },
  {
    name: 'Gel Tubes',
    href: '#products',
  },
  {
    name: 'Sodium Citrate Tubes',
    href: '#products',
  },
  {
    name: 'Fluoride Tubes',
    href: '#products',
  },
  {
    name: 'Heparin Tubes',
    href: '#products',
  },
]
export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <footer id="contact" className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <GlobeIcon />
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>Exinex</span>
                <span className={styles.logoSubtitle}>GLOBAL</span>
              </div>
            </div>
            <p className={styles.description}>
              Your trusted partner in pharmaceutical export. Delivering quality
              blood collection tubes to healthcare providers worldwide.
            </p>
            <div className={styles.location}>
              <MapPinIcon />
              <span>India</span>
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linksList}>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={styles.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Products</h4>
            <ul className={styles.linksList}>
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={styles.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Information</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MailIcon />
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>Email</span>
                  <a
                    href="mailto:info@exinexglobal.com"
                    className={styles.contactLink}
                  >
                    info@exinexglobal.com
                  </a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <PhoneIcon />
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+91XXXXXXXXXX" className={styles.contactLink}>
                    +91-6355929510
                  </a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <ClockIcon />
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>Business Hours</span>
                  <p className={styles.contactText}>
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p className={`${styles.contactText} ${styles.closed}`}>
                    Sunday: Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.tagline}>
            <span className={styles.brand}>Exinex Global</span> – Delivering
            Trust, Quality, and Global Trade Excellence.
          </p>
          <p className={styles.copyright}>
            © 2025 Exinex Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
