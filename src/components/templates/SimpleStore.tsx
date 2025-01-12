import React, { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import { categories } from '../../mock-data/products';
import { Product, ProductCategory } from '../../types/product';

interface SimpleStoreProps {
  products: Product[];
  isPreview?: boolean;
}

export const SimpleStore: React.FC<SimpleStoreProps> = ({
  products,
  isPreview,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const renderLink = (href: string, children: React.ReactNode) => {
    if (isPreview) {
      return <div className="cursor-pointer">{children}</div>;
    }
    return <a href={href}>{children}</a>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-[#513B35] text-white text-center py-2 px-4">
        <p className="text-sm">
          Sale of the Year Starts Now: Up to 70% off.{' '}
          {renderLink(
            '#',
            <span className="underline hover:no-underline">Shop Now</span>
          )}
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Primary Nav */}
            <div className="flex space-x-8">
              {renderLink(
                '#',
                <span className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium border-b-2 border-black">
                  Women
                </span>
              )}
              {renderLink(
                '#',
                <span className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Men
                </span>
              )}
              {renderLink(
                '#',
                <span className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </span>
              )}
            </div>

            {/* Logo */}
            <div className="text-2xl font-bold">SIMPLE STORE</div>

            {/* Right Nav */}
            <div className="flex space-x-8">
              {renderLink(
                '#',
                <span className="text-gray-500 hover:text-gray-900 text-sm font-medium">
                  What&apos;s New
                </span>
              )}
              {renderLink(
                '#',
                <span className="text-gray-500 hover:text-gray-900 text-sm font-medium">
                  Best Sellers
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          {renderLink('#', <span className="hover:text-gray-900">Home</span>)}
          <span>/</span>
          <span className="text-gray-900">Women</span>
        </div>

        {/* Title and Count */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-normal text-gray-900">
            Women&apos;s Clothing & Accessories
          </h1>
          <p className="text-sm text-gray-500">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
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
