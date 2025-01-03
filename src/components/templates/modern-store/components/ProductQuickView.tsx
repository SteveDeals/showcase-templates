"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../../../types/product";

interface Props {
  product: Product;
  onClose: () => void;
}

export const ProductQuickView: React.FC<Props> = ({ product, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage = product.images[selectedImageIndex];

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/50 transition-opacity'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative min-h-screen flex items-center justify-center p-4'>
        <div className='relative bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden'>
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10'>
            <span className='sr-only'>Close</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div className='flex flex-col md:flex-row'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 bg-gray-100'>
              {/* Main Image */}
              <div className='relative aspect-square'>
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  fill
                  className='object-cover object-center'
                />
              </div>

              {/* Thumbnail Navigation */}
              {product.images.length > 1 && (
                <div className='p-4 flex gap-2 overflow-x-auto'>
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden
                        ${
                          selectedImageIndex === index
                            ? "ring-2 ring-blue-500"
                            : "ring-1 ring-gray-200"
                        }`}>
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className='object-cover object-center'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className='w-full md:w-1/2 p-6 md:p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                {product.name}
              </h2>
              <p className='text-gray-600 mb-6'>{product.description}</p>

              <div className='space-y-6'>
                {/* Price */}
                <div>
                  <p className='text-3xl font-bold text-gray-900'>
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Variants if available */}
                {product.variants && (
                  <div>
                    <h3 className='text-sm font-medium text-gray-900 mb-2'>
                      Options
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {product.variants.map((variant, index) => (
                        <button
                          key={index}
                          className='px-3 py-1 border rounded-full text-sm hover:border-gray-400'>
                          {variant.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart Button */}
                <button className='w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
