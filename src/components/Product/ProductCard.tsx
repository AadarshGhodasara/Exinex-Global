import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { categories } from "../../data/products";
import type { Product } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__img"
        />
        <span className="product-card__badge">{category?.name}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__summary">{product.summary}</p>

        <ul className="chip-list product-card__chips">
          {product.highlights.map((h) => (
            <li key={h} className="chip">
              {h}
            </li>
          ))}
        </ul>

        <div className="product-card__footer">
          <span className="product-card__hs">HS {product.hsCode}</span>
          <span className="product-card__more">
            View details
            <ArrowRightIcon
              size={16}
              className="product-card__arrow"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
