import { Template } from "../types/template";

export const templateList = {
  templates: [
    {
      id: "simple-store",
      name: "Simple Store",
      description:
        "A clean, modern e-commerce template with product grid and filtering",
      category: "modern",
      previewImage: "/products/BanksPinkLongSleeve_600x.png",
      productDisplay: {
        gridStyle: "Responsive Grid",
        imageDisplay: {
          aspectRatio: "1:1",
          hoverEffect: "Scale",
          galleryStyle: "Thumbnails",
        },
        infoDisplay: {
          pricing: "With Currency",
          variantSelection: "Dropdown",
          stockDisplay: "Numeric",
        },
      },
      layout: {
        productGrid: "3 Columns",
        filtering: "Category Based",
        sorting: "Default",
        pagination: "Load More",
      },
    },
    {
      id: "minimal-boutique",
      name: "Minimal Boutique",
      description: "Ultra-clean design focusing on product photography",
      category: "minimal",
      previewImage: "/products/BKBD-158__Mocha_050__14588.1627608871.png",
      productDisplay: {
        gridStyle: "Masonry",
        imageDisplay: {
          aspectRatio: "4:5",
          hoverEffect: "Fade",
          galleryStyle: "Slider",
        },
        infoDisplay: {
          pricing: "Clean",
          variantSelection: "Buttons",
          stockDisplay: "Text",
        },
      },
      layout: {
        productGrid: "2 Columns",
        filtering: "Tags",
        sorting: "Price",
        pagination: "Infinite Scroll",
      },
    },
    {
      id: "modern-store",
      name: "Modern Store",
      description:
        "A sleek, modern e-commerce design with image-focused grid and elegant hover effects",
      category: "modern",
      previewImage: "/products/BanksPinkLongSleeve_600x.png",
      productDisplay: {
        gridStyle: "Masonry Grid",
        imageDisplay: {
          aspectRatio: "4:5",
          hoverEffect: "Scale with Info Overlay",
          galleryStyle: "Thumbnails with Quick View",
        },
        infoDisplay: {
          pricing: "Clean with Currency",
          variantSelection: "Button Group",
          stockDisplay: "Text",
        },
      },
      layout: {
        productGrid: "4 Columns",
        filtering: "Top Navigation",
        sorting: "Dropdown Menu",
        pagination: "Load More",
      },
    },
  ],
  categories: ["modern", "minimal", "classic", "bold"] as const,
};
