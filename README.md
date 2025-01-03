# E-commerce Template System

## Adding a New Template

### 1. Template Location

All templates should be added in `src/components/templates/[your-template-name]`

### 2. Required Files

```
src/components/templates/[your-template-name]/
├── index.tsx         # Main template component
├── components/       # Template-specific components
└── styles/          # Template-specific styles (if any)
```

### 3. Register Your Template

Add your template information in `src/mock-data/templates.ts`:

```typescript
{
  id: "your-template-id",
  name: "Your Template Name",
  description: "Brief description of your template",
  category: "modern" | "minimal" | "classic" | "bold",
  previewImage: "/path/to/preview-image.jpg",
  productDisplay: {
    gridStyle: "How products are arranged",
    imageDisplay: {
      aspectRatio: "Image dimensions (e.g., '1:1')",
      hoverEffect: "What happens on hover",
      galleryStyle: "How multiple images are shown"
    },
    infoDisplay: {
      pricing: "How prices are shown",
      variantSelection: "How variants are selected",
      stockDisplay: "How stock is displayed"
    }
  },
  layout: {
    productGrid: "Grid layout style",
    filtering: "How filtering works",
    sorting: "Sorting mechanism",
    pagination: "Pagination style"
  }
}
```

### 4. Template Requirements

Your template must:

- Use the shared product data structure from `src/types/product.ts`
- Support all product features (multiple images, variants, etc.)
- Be responsive (mobile, tablet, desktop)
- Follow accessibility guidelines
- Use Tailwind CSS for styling

### 5. Example Implementation

```typescript
// src/components/templates/your-template/index.tsx
import React from 'react';
import { Product } from '../../../types/product';

interface Props {
  products: Product[];
  // Add any template-specific props
}

export const YourTemplate: React.FC<Props> = ({ products }) => {
  return (
    // Your template implementation
  );
};
```

### 6. Testing Your Template

1. Add your template to the showcase
2. Test with different product configurations
3. Test responsive behavior
4. Verify all features work (filtering, sorting, etc.)

### 7. Shared Resources

- Product types: `src/types/product.ts`
- Common UI components: `src/components/ui/`
- Mock data: `src/mock-data/products.ts`

### 8. Best Practices

- Keep template-specific code in your template directory
- Use TypeScript for type safety
- Follow the existing naming conventions
- Document any unique features or requirements
- Test on multiple devices and browsers
