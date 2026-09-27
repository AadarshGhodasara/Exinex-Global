export type ProductCategoryId = 'scrap' | 'raw' | 'products';

export interface ProductCategory {
  id: ProductCategoryId;
  name: string;
  description: string;
  items: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategoryId;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  specifications: ProductSpec[];
  applications: string[];
  grades: string[];
  packaging: string;
  moq: string;
  hsCode: string;
}