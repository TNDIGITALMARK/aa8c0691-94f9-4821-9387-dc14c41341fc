import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
        {/* Product Image */}
        <div className="relative aspect-[3/4] bg-gray-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-base font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        </div>

        {/* Quick Add Button (appears on hover) */}
        <div className="px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
            Quick Add
          </button>
        </div>
      </div>
    </Link>
  );
}
