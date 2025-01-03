"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../../../../types/product";

interface Props {
  products: Product[];
}

export const ProductSlider: React.FC<Props> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative h-[500px] bg-gray-100 overflow-hidden'>
      {/* Slides */}
      <div
        className='h-full transition-transform duration-500 ease-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div
          className='absolute top-0 left-0 h-full'
          style={{ width: `${products.length * 100}%` }}>
          {products.map((product, index) => {
            const primaryImage =
              product.images.find((img) => img.isPrimary) || product.images[0];

            return (
              <div
                key={product.id}
                className='absolute top-0 h-full'
                style={{ left: `${index * 100}%`, width: "100%" }}>
                <div className='relative h-full'>
                  {/* Background Image (blurred) */}
                  <div className='absolute inset-0'>
                    <Image
                      src={primaryImage.url}
                      alt=''
                      fill
                      className='object-cover filter blur-lg opacity-50'
                    />
                  </div>

                  {/* Main Content */}
                  <div className='relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                      {/* Text Content */}
                      <div className='text-center md:text-left'>
                        <h2 className='text-4xl font-serif text-gray-900 mb-4'>
                          {product.name}
                        </h2>
                        <p className='text-lg text-gray-600 mb-8'>
                          {product.description}
                        </p>
                        <p className='text-2xl font-light text-gray-900 mb-8'>
                          ${product.price.toFixed(2)}
                        </p>
                        <button className='bg-gray-900 text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors'>
                          SHOP NOW
                        </button>
                      </div>

                      {/* Product Image */}
                      <div className='relative h-[400px]'>
                        <Image
                          src={primaryImage.url}
                          alt={primaryImage.alt}
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
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
        onClick={nextSlide}
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

      {/* Dots */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
