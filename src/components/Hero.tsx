import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  GlobeIcon,
  TruckIcon,
} from 'lucide-react'
import styles from '../styles/components/Hero.module.css'
export function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Elements */}
      <div className={styles.decorativeBlob1} />
      <div className={styles.decorativeBlob2} />

      {/* Dot Pattern */}
      <div className={styles.dotPattern1}>
        {[...Array(16)].map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
      <div className={styles.dotPattern2}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className={styles.content}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className={styles.badge}
            >
              <GlobeIcon />
              Global Pharmaceutical Export
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className={styles.title}
            >
              Empowering{' '}
              <span className={styles.gradientText}>Global Trade</span> With
              Excellence
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className={styles.subtitle}
            >
              Specializing in the export of high-quality Pharmaceutical Blood
              Collection Tubes worldwide.
              <span className={styles.subtitleBold}>
                {' '}
                Reliable. Professional. Globally Trusted.
              </span>
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className={styles.buttons}
            >
              <button
                onClick={() => handleScrollTo('#products')}
                className={styles.primaryButton}
              >
                Explore Our Products
                <ArrowRightIcon />
              </button>
              <button
                onClick={() => handleScrollTo('#contact')}
                className={styles.secondaryButton}
              >
                Contact Us
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className={styles.trustIndicators}
            >
              <div className={styles.trustItem}>
                <div className={`${styles.trustIcon} ${styles.success}`}>
                  <ShieldCheckIcon />
                </div>
                <span className={styles.trustText}>ISO Certified</span>
              </div>
              <div className={styles.trustItem}>
                <div className={`${styles.trustIcon} ${styles.primary}`}>
                  <GlobeIcon />
                </div>
                <span className={styles.trustText}>Global Network</span>
              </div>
              <div className={styles.trustItem}>
                <div className={`${styles.trustIcon} ${styles.teal}`}>
                  <TruckIcon />
                </div>
                <span className={styles.trustText}>On-Time Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className={styles.visual}
          >
            <div className={styles.visualContainer}>
              <div className={styles.bgShape1} />
              <div className={styles.bgShape2} />

              <div className={styles.mainVisual}>
                <div className={styles.visualContent}>
                  <div className={styles.svgContainer}>
                    <svg viewBox="0 0 100 100">
                      <defs>
                        <linearGradient
                          id="tubeGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ffffff"
                            stopOpacity="0.9"
                          />
                          <stop
                            offset="100%"
                            stopColor="#ffffff"
                            stopOpacity="0.6"
                          />
                        </linearGradient>
                      </defs>
                      <rect
                        x="35"
                        y="15"
                        width="30"
                        height="60"
                        rx="3"
                        fill="url(#tubeGrad)"
                      />
                      <rect
                        x="35"
                        y="15"
                        width="30"
                        height="10"
                        rx="2"
                        fill="#E879F9"
                        opacity="0.8"
                      />
                      <rect
                        x="32"
                        y="10"
                        width="36"
                        height="8"
                        rx="2"
                        fill="#A855F7"
                      />
                      <rect
                        x="37"
                        y="35"
                        width="26"
                        height="38"
                        rx="2"
                        fill="#DC2626"
                        opacity="0.7"
                      />
                      <rect
                        x="55"
                        y="25"
                        width="25"
                        height="50"
                        rx="3"
                        fill="url(#tubeGrad)"
                        transform="rotate(15, 67, 50)"
                      />
                      <rect
                        x="55"
                        y="25"
                        width="25"
                        height="8"
                        rx="2"
                        fill="#3B82F6"
                        transform="rotate(15, 67, 50)"
                      />
                      <rect
                        x="15"
                        y="25"
                        width="25"
                        height="50"
                        rx="3"
                        fill="url(#tubeGrad)"
                        transform="rotate(-15, 27, 50)"
                      />
                      <rect
                        x="15"
                        y="25"
                        width="25"
                        height="8"
                        rx="2"
                        fill="#10B981"
                        transform="rotate(-15, 27, 50)"
                      />
                    </svg>
                  </div>
                  <p className={styles.visualTitle}>Blood Collection Tubes</p>
                  <p className={styles.visualSubtitle}>
                    Premium Quality Export
                  </p>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`${styles.floatingCard} ${styles.card1}`}
              >
                <div>
                  <p className={`${styles.cardValue} ${styles.primary}`}>99%</p>
                  <p className={styles.cardLabel}>Quality</p>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className={`${styles.floatingCard} ${styles.card2}`}
              >
                <div>
                  <p className={`${styles.cardValue} ${styles.teal}`}>150+</p>
                  <p className={styles.cardLabel}>Shipments</p>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className={`${styles.floatingCard} ${styles.card3}`}
              >
                <ShieldCheckIcon />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
