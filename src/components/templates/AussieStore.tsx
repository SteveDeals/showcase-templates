import React, { useState } from 'react';
import { Product } from '../../types/product';
import Image from 'next/image';

interface AussieStoreProps {
  products: Product[];
  isPreview?: boolean;
}

type SortOption =
  | 'newest'
  | 'az'
  | 'za'
  | 'price-asc'
  | 'price-desc'
  | 'popular';
type ViewOption = 16 | 32 | 64 | 128;

export const AussieStore: React.FC<AussieStoreProps> = ({
  products,
  isPreview,
}) => {
  const [selectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [itemsPerPage, setItemsPerPage] = useState<ViewOption>(32);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 1000,
  });

  const renderLink = (href: string, children: React.ReactNode) => {
    if (isPreview) {
      return <div className="cursor-pointer">{children}</div>;
    }
    return <a href={href}>{children}</a>;
  };

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'all' || product.category === selectedCategory;
    const sizeMatch =
      selectedSizes.length === 0 ||
      product.variants?.some(
        (v) => v.name === 'size' && selectedSizes.includes(v.value)
      );
    const priceMatch =
      product.price >= priceRange.min && product.price <= priceRange.max;
    return categoryMatch && sizeMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'az':
        return a.name.localeCompare(b.name);
      case 'za':
        return b.name.localeCompare(a.name);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#FF5733] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <span>Annandale</span>
          <div className="flex items-center space-x-4">
            {renderLink(
              '#',
              <span className="hover:text-gray-200">Gift certificates</span>
            )}
            {renderLink(
              '#',
              <span className="hover:text-gray-200">Become a seller</span>
            )}
            <span>(A$)</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/products/Aussie_market_logo_new.jpeg"
                alt="Aussie Markets"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF5733]">
                  <svg
                    className="w-5 h-5"
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
              </div>
            </div>

            {/* Right Nav */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-[#FF5733]">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-[#FF5733]">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <div className="relative">
                <button className="flex items-center text-gray-600 hover:text-[#FF5733]">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-[#FF5733] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Nav */}
        <div className="bg-[#FF5733]">
          <div className="max-w-7xl mx-auto px-4">
            <button className="text-white px-4 py-3 flex items-center space-x-2">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span>Categories</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              {renderLink(
                '#',
                <span className="text-[#FF5733] hover:text-[#E64A2E]">
                  Home
                </span>
              )}
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              {renderLink(
                '#',
                <span className="text-[#FF5733] hover:text-[#E64A2E]">
                  Women&apos;s Fashion
                </span>
              )}
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">Women&apos;s Dresses</span>
            </li>
          </ol>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h2 className="text-lg font-medium mb-4">Subcategories</h2>
                <div className="space-y-2">
                  {renderLink(
                    '#',
                    <span className="block text-[#FF5733] hover:text-[#E64A2E]">
                      Women&apos;s Casual
                    </span>
                  )}
                  {renderLink(
                    '#',
                    <span className="block text-[#FF5733] hover:text-[#E64A2E]">
                      Women&apos;s Formal
                    </span>
                  )}
                  {renderLink(
                    '#',
                    <span className="block text-[#FF5733] hover:text-[#E64A2E]">
                      Women&apos;s Mini
                    </span>
                  )}
                  {renderLink(
                    '#',
                    <span className="block text-[#FF5733] hover:text-[#E64A2E]">
                      Women&apos;s Midi
                    </span>
                  )}
                  {renderLink(
                    '#',
                    <span className="block text-[#FF5733] hover:text-[#E64A2E]">
                      Women&apos;s Maxi
                    </span>
                  )}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Availability
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#FF5733]"
                  />
                  <span className="ml-2 text-sm text-gray-600">In stock</span>
                </label>
              </div>

              {/* Size Filter */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
                <div className="space-y-2">
                  {['10', '12', '14', '16', '18', '20'].map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#FF5733]"
                        checked={selectedSizes.includes(size)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSizes([...selectedSizes, size]);
                          } else {
                            setSelectedSizes(
                              selectedSizes.filter((s) => s !== size)
                            );
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-gray-600">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: Number(e.target.value),
                      })
                    }
                    className="w-full accent-[#FF5733]"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>A${priceRange.min}</span>
                    <span>A${priceRange.max}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Description */}
            <div className="mb-8">
              <h1 className="text-2xl font-medium mb-4">
                Women&apos;s Dresses
              </h1>
              <p className="text-gray-600">
                Dress to impress with our stunning collection of women&apos;s
                dresses. Whether you&apos;re looking for a show-stopping evening
                gown or a casual day dress, we have a wide range of styles to
                suit every occasion.
              </p>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-sm border-gray-300 rounded-md focus:ring-[#FF5733] focus:border-[#FF5733]"
                >
                  <option value="newest">Newest Items First</option>
                  <option value="az">from A to Z</option>
                  <option value="za">from Z to A</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="popular">Popular First</option>
                </select>

                <select
                  value={itemsPerPage}
                  onChange={(e) =>
                    setItemsPerPage(Number(e.target.value) as ViewOption)
                  }
                  className="text-sm border-gray-300 rounded-md focus:ring-[#FF5733] focus:border-[#FF5733]"
                >
                  <option value={16}>16 Per Page</option>
                  <option value={32}>32 Per Page</option>
                  <option value={64}>64 Per Page</option>
                  <option value={128}>128 Per Page</option>
                </select>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {sortedProducts.length} Products
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#FF5733]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="p-2 text-[#FF5733]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.slice(0, itemsPerPage).map((product) => (
                <div
                  key={product.id}
                  className="group border rounded-lg overflow-hidden"
                >
                  <div className="aspect-[3/4] relative bg-gray-100">
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      A${product.price.toFixed(2)}
                    </p>
                    <button className="mt-2 w-full bg-[#FF5733] text-white py-2 text-sm hover:bg-[#E64A2E] transition-colors rounded">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
