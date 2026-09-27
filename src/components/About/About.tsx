import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import "./About.css";

const reasons = [
  "Quality-checked, sorted material",
  "Strong global sourcing network",
  "Pre-shipment inspection",
  "On-time delivery",
  "Transparent, efficient operations",
  "Competitive international pricing",
];

const mission = [
  "Supply consistent, quality-checked plastic materials to global markets",
  "Provide smooth, hassle-free import and export solutions",
  "Build reliable, long-lasting international partnerships",
  "Promote responsible recycling and circular trade in plastics",
];

const ease = [0.23, 1, 0.32, 1] as const;

export function About() {
  return (
    <section id="about" className="about">
      <div className="page-container about__grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease }}
        >
          <h2 className="section-title">
            Your trusted partner in import–export success
          </h2>
          <div className="about__copy">
            <p>
              Exinex Global is a professionally managed import–export trading
              company based in India. We source and supply plastic scraps, raw
              plastic granules and finished plastic products to manufacturers,
              recyclers and distributors across international markets.
            </p>
            <p>
              With a commitment to quality, transparency and timely delivery, we
              have built long-lasting relationships across multiple countries.
              Strong market understanding and a reliable sourcing network make
              us a dependable partner in global trade.
            </p>
          </div>

          <h3 className="about__subtitle">Why choose Exinex Global</h3>
          <ul className="about__reasons">
            {reasons.map((r) => (
              <li key={r} className="check-item">
                <span className="check-icon">
                  <CheckIcon size={14} aria-hidden="true" />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease, delay: 0.08 }}
        >
          <div className="about__vision">
            <h3 className="about__label">Our Vision</h3>
            <p className="about__vision-text">
              To become a globally recognised import–export company known for
              professionalism, ethical business practices and exceptional
              product standards.
            </p>
          </div>

          <div className="about__mission">
            <h3 className="about__label about__label--dark">Our Mission</h3>
            <ol className="about__mission-list">
              {mission.map((m, i) => (
                <li key={m} className="about__mission-item">
                  <span className="about__mission-num">{i + 1}.</span>
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
