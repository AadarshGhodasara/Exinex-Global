import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  TrendingUpIcon,
  GlobeIcon,
  CheckCircleIcon,
  PackageIcon,
  UsersIcon,
  Building2Icon,
  TargetIcon,
} from 'lucide-react'
import styles from '../styles/components/Metrics.module.css'
type Metric = {
  icon: typeof TrendingUpIcon
  value: number
  suffix: string
  prefix?: string
  label: string
  description: string
}
const metrics: Metric[] = [
  {
    icon: TrendingUpIcon,
    value: 2,
    suffix: '+',
    label: 'Years of Experience',
    description: 'In Export-Import',
  },
  {
    icon: GlobeIcon,
    value: 3,
    suffix: '+',
    label: 'Export Markets',
    description: 'Russia, Kazakhstan, Azerbaijan',
  },
  {
    icon: CheckCircleIcon,
    value: 99.5,
    suffix: '%',
    label: 'Quality Compliance',
    description: 'Product Accuracy',
  },
  {
    icon: PackageIcon,
    value: 150,
    suffix: '+',
    label: 'International Shipments',
    description: 'Successfully Delivered',
  },
  {
    icon: UsersIcon,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Happy Partners',
  },
  {
    icon: Building2Icon,
    value: 12,
    suffix: '+',
    label: 'Partner Manufacturers',
    description: 'Trusted Pharma Partners',
  },
  {
    icon: TargetIcon,
    value: 8,
    suffix: '',
    label: 'New Markets',
    description: 'Expansion Pipeline',
  },
]
function AnimatedCounter({
  value,
  suffix,
  prefix,
  isInView,
}: {
  value: number
  suffix: string
  prefix?: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)
  const duration = 2000
  const isDecimal = value % 1 !== 0
  useEffect(() => {
    if (!isInView) return
    let startTime: number
    let animationFrame: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = easeOutQuart * value
      setCount(
        isDecimal
          ? parseFloat(currentValue.toFixed(1))
          : Math.floor(currentValue),
      )
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, isDecimal])
  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
export function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section id="metrics" className={styles.metrics} ref={ref}>
      {/* Background Decorations */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
      </div>

      {/* Dot Pattern */}
      <div className={styles.dotPattern1}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
      <div className={styles.dotPattern2}>
        {[...Array(16)].map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>

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
          <span className={styles.badge}>Our Achievements</span>
          <h2 className={styles.title}>Our Global Trading Presence</h2>
          <p className={styles.subtitle}>
            Building trust through consistent quality and reliable partnerships
            across the globe
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className={styles.grid}>
          {metrics.slice(0, 4).map((metric, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: 0.1 + index * 0.1,
              }}
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                <metric.icon />
              </div>
              <div className={styles.cardValue}>
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  isInView={isInView}
                />
              </div>
              <div className={styles.cardLabel}>{metric.label}</div>
              <div className={styles.cardDescription}>{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className={styles.gridSecondRow}>
          {metrics.slice(4).map((metric, index) => (
            <motion.div
              key={index + 4}
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
                duration: 0.5,
                delay: 0.5 + index * 0.1,
              }}
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                <metric.icon />
              </div>
              <div className={styles.cardValue}>
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  isInView={isInView}
                />
              </div>
              <div className={styles.cardLabel}>{metric.label}</div>
              <div className={styles.cardDescription}>{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
