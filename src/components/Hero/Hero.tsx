import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { HeroPortfolio } from "./HeroPortfolio";
import { CommodityMarquee } from "../CommodityMarquee/CommodityMarquee";
import { scrollToSection } from "../../utils/scroll";
import "./Hero.css";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { value: "150+", label: "Shipments delivered" },
  { value: "3", label: "Export markets" },
  { value: "9", label: "Product lines" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="home" ref={ref} className="hero">
      <motion.img
        src="/9eaa0309-ade8-4f60-8063-33060c7a0078.jpg"
        alt=""
        style={{ y: imageY }}
        className="hero__bg"
      />

      <div className="hero__overlay" aria-hidden="true" />

      <div className="page-container hero__grid">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="hero__eyebrow"
          >
            <span className="hero__eyebrow-rule" aria-hidden="true" />
            Import & Export Trading Company · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.06 }}
            className="hero__title"
          >
            Connecting markets with the plastics they run on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.12 }}
            className="hero__lead"
          >
            EXINEX GLOBAL imports and exports plastic scraps, raw plastic
            granules and finished plastic products — sourced reliably, inspected
            carefully and shipped on time to buyers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.18 }}
            className="hero__actions"
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("products")}
              className="btn btn--gold"
            >
              Explore Our Products
              <ArrowRightIcon
                size={20}
                className="btn__icon"
                aria-hidden="true"
              />
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="btn btn--ghost-light"
            >
              Contact Us for Trade
            </motion.button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="hero__stats"
          >
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt className="hero__stat-label">{s.label}</dt>
                <dd className="hero__stat-value">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.24 }}
        >
          <HeroPortfolio />
        </motion.div>
      </div>

      <CommodityMarquee />
    </section>
  );
}
