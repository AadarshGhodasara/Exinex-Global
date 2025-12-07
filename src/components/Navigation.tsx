import  { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, XIcon, GlobeIcon } from 'lucide-react'
import styles from '../styles/components/Navigation.module.css'
const navLinks = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Products',
    href: '#products',
  },
  {
    name: 'Metrics',
    href: '#metrics',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className={styles.logo}
          >
            <div className={styles.logoIcon}>
              <GlobeIcon />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Exinex</span>
              <span className={styles.logoSubtitle}>GLOBAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={styles.navLink}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className={styles.ctaButton}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuInner}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={styles.mobileNavLink}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className={styles.mobileCtaButton}
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
