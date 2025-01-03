"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import { ProductQuickView } from "./components/ProductQuickView";

interface Props {
  products: Product[];
}

export const ModernStore: React.FC<Props> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <h1 className='text-2xl font-bold text-gray-900'>Modern Store</h1>

            {/* Category Navigation */}
            <div className='flex space-x-4'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Product Grid */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
          {filteredProducts.map((product) => {
            const primaryImage =
              product.images.find((img) => img.isPrimary) || product.images[0];

            return (
              <div
                key={product.id}
                className='group relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden cursor-pointer'
                onClick={() => setSelectedProduct(product)}>
                {/* Product Image */}
                <Image
                  src={primaryImage.url}
                  alt={primaryImage.alt}
                  fill
                  className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                    <h3 className='text-white font-medium'>{product.name}</h3>
                    <p className='text-white/80 text-sm mt-1'>
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
