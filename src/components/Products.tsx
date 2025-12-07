import  { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckIcon, BeakerIcon } from 'lucide-react'
import styles from '../styles/components/Products.module.css'
type Product = {
  name: string
  capColor: string
  capColorClass: string
  usedFor: string
  additive: string
  volume?: string
  ratio?: string
  features: string[]
}
const products: Product[] = [
  {
    name: 'EDTA Tubes',
    capColor: 'Lavender',
    capColorClass: 'lavender',
    usedFor: 'Hematology tests (CBC, RBC, WBC, HGB)',
    additive: 'K2 / K3 EDTA',
    volume: '2ml, 3ml, 4ml, 5ml',
    features: [
      'Accurate anticoagulant ratio',
      'Leak-proof cap',
      'High clarity PET tube',
    ],
  },
  {
    name: 'Clot Activator Tubes',
    capColor: 'Red',
    capColorClass: 'red',
    usedFor: 'Biochemistry & Immunology tests',
    additive: 'Clot activator particles',
    volume: '3ml - 10ml',
    features: ['Fast clot formation', 'Clear serum separation'],
  },
  {
    name: 'Gel + Clot Activator Tubes',
    capColor: 'Yellow',
    capColorClass: 'yellow',
    usedFor: 'Serum separation and analysis',
    additive: 'Gel + clot activator',
    features: ['High-quality inert gel', 'Stable serum separation'],
  },
  {
    name: 'Sodium Citrate Tubes',
    capColor: 'Light Blue',
    capColorClass: 'lightBlue',
    usedFor: 'Coagulation studies (PT, APTT)',
    additive: 'Sodium citrate',
    ratio: '1:9 anticoagulant to blood',
    features: ['Precise ratio', 'Accurate test results'],
  },
  {
    name: 'Fluoride Tubes',
    capColor: 'Grey',
    capColorClass: 'grey',
    usedFor: 'Blood glucose testing',
    additive: 'Sodium fluoride + potassium oxalate',
    features: ['Prevents glycolysis', 'Stable glucose analysis'],
  },
  {
    name: 'Heparin Tubes',
    capColor: 'Green',
    capColorClass: 'green',
    usedFor: 'Clinical chemistry & plasma tests',
    additive: 'Lithium heparin / Sodium heparin',
    features: ['Rapid plasma separation', 'Ideal for chemistry panels'],
  },
]
export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section id="products" className={styles.products} ref={ref}>
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
          <span className={styles.badge}>Our Products</span>
          <h2 className={styles.title}>
            Pharmaceutical Blood Collection Tubes
          </h2>
          <p className={styles.subtitle}>
            International-standard tubes for blood sample collection, testing,
            and clinical diagnostics. Ensuring reliable quality for healthcare
            professionals worldwide.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
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
              {/* Cap Color Indicator */}
              <div
                className={`${styles.capIndicator} ${styles[product.capColorClass]}`}
              />

              <div className={styles.cardContent}>
                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitleSection}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    <div className={styles.capColor}>
                      <span
                        className={`${styles.capDot} ${styles[product.capColorClass]}`}
                      />
                      <span className={styles.capLabel}>
                        {product.capColor} Cap
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardIcon}>
                    <BeakerIcon />
                  </div>
                </div>

                {/* Details */}
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Used For</span>
                    <p className={styles.detailValue}>{product.usedFor}</p>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Additive</span>
                    <p className={styles.detailValue}>{product.additive}</p>
                  </div>
                  {product.volume && (
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>Volume</span>
                      <p className={styles.detailValue}>{product.volume}</p>
                    </div>
                  )}
                  {product.ratio && (
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>Ratio</span>
                      <p className={styles.detailValue}>{product.ratio}</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className={styles.features}>
                  <span className={styles.featuresLabel}>Features</span>
                  <ul className={styles.featuresList}>
                    {product.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
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
            duration: 0.5,
            delay: 0.8,
          }}
          className={styles.cta}
        >
          <p className={styles.ctaText}>
            Looking for specific tube specifications or bulk orders?
          </p>
          <button
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
            className={styles.ctaButton}
          >
            Request Product Catalog
          </button>
        </motion.div>
      </div>
    </section>
  )
}
