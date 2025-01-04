'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { templateList } from '../mock-data/templates';
import { products } from '../mock-data/products';
import { TemplatePreview } from '../components/TemplatePreview';

type Category = (typeof templateList.categories)[number];

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredTemplates = templateList.templates.filter(
    (template) =>
      selectedCategory === 'all' || template.category === selectedCategory
  );

  // Take just 4 sample products for the preview
  const sampleProducts = products.slice(0, 4);

  const handleTemplateClick = (templateId: string) => {
    router.push(`/template/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Template
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our collection of professionally designed e-commerce
            templates. Each template is fully customizable and optimized for
            performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {templateList.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${
                    category === selectedCategory
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  ${category === 'all' ? 'rounded-l-md' : ''}
                  ${
                    category ===
                    templateList.categories[templateList.categories.length - 1]
                      ? 'rounded-r-md'
                      : ''
                  }
                  border border-gray-200
                  focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateClick(template.id)}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Preview */}
              <div className="relative">
                <TemplatePreview
                  template={template}
                  sampleProducts={sampleProducts}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {template.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900">Display</h4>
                    <ul className="mt-2 space-y-1 text-gray-500">
                      <li>{template.productDisplay.gridStyle}</li>
                      <li>
                        {template.productDisplay.imageDisplay.aspectRatio}
                      </li>
                      <li>
                        {template.productDisplay.imageDisplay.hoverEffect}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Layout</h4>
                    <ul className="mt-2 space-y-1 text-gray-500">
                      <li>{template.layout.productGrid}</li>
                      <li>{template.layout.filtering}</li>
                      <li>{template.layout.pagination}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
