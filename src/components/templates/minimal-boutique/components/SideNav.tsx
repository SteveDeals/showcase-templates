"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const SideNav: React.FC<Props> = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity'
          onClick={onClose}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='h-full flex flex-col'>
          {/* Header */}
          <div className='h-16 flex items-center justify-between px-4 border-b'>
            <h2 className='text-sm font-medium text-gray-900'>Categories</h2>
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

          {/* Categories */}
          <div className='flex-1 px-2 py-4 space-y-1'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`w-full px-3 py-2 text-sm text-left transition-colors rounded-md
                  ${
                    selectedCategory === category
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className='p-4 border-t'>
            <div className='space-y-4'>
              <a
                href='#'
                className='block text-sm text-gray-600 hover:text-gray-900'>
                About
              </a>
              <a
                href='#'
                className='block text-sm text-gray-600 hover:text-gray-900'>
                Contact
              </a>
              <a
                href='#'
                className='block text-sm text-gray-600 hover:text-gray-900'>
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
