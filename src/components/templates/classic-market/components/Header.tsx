"use client";

import React, { useState } from "react";

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Header: React.FC<Props> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-white shadow-sm'>
      {/* Top Bar */}
      <div className='bg-gray-900 text-white py-2'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm'>
          Free shipping on orders over $50 | Easy returns
        </div>
      </div>

      {/* Main Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-16 flex items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-serif text-gray-900'>Classic Market</h1>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <div className='relative'>
              <button
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium ${
                  isMegaMenuOpen ? "text-gray-900" : "text-gray-500"
                } hover:text-gray-900`}>
                Categories
              </button>

              {/* Mega Menu */}
              {isMegaMenuOpen && (
                <div
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                  className='absolute top-full left-0 w-screen max-w-screen-sm bg-white shadow-lg border-t'>
                  <div className='grid grid-cols-2 gap-y-4 gap-x-8 p-8'>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          onSelectCategory(category);
                          setIsMegaMenuOpen(false);
                        }}
                        className={`text-left text-sm ${
                          selectedCategory === category
                            ? "text-gray-900 font-medium"
                            : "text-gray-500"
                        } hover:text-gray-900 capitalize`}>
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900'>
              New Arrivals
            </a>
            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900'>
              Sale
            </a>
            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900'>
              About
            </a>
          </nav>

          {/* Right Section */}
          <div className='flex items-center space-x-4'>
            {/* Search */}
            <button className='p-2 text-gray-400 hover:text-gray-500'>
              <svg
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>

            {/* Account */}
            <button className='p-2 text-gray-400 hover:text-gray-500'>
              <svg
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </button>

            {/* Cart */}
            <button className='p-2 text-gray-400 hover:text-gray-500'>
              <svg
                className='w-5 h-5'
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
      </div>
    </header>
  );
};
