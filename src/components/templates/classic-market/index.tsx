"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import { Header } from "./components/Header";
import { ProductSlider } from "./components/ProductSlider";
import { QuickView } from "./components/QuickView";
import { Newsletter } from "./components/Newsletter";

interface Props {
  products: Product[];
}

export const ClassicMarket: React.FC<Props> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const featuredProducts = products.slice(0, 6); // First 6 products as featured

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Hero Slider */}
      <section className='pt-16'>
        <ProductSlider products={featuredProducts} />
      </section>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Category Title */}
        <div className='mb-8'>
          <h2 className='text-2xl font-serif text-gray-900 text-center capitalize'>
            {selectedCategory === "all" ? "All Products" : selectedCategory}
          </h2>
          <div className='w-24 h-1 bg-gray-900 mx-auto mt-2' />
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => {
            const primaryImage =
              product.images.find((img) => img.isPrimary) || product.images[0];

            return (
              <div key={product.id} className='group relative'>
                {/* Product Image */}
                <div className='aspect-[4/5] relative overflow-hidden bg-gray-100'>
                  <Image
                    src={primaryImage.url}
                    alt={primaryImage.alt}
                    fill
                    className='object-cover object-center'
                  />

                  {/* Quick View Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium
                      text-gray-900 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-200'>
                    Quick View
                  </button>
                </div>

                {/* Product Info */}
                <div className='mt-4 text-center'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    {product.name}
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-lg font-medium mb-4'>About Us</h3>
              <p className='text-gray-400 text-sm'>
                Classic Market brings you the finest selection of products with
                a traditional shopping experience.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-4'>Customer Service</h3>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-4'>Quick Links</h3>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Search</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-4'>Connect</h3>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
            © 2024 Classic Market. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
