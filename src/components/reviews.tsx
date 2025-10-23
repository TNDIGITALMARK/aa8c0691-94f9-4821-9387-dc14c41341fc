import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '@/lib/types';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < review.rating ? 'fill-blue-500 text-blue-500' : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-900 font-medium mb-1">{review.text}</p>

            {/* Author */}
            <p className="text-xs text-gray-500">
              {review.author} {review.verified && <span className="text-blue-500">✓ Verified</span>}
            </p>
          </div>
        ))}
      </div>

      {/* View All Reviews Button */}
      <button className="mt-4 w-full py-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
        View All Reviews
      </button>
    </div>
  );
}
