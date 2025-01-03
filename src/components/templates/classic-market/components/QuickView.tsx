"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../../types/product";

interface Props {
  product: Product;
  onClose: () => void;
}

export const QuickView: React.FC<Props> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    product.variants?.[0]?.value || null
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative min-h-screen flex items-center justify-center p-4'>
        <div className='relative bg-white w-full max-w-4xl rounded-lg shadow-xl'>
          <div className='absolute top-4 right-4'>
            <button
              onClick={onClose}
              className='p-2 text-gray-400 hover:text-gray-500 transition-colors'>
              <svg
                className='w-6 h-6'
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

          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Image Gallery */}
            <div className='relative aspect-square bg-gray-100'>
              <Image
                src={product.images[currentImageIndex].url}
                alt={product.images[currentImageIndex].alt}
                fill
                className='object-contain'
              />

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-gray-900 rounded-full shadow-lg hover:bg-white transition-colors'>
                    <svg
                      className='w-6 h-6'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-gray-900 rounded-full shadow-lg hover:bg-white transition-colors'>
                    <svg
                      className='w-6 h-6'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
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
            <div className='p-8'>
              <div className='space-y-6'>
                <div>
                  <h2 className='text-2xl font-serif text-gray-900'>
                    {product.name}
                  </h2>
                  <p className='mt-2 text-3xl font-light text-gray-900'>
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className='prose prose-sm text-gray-600'>
                  <p>{product.description}</p>
                </div>

                {product.variants && (
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-sm font-medium text-gray-900'>
                        Options
                      </h3>
                      <p className='text-sm text-gray-500'>Required</p>
                    </div>

                    <div className='grid grid-cols-4 gap-2'>
                      {product.variants.map((variant) => (
                        <button
                          key={variant.value}
                          onClick={() => setSelectedVariant(variant.value)}
                          className={`px-4 py-3 text-sm border rounded-md transition-colors ${
                            selectedVariant === variant.value
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 text-gray-900 hover:border-gray-900"
                          }`}>
                          {variant.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className='pt-6 border-t border-gray-200'>
                  <button className='w-full bg-gray-900 text-white px-6 py-4 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors'>
                    ADD TO CART
                  </button>
                </div>

                {/* Additional Info */}
                <div className='pt-6 border-t border-gray-200'>
                  <div className='space-y-4'>
                    <div className='flex items-start'>
                      <svg
                        className='w-5 h-5 text-gray-400 mt-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M20 12H4'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h4 className='text-sm font-medium text-gray-900'>
                          Free Shipping
                        </h4>
                        <p className='mt-1 text-sm text-gray-500'>
                          On orders over $50
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <svg
                        className='w-5 h-5 text-gray-400 mt-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h4 className='text-sm font-medium text-gray-900'>
                          Easy Returns
                        </h4>
                        <p className='mt-1 text-sm text-gray-500'>
                          30-day return policy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
