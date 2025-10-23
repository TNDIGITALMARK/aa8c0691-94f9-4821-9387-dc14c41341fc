'use client';

import React from 'react';
import { ColorOption } from '@/lib/types';
import { Check } from 'lucide-react';

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
}

export function ColorSelector({ colors, selectedColor, onColorChange }: ColorSelectorProps) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => {
        const isSelected = selectedColor.id === color.id;

        return (
          <button
            key={color.id}
            onClick={() => onColorChange(color)}
            className={`
              relative w-10 h-10 rounded-full border-2 transition-all duration-200
              ${isSelected ? 'border-blue-500 scale-110' : 'border-gray-300 hover:border-gray-400'}
            `}
            style={{ backgroundColor: color.hex }}
            aria-label={`Select ${color.name}`}
            title={color.name}
          >
            {isSelected && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={3} />
              </div>
            )}
            {/* White border needs special handling */}
            {color.hex === '#FFFFFF' && (
              <div className="absolute inset-0 rounded-full border border-gray-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}
