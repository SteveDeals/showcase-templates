export interface ProductImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
  category: ProductCategory;
  variants?: {
    name: string;
    value: string;
  }[];
  features?: string[];
  colors?: string[];
  sizes?: string[];
}

export type ProductCategory =
  | 'all'
  | 'new-arrivals'
  | 'clothing'
  | 'shoes'
  | 'accessories'
  | 'sale';
