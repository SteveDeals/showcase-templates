"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import { SideNav } from "./components/SideNav";
import { ProductView } from "./components/ProductView";

interface Props {
  products: Product[];
}

export const MinimalBoutique: React.FC<Props> = ({ products }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className='min-h-screen bg-[#f8f8f8]'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-30 bg-[#f8f8f8]/80 backdrop-blur-sm'>
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-16 flex items-center justify-between'>
            {/* Menu Button */}
            <button
              onClick={() => setIsNavOpen(true)}
              className='p-2 text-gray-600 hover:text-gray-900'>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            {/* Logo */}
            <h1 className='text-xl font-light tracking-wider text-gray-900'>
              MINIMAL BOUTIQUE
            </h1>

            {/* Cart (placeholder) */}
            <button className='p-2 text-gray-600 hover:text-gray-900'>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <SideNav
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setIsNavOpen(false);
        }}
      />

      {/* Main Content */}
      <main className='pt-16'>
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200'>
            {filteredProducts.map((product) => {
              const primaryImage =
                product.images.find((img) => img.isPrimary) ||
                product.images[0];

              return (
                <div
                  key={product.id}
                  className='group relative bg-[#f8f8f8] cursor-pointer'
                  onClick={() => setSelectedProduct(product)}>
                  {/* Product Image */}
                  <div className='aspect-[3/4] relative overflow-hidden'>
                    <Image
                      src={primaryImage.url}
                      alt={primaryImage.alt}
                      fill
                      className='object-cover object-center transform group-hover:scale-105 transition-transform duration-700'
                    />

                    {/* Hover Info */}
                    <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                      <h3 className='text-white text-lg font-light tracking-wide'>
                        {product.name}
                      </h3>
                      <p className='text-white/90 font-light mt-1'>
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Product View */}
      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
