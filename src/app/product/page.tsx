'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ColorSelector } from '@/components/color-selector';
import { HERO_PRODUCT, COLORS } from '@/lib/data';
import { ColorOption } from '@/lib/types';
import { Check, Shield, Smartphone, Zap } from 'lucide-react';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLORS.ocean_blue);
  const [selectedModel, setSelectedModel] = useState(HERO_PRODUCT.compatibility[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src={selectedColor.image}
                  alt={HERO_PRODUCT.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2">
                {HERO_PRODUCT.images.map((image, index) => (
                  <button
                    key={index}
                    className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors"
                    onClick={() => {
                      const color = HERO_PRODUCT.colors[index];
                      if (color) setSelectedColor(color);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Product view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{HERO_PRODUCT.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {HERO_PRODUCT.rating} ({HERO_PRODUCT.reviewCount} reviews)
                </span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-8">${HERO_PRODUCT.price.toFixed(2)}</div>

              {/* Color Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Color: {selectedColor.name}
                </label>
                <ColorSelector
                  colors={HERO_PRODUCT.colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>

              {/* Phone Model Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {HERO_PRODUCT.compatibility.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
                Add to Cart - ${(HERO_PRODUCT.price * quantity).toFixed(2)}
              </button>

              <button className="w-full py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-900 text-lg font-semibold rounded-md transition-colors">
                Buy Now
              </button>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {HERO_PRODUCT.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Protected</div>
                    <div className="text-xs text-gray-600">12ft Drop</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Wireless</div>
                    <div className="text-xs text-gray-600">Charging Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
