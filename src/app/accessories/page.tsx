'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { HERO_PRODUCT, ACCESSORIES, COLORS } from '@/lib/data';
import { ColorOption } from '@/lib/types';
import { ShoppingCart, Check } from 'lucide-react';

export default function AccessoriesPage() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLORS.ocean_blue);

  const calculateBundleDiscount = () => {
    const total = HERO_PRODUCT.price + ACCESSORIES.reduce((sum, acc) => sum + acc.price, 0);
    const discount = total * 0.15; // 15% bundle discount
    return { total, discount, final: total - discount };
  };

  const bundle = calculateBundleDiscount();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Product Quick View */}
        <div className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Quick Shop & Accessories</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Main Product */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={selectedColor.image}
                      alt={HERO_PRODUCT.name}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{HERO_PRODUCT.name}</h2>
                    <p className="text-2xl font-bold text-blue-500 mb-4">${HERO_PRODUCT.price.toFixed(2)}</p>
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Quick Color Selection */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">Available Colors:</p>
                  <div className="flex gap-2">
                    {HERO_PRODUCT.colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor.id === color.id ? 'border-blue-500 scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bundle Offer */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Complete Protection Bundle</h3>
                <p className="text-blue-50 mb-6">Get everything you need and save 15%</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Original Price:</span>
                    <span className="font-semibold">${bundle.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-blue-50">
                    <span>Bundle Discount (15%):</span>
                    <span className="font-semibold">-${bundle.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t border-blue-400">
                    <span>Bundle Price:</span>
                    <span>${bundle.final.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                  Add Complete Bundle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Accessories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACCESSORIES.map((accessory) => (
                <div key={accessory.id} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all">
                  <div className="relative aspect-square bg-gray-50">
                    <Image
                      src={accessory.images[0]}
                      alt={accessory.name}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{accessory.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{accessory.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">${accessory.price.toFixed(2)}</span>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Coque Site?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Carefully crafted with the finest materials for maximum protection and style
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over $50 with express delivery options</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">30-day money-back guarantee on all products, no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
