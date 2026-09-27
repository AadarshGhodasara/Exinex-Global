import { motion, useReducedMotion } from "framer-motion";
import { products } from "../../data/products";
import "./CommodityMarquee.css";

export function CommodityMarquee() {
  const reduce = useReducedMotion();
  const items = [...products, ...products];

  return (
    <div className="marquee" aria-label="Commodities we trade">
      <motion.ul
        className="marquee__track"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {items.map((p, i) => (
          <li
            key={`${p.slug}-${i}`}
            className="marquee__item"
            aria-hidden={i >= products.length}
          >
            {p.name}
            <span className="marquee__dot" aria-hidden="true" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
