import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronRightIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  ShipIcon,
} from "lucide-react";
import { ProductCard } from "../../components/Product/ProductCard";
import { categories, products } from "../../data/products";
import "./ProductDetail.css";

const ease = [0.23, 1, 0.32, 1] as const;

const tradeSupport = [
  {
    Icon: ClipboardCheckIcon,
    title: "Pre-shipment inspection",
    text: "Every lot is checked and photographed before loading.",
  },
  {
    Icon: ShipIcon,
    title: "Flexible Incoterms",
    text: "FOB, CFR and CIF shipping available on request.",
  },
  {
    Icon: FileTextIcon,
    title: "Full export documentation",
    text: "Invoices, packing lists and certificates handled end to end.",
  },
];

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="detail-empty">
        <div className="detail-empty__inner">
          <h1>Product not found</h1>
          <p>This product may have moved or is no longer listed.</p>
          <Link to="/#products" className="btn btn--navy">
            <ArrowLeftIcon size={16} aria-hidden="true" />
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const related = (
    sameCategory.length
      ? sameCategory
      : products.filter((p) => p.slug !== product.slug)
  ).slice(0, 3);
  const quoteHref = `mailto:info@exinexglobal.com?subject=${encodeURIComponent(`Quote request – ${product.name}`)}`;

  const keyFacts = [
    { label: "Category", value: category?.name ?? "" },
    { label: "Minimum order", value: product.moq },
    { label: "Packaging", value: product.packaging },
    { label: "HS code (indicative)", value: product.hsCode },
  ];

  return (
    <div className="detail">
      <div className="page-container">
        <nav aria-label="Breadcrumb" className="detail__breadcrumb">
          <ol className="detail__crumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRightIcon size={16} />
            </li>
            <li>
              <Link to="/#products">Products</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRightIcon size={16} />
            </li>
            <li>{category?.name}</li>
            <li aria-hidden="true">
              <ChevronRightIcon size={16} />
            </li>
            <li className="detail__crumb-current" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div key={product.slug} className="detail__hero">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease }}
            className="detail__media"
          >
            <img src={product.image} alt={product.name} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.06 }}
            className="detail__info"
          >
            <p className="detail__category">{category?.name}</p>
            <h1 className="detail__title">{product.name}</h1>
            <p className="detail__desc">{product.description}</p>

            <dl className="detail__facts">
              {keyFacts.map((f) => (
                <div key={f.label} className="detail__fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="detail__actions">
              <a href={quoteHref} className="btn btn--navy">
                Request a Quote
              </a>
              <Link to="/#contact" className="btn btn--outline">
                Talk to our trade team
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="detail__specs-wrap">
          <section aria-labelledby="specs-heading">
            <h2 id="specs-heading" className="detail__h2">
              Specifications
            </h2>
            <dl className="detail__specs">
              {product.specifications.map((s) => (
                <div key={s.label} className="detail__spec">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="detail__aside">
            <section aria-labelledby="apps-heading">
              <h2 id="apps-heading" className="detail__h2">
                Applications
              </h2>
              <ul className="detail__apps">
                {product.applications.map((a) => (
                  <li key={a} className="check-item">
                    <span className="check-icon">
                      <CheckIcon size={14} aria-hidden="true" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="grades-heading">
              <h2 id="grades-heading" className="detail__h3">
                Available grades
              </h2>
              <ul className="chip-list detail__grades">
                {product.grades.map((g) => (
                  <li key={g} className="chip chip--md">
                    {g}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>

      <section className="detail__support" aria-label="Trade support">
        <div className="page-container detail__support-grid">
          {tradeSupport.map(({ Icon, title, text }) => (
            <div key={title} className="detail__support-item">
              <Icon
                size={24}
                className="detail__support-icon"
                aria-hidden="true"
              />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="page-container detail__related"
        aria-labelledby="related-heading"
      >
        <div className="detail__related-head">
          <h2
            id="related-heading"
            className="section-title detail__related-title"
          >
            {sameCategory.length
              ? `More ${category?.name.toLowerCase()}`
              : "Explore more products"}
          </h2>
          <Link to="/#products" className="detail__related-link">
            View all products
          </Link>
        </div>
        <ul className="product-grid detail__related-grid">
          {related.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
