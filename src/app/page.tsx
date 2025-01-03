"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TemplateCard } from "../components/ui/TemplateCard";
import { templateList } from "../mock-data/templates";
import { TemplateCategory } from "../types/template";

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] =
    useState<TemplateCategory>("all");
  const { templates, categories } = templateList;

  const filteredTemplates =
    selectedCategory === "all"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  const handleTemplateClick = (templateId: string) => {
    router.push(`/template/${templateId}`);
  };

  return (
    <main className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Choose Your Template
        </h1>
        <p className='text-xl text-gray-600'>
          Select from our collection of beautiful, responsive templates
        </p>
      </div>

      {/* Category Filters */}
      <div className='max-w-7xl mx-auto mb-8'>
        <div className='flex flex-wrap justify-center gap-2'>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}>
            All Templates
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as TemplateCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => handleTemplateClick(template.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
