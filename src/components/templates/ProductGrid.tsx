import React from "react";
import Image from "next/image";
import { Product } from "../../types/product";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => {
        const primaryImage =
          product.images.find((img) => img.isPrimary) || product.images[0];

        return (
          <div key={product.id} className='group'>
            <div className='aspect-square relative overflow-hidden rounded-lg bg-gray-100'>
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
              />

              {/* Quick view button */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20'>
                <button className='bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors'>
                  Quick view
                </button>
              </div>
            </div>

            <div className='mt-4 space-y-1'>
              <h3 className='text-lg font-medium text-gray-900'>
                {product.name}
              </h3>
              <p className='text-sm text-gray-500'>{product.description}</p>
              <p className='text-lg font-semibold text-gray-900'>
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
