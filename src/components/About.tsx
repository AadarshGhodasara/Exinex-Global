import  { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  EyeIcon,
  TargetIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  GlobeIcon,
  AwardIcon,
  ClockIcon,
  FileCheckIcon,
  BadgeDollarSignIcon,
} from 'lucide-react'
import styles from '../styles/components/About.module.css'
const missionPoints = [
  'To deliver superior-quality pharmaceutical products to global markets',
  'To provide smooth, hassle-free import-export solutions',
  'To build reliable and long-lasting international partnerships',
  'To promote excellence in every step of global trade',
]
const whyChooseUs = [
  {
    icon: ShieldCheckIcon,
    text: 'ISO-standard compliant products',
  },
  {
    icon: GlobeIcon,
    text: 'Strong global network',
  },
  {
    icon: AwardIcon,
    text: 'Trusted quality assurance',
  },
  {
    icon: ClockIcon,
    text: 'On-time delivery',
  },
  {
    icon: FileCheckIcon,
    text: 'Transparent and efficient operations',
  },
  {
    icon: BadgeDollarSignIcon,
    text: 'Competitive international pricing',
  },
]
export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className={styles.header}
        >
          <span className={styles.badge}>Who We Are</span>
          <h2 className={styles.title}>About Exinex Global</h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className={styles.description}
        >
          <p className={styles.descriptionText}>
            Exinex Global is a professionally managed import–export company
            delivering high-quality products to international markets. Based in
            India, we specialize in exporting{' '}
            <span className={styles.highlight}>
              Pharmaceutical Blood Collection Tubes
            </span>{' '}
            and offer complete global trading solutions for both import and
            export requirements.
          </p>
          <p className={styles.descriptionText}>
            With a commitment to quality, transparency, and timely delivery, we
            have built long-lasting business relationships across multiple
            countries. Our strong market understanding, reliable sourcing
            network, and customer-centric approach make us a trusted partner in
            global trade.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className={styles.cardsGrid}>
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={`${styles.card} ${styles.vision}`}
          >
            <div className={`${styles.cardIcon} ${styles.visionIcon}`}>
              <EyeIcon />
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To become a globally recognized export-import company known for
              professionalism, ethical business practices, and exceptional
              product standards.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className={`${styles.card} ${styles.mission}`}
          >
            <div className={`${styles.cardIcon} ${styles.missionIcon}`}>
              <TargetIcon />
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <ul className={styles.missionList}>
              {missionPoints.map((point, index) => (
                <li key={index} className={styles.missionItem}>
                  <CheckCircleIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className={styles.whyChoose}
        >
          <h3 className={styles.whyTitle}>Why Choose Exinex Global?</h3>
          <div className={styles.featuresGrid}>
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                }}
                className={styles.feature}
              >
                <div className={styles.featureIcon}>
                  <item.icon />
                </div>
                <span className={styles.featureText}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
