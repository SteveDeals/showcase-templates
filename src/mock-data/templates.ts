import { Template, TemplateList } from "../types/template";

export const templates: Template[] = [
  {
    id: "modern-shop",
    name: "Modern Shop",
    description: "A clean, modern e-commerce template with minimalist design",
    previewImage: "/templates/modern-shop/preview.jpg",
    category: "ecommerce",
    features: [
      "Responsive design",
      "Product quick view",
      "Advanced filters",
      "Cart preview",
    ],
  },
  // More templates will be added
];

export const templateList: TemplateList = {
  templates,
  categories: ["ecommerce", "blog", "portfolio", "business"],
};
