"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../../types/product";

interface Props {
  product: Product;
  onClose: () => void;
}

export const ProductView: React.FC<Props> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className='fixed inset-0 z-50'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Content */}
      <div className='absolute inset-y-0 right-0 w-full md:w-[640px] bg-white shadow-xl'>
        <div className='h-full flex flex-col'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 border-b'>
            <h2 className='text-lg font-light tracking-wide text-gray-900'>
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className='p-2 text-gray-400 hover:text-gray-500'>
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Image Gallery */}
          <div className='relative flex-1 bg-[#f8f8f8]'>
            <div className='absolute inset-0'>
              <Image
                src={product.images[currentImageIndex].url}
                alt={product.images[currentImageIndex].alt}
                fill
                className='object-contain'
              />
            </div>

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className='absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-900/50 hover:text-gray-900 transition-colors'>
                  <svg
                    className='w-8 h-8'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-900/50 hover:text-gray-900 transition-colors'>
                  <svg
                    className='w-8 h-8'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-sm'>
              {currentImageIndex + 1} / {product.images.length}
            </div>
          </div>

          {/* Product Info */}
          <div className='p-6 border-t'>
            <div className='space-y-4'>
              <div className='flex items-baseline justify-between'>
                <h3 className='text-2xl font-light text-gray-900'>
                  ${product.price.toFixed(2)}
                </h3>
                <p className='text-sm text-gray-500'>In Stock</p>
              </div>

              <p className='text-gray-600'>{product.description}</p>

              {product.variants && (
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-gray-900'>Options</p>
                  <div className='flex flex-wrap gap-2'>
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        className='px-4 py-2 border text-sm hover:border-gray-900 transition-colors'>
                        {variant.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button className='w-full py-4 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-colors'>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
