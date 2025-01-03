export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  category: "ecommerce" | "blog" | "portfolio" | "business";
  features: string[];
}

export interface TemplateList {
  templates: Template[];
  categories: string[];
}
