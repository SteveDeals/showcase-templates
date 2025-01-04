import React, { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import { categories } from '../../mock-data/products';
import { Product, ProductCategory } from '../../types/product';

interface SimpleStoreProps {
  products: Product[];
}

export const SimpleStore: React.FC<SimpleStoreProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-[#513B35] text-white text-center py-2 px-4">
        <p className="text-sm">
          Sale of the Year Starts Now: Up to 70% off.{' '}
          <button className="underline hover:no-underline">Shop Now</button>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Primary Nav */}
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium border-b-2 border-black"
              >
                Women
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Men
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
            </div>

            {/* Logo */}
            <div className="text-2xl font-bold">SIMPLE STORE</div>

            {/* Right Nav */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium"
            >
              What&apos;s New
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium"
            >
              Best Sellers
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium"
            >
              Clothing
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium"
            >
              Shoes
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium"
            >
              Accessories
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              Sale
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <span>/</span>
          <span className="text-gray-900">Women</span>
        </div>

        {/* Title and Count */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-normal text-gray-900">
            Women's Clothing & Accessories
          </h1>
          <p className="text-sm text-gray-500">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-2 py-1 text-sm ${
                        selectedCategory === category
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Color
                </h3>
                {/* Add color filters here */}
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
                {/* Add size filters here */}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>
    </div>
  );
};
