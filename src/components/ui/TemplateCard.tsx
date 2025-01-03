import React from "react";
import Image from "next/image";
import { Template } from "../../types/template";

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onClick,
}) => {
  return (
    <div
      className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer'
      onClick={onClick}>
      {/* Preview Image */}
      <div className='aspect-video relative'>
        {template.previewImage ? (
          <Image
            src={template.previewImage}
            alt={template.name}
            fill
            className='object-cover'
          />
        ) : (
          <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
            <span className='text-gray-400'>Preview coming soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          {template.name}
        </h3>
        <p className='text-gray-600 mb-4'>{template.description}</p>

        {/* Display Features */}
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium text-gray-900'>Display:</span>
            <span className='text-sm text-gray-600'>
              {template.productDisplay.gridStyle}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium text-gray-900'>Layout:</span>
            <span className='text-sm text-gray-600'>
              {template.layout.productGrid}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
