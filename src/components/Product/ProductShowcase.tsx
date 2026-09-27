import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { categories, products } from "../../data/products";
import type { ProductCategoryId } from "../../types/product";
import "./ProductShowcase.css";

type Filter = "all" | ProductCategoryId;

const ease = [0.23, 1, 0.32, 1] as const;

export function ProductShowcase() {
  const [filter, setFilter] = useState<Filter>("all");
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam && categories.some((c) => c.id === categoryParam)) {
      setFilter(categoryParam as Filter);
    }
  }, [categoryParam]);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All products", count: products.length },
    ...categories.map((c) => ({
      id: c.id as Filter,
      label: c.name,
      count: products.filter((p) => p.category === c.id).length,
    })),
  ];

  const visible =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  const activeCategory = categories.find((c) => c.id === filter);

  return (
    <section id="products" className="showcase">
      <div className="page-container">
        <div className="showcase__header">
          <div>
            <h2 className="section-title showcase__title">What we trade</h2>
            <p className="showcase__lead">
              Three product families, sourced from trusted partners and shipped
              in full container loads to recyclers, processors and distributors
              worldwide.
            </p>
          </div>
          <p className="showcase__note" aria-live="polite">
            {activeCategory
              ? activeCategory.description
              : "Select a category to narrow the range."}
          </p>
        </div>

        <div className="showcase__tabs-wrap">
          <div
            role="tablist"
            aria-label="Product categories"
            className="showcase__tabs"
          >
            {filters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`showcase__tab${active ? " is-active" : ""}`}
                >
                  {f.label}
                  <span className="showcase__tab-count">{f.count}</span>
                  {active && (
                    <motion.span
                      layoutId="product-tab-indicator"
                      className="showcase__indicator"
                      transition={{ duration: 0.25, ease }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <motion.ul layout className="product-grid showcase__grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((product, i) => (
              <motion.li
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.25,
                  ease,
                  delay: Math.min(i * 0.04, 0.2),
                }}
              >
                <ProductCard product={product} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
