'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { ColorSelector } from '@/components/color-selector';
import { Reviews } from '@/components/reviews';
import { HERO_PRODUCT, RECOMMENDED_PRODUCTS, REVIEWS, COLORS } from '@/lib/data';
import { ColorOption } from '@/lib/types';

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLORS.ocean_blue);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Elevate Your Device
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Premium cases designed for style & protection
              </p>
              <Link
                href="/product"
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Add to Cart
              </Link>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={selectedColor.image}
                  alt={HERO_PRODUCT.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Color Selector Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-lg shadow-lg">
                <ColorSelector
                  colors={HERO_PRODUCT.colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Reviews */}
              <div>
                <Reviews reviews={REVIEWS} />
              </div>

              {/* Excellence in Product CTA */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Stay Connected.</h2>
                <p className="text-blue-50 mb-6">Get exclusive offers.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="px-6 py-3 bg-white text-blue-500 font-medium rounded-md hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RECOMMENDED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
