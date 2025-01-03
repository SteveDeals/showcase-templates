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
  category: string;
  variants?: {
    name: string;
    value: string;
  }[];
}

export type ProductCategory = "clothing" | "accessories" | "all";
