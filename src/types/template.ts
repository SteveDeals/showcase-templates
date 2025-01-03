// Product-related types that mirror what we'll get from the API
export interface ProductDisplay {
  gridStyle: string;
  imageDisplay: {
    aspectRatio: string;
    hoverEffect: string;
    galleryStyle: string;
  };
  infoDisplay: {
    pricing: string;
    variantSelection: string;
    stockDisplay: string;
  };
}

export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  category: string;
  productDisplay: ProductDisplay;
  layout: {
    productGrid: string;
    filtering: string;
    sorting: string;
    pagination: string;
  };
}

export type TemplateCategory =
  | "modern"
  | "minimal"
  | "classic"
  | "bold"
  | "all";
