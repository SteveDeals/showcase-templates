import React from 'react';
import { Template } from '../types/template';
import { Product } from '../types/product';
import { SimpleStore } from './templates/SimpleStore';
import { ModernStore } from './templates/modern-store';
import { MinimalBoutique } from './templates/minimal-boutique';
import { AussieStore } from './templates/AussieStore';

interface TemplatePreviewProps {
  template: Template;
  sampleProducts: Product[];
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  template,
  sampleProducts,
}) => {
  // Create a wrapper that scales down the template
  const PreviewWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="absolute inset-0 transform scale-[0.25] origin-top-left w-[400%] h-[400%]">
        <div className="w-full h-full overflow-auto pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );

  // Render the appropriate template based on ID
  const renderTemplate = () => {
    const templateProps = {
      products: sampleProducts,
      isPreview: true, // Add this flag to handle preview mode
    };

    switch (template.id) {
      case 'simple-store':
        return (
          <PreviewWrapper>
            <SimpleStore {...templateProps} />
          </PreviewWrapper>
        );
      case 'modern-store':
        return (
          <PreviewWrapper>
            <ModernStore {...templateProps} />
          </PreviewWrapper>
        );
      case 'minimal-boutique':
        return (
          <PreviewWrapper>
            <MinimalBoutique {...templateProps} />
          </PreviewWrapper>
        );
      case 'aussie-store':
        return (
          <PreviewWrapper>
            <AussieStore {...templateProps} />
          </PreviewWrapper>
        );
      default:
        return (
          <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Preview not available</span>
          </div>
        );
    }
  };

  return renderTemplate();
};
