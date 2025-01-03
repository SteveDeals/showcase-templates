import React from "react";

interface TemplatePlaceholderProps {
  name: string;
  className?: string;
}

export function TemplatePlaceholder({
  name,
  className = "",
}: TemplatePlaceholderProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 ${className}`}>
      <span className='text-blue-800 font-medium'>{name}</span>
    </div>
  );
}
