"use client";

import React, { useState } from "react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className='bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className='text-3xl font-serif text-gray-900 mb-4'>
            Subscribe to Our Newsletter
          </h2>
          <p className='text-gray-600 mb-8'>
            Stay updated with our latest products, trends, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <div className='flex gap-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                required
              />
              <button
                type='submit'
                className='px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wider rounded-md hover:bg-gray-800 transition-colors'>
                Subscribe
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className='mt-2 text-sm text-green-600'>
                Thank you for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className='mt-2 text-sm text-red-600'>
                Something went wrong. Please try again.
              </p>
            )}

            {/* Privacy Notice */}
            <p className='mt-4 text-xs text-gray-500'>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
