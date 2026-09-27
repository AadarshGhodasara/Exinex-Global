import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { ProductShowcase } from "../../components/Product/ProductShowcase";
import { About } from "../../components/About/About";
import { Metrics } from "../../components/Metrics/Metrics";
import { scrollToSection } from "../../utils/scroll";

export function Home() {
  console.log("TEST");

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSection(hash.slice(1)), 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Hero />
      <ProductShowcase />
      <About />
      <Metrics />
    </>
  );
}
