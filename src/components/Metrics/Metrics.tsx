import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import "./Metrics.css";

const metrics = [
  {
    value: 99.5,
    decimals: 1,
    suffix: "%",
    label: "Quality compliance",
    note: "Lots passing pre-shipment checks",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client satisfaction",
    note: "Repeat and referred buyers",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years in trade",
    note: "Import and export operations",
  },
  {
    value: 12,
    suffix: "+",
    label: "Sourcing partners",
    note: "Verified processors & suppliers",
  },
  {
    value: 8,
    suffix: "",
    label: "New markets",
    note: "In the expansion pipeline",
  },
];

const markets = ["Vietnam", "Malaysia", "South Korea", "Indonesia"];

export function Metrics() {
  return (
    <section id="metrics" className="metrics">
      <div className="page-container metrics__grid">
        <div>
          <h2 className="section-title section-title--light">
            Our global trading presence
          </h2>
          <p className="metrics__lead">
            A growing footprint across Central Asia and the CIS, with new
            markets opening every quarter.
          </p>

          <div className="metrics__hero">
            <p className="metrics__hero-value">
              <CountUp value={150} suffix="+" />
            </p>
            <p className="metrics__hero-label">
              International shipments delivered
            </p>
          </div>

          <div className="metrics__markets">
            <h3 className="metrics__markets-title">Export markets</h3>
            <ul className="metrics__market-list">
              {markets.map((m) => (
                <li key={m} className="metrics__market">
                  {m}
                </li>
              ))}
              <li className="metrics__market metrics__market--more">
                & expanding
              </li>
            </ul>
          </div>
        </div>

        <dl className="metrics__stats">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.05,
              }}
              className={`metrics__stat${i === metrics.length - 1 ? " metrics__stat--wide" : ""}`}
            >
              <dt className="metrics__stat-label">{m.label}</dt>
              <dd className="metrics__stat-value">
                <CountUp
                  value={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                />
              </dd>
              <dd className="metrics__stat-note">{m.note}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
