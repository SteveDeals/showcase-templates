'use client';

import React from 'react';
import { SimpleStore } from '../../../../components/templates/SimpleStore';
import { products } from '../../../../mock-data/products';

export default function TemplatePreview() {
  return <SimpleStore products={products} isPreview={true} />;
}
