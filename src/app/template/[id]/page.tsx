'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { templateList } from '../../../mock-data/templates';
import { ModernStore } from '../../../components/templates/modern-store';
import { MinimalBoutique } from '../../../components/templates/minimal-boutique';
import { SimpleStore } from '../../../components/templates/SimpleStore';
import { AussieStore } from '../../../components/templates/AussieStore';
import { products } from '../../../mock-data/products';

export default function TemplatePreview() {
  const router = useRouter();
  const params = useParams();
  const template = templateList.templates.find((t) => t.id === params.id);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Template not found
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to templates
          </button>
        </div>
      </div>
    );
  }

  // Show the appropriate template based on the ID
  switch (template.id) {
    case 'modern-store':
      return <ModernStore products={products} />;
    case 'minimal-boutique':
      return <MinimalBoutique products={products} />;
    case 'simple-store':
      return <SimpleStore products={products} />;
    case 'aussie-store':
      return <AussieStore products={products} />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Template preview coming soon
            </h1>
            <button
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-800"
            >
              Return to templates
            </button>
          </div>
        </div>
      );
  }
}
