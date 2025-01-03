import React, { useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { products, categories } from "../../mock-data/products";
import { ProductCategory } from "../../types/product";

export const SimpleStore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Simple Store</h1>
        </div>
      </header>

      <main>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Category filters */}
          <div className='flex gap-4 mb-8'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Products */}
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
};
