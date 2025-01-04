import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../types/product';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {products.map((product) => {
          const primaryImage =
            product.images.find((img) => img.isPrimary) || product.images[0];
          const secondaryImage = product.images[1] || primaryImage;

          return (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                <Image
                  src={
                    hoveredProduct === product.id
                      ? secondaryImage.url
                      : primaryImage.url
                  }
                  alt={primaryImage.alt}
                  fill
                  className="object-cover object-center transition-opacity duration-300"
                />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-sm text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl mx-4 relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={selectedProduct.images[0].url}
                    alt={selectedProduct.images[0].alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl text-gray-900">
                    {selectedProduct.name}
                  </h2>
                  <p className="mt-2 text-lg text-gray-900">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>
                    <div className="mt-2 flex gap-2">
                      {/* Add color options here */}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {/* Add size options here */}
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>

                <div className="prose prose-sm text-gray-500">
                  <p>{selectedProduct.description}</p>
                  {selectedProduct.features && (
                    <ul className="mt-4">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
