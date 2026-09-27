import { useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BoxesIcon,
  MailIcon,
  PackageIcon,
  RecycleIcon,
} from "lucide-react";
import { categories, products } from "../../data/products";
import { scrollToSection } from "../../utils/scroll";
import type { ProductCategoryId } from "../../types/product";
import "./HeroPortfolio.css";

const categoryIcons: Record<ProductCategoryId, typeof RecycleIcon> = {
  scrap: RecycleIcon,
  raw: BoxesIcon,
  products: PackageIcon,
};

export function HeroPortfolio() {
  const navigate = useNavigate();

  const openCategory = (id: ProductCategoryId) => {
    navigate(`?category=${id}`, { replace: true });
    scrollToSection("products");
  };

  return (
    <div className="portfolio">
      <div className="portfolio__head">
        <h2 className="portfolio__title">Our trade portfolio</h2>
        <span className="portfolio__count">
          {products.length} product lines
        </span>
      </div>

      <ul className="portfolio__list">
        {categories.map((c) => {
          const Icon = categoryIcons[c.id];
          const count = products.filter((p) => p.category === c.id).length;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => openCategory(c.id)}
                className="portfolio__row"
              >
                <span className="portfolio__icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="portfolio__body">
                  <span className="portfolio__name-row">
                    <span className="portfolio__name">{c.name}</span>
                    <span className="portfolio__num">{count}</span>
                  </span>
                  <span className="portfolio__tags">
                    {c.items.map((item) => (
                      <span key={item} className="portfolio__tag">
                        {item}
                      </span>
                    ))}
                  </span>
                </span>
                <ArrowRightIcon
                  size={16}
                  className="portfolio__arrow"
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <a
        href="mailto:info@exinexglobal.com?subject=Trade%20enquiry"
        className="portfolio__cta"
      >
        <MailIcon
          size={16}
          className="portfolio__cta-mail"
          aria-hidden="true"
        />
        <span className="portfolio__cta-text">
          Buying or selling in bulk? <strong>info@exinexglobal.com</strong>
        </span>
        <ArrowUpRightIcon
          size={16}
          className="portfolio__cta-arrow"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
