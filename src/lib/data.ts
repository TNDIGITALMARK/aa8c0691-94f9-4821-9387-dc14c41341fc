// Coque Site - Mock Data

import { Product, Review, ColorOption } from './types';

export const COLORS: Record<string, ColorOption> = {
  midnight_black: {
    id: 'midnight_black',
    name: 'Midnight Black',
    hex: '#000000',
    image: '/generated/phone-case-black.png',
  },
  ocean_blue: {
    id: 'ocean_blue',
    name: 'Ocean Blue',
    hex: '#2B9BF4',
    image: '/generated/phone-case-blue.png',
  },
  pearl_white: {
    id: 'pearl_white',
    name: 'Pearl White',
    hex: '#FFFFFF',
    image: '/generated/phone-case-white.png',
  },
  soft_pink: {
    id: 'soft_pink',
    name: 'Soft Pink',
    hex: '#FFB6C1',
    image: '/generated/phone-case-pink.png',
  },
  sage_green: {
    id: 'sage_green',
    name: 'Sage Green',
    hex: '#9CAF88',
    image: '/generated/phone-case-green.png',
  },
};

export const HERO_PRODUCT: Product = {
  id: 'premium_silicone_case_pro',
  name: 'UltraGuard Pro Silicone Case',
  price: 24.99,
  description: 'Premium cases designed for style & protection',
  colors: [
    COLORS.ocean_blue,
    COLORS.midnight_black,
    COLORS.pearl_white,
    COLORS.soft_pink,
    COLORS.sage_green,
  ],
  compatibility: ['iPhone 15', 'iPhone 14', 'Samsung Galaxy S24', 'Google Pixel 8'],
  features: [
    'Drop protection up to 12ft',
    'Wireless charging compatible',
    'Anti-slip grip technology',
    'Precision-cut openings',
    'Raised bezels for screen protection',
  ],
  images: [
    '/generated/phone-case-blue.png',
    '/generated/phone-case-black.png',
    '/generated/phone-case-white.png',
    '/generated/phone-case-pink.png',
    '/generated/phone-case-green.png',
  ],
  category: 'case',
  rating: 4.8,
  reviewCount: 1247,
};

export const ACCESSORIES: Product[] = [
  {
    id: 'tempered_glass_screen_protector',
    name: 'Tempered Glass Screen Protector',
    price: 12.99,
    description: 'Crystal clear 9H hardness protection',
    colors: [],
    compatibility: ['iPhone 15', 'iPhone 14', 'Samsung Galaxy S24', 'Google Pixel 8'],
    features: ['9H hardness', 'Crystal clear', 'Easy installation', 'Bubble-free'],
    images: ['/generated/phone-case-black.png'],
    category: 'accessory',
    rating: 4.6,
    reviewCount: 892,
  },
  {
    id: 'wireless_charging_pad_15w',
    name: 'Wireless Charging Pad 15W',
    price: 29.99,
    description: 'Fast wireless charging for all devices',
    colors: [],
    compatibility: ['iPhone 15', 'iPhone 14', 'Samsung Galaxy S24', 'Google Pixel 8'],
    features: ['15W fast charging', 'LED indicator', 'Non-slip surface', 'Case-friendly'],
    images: ['/generated/phone-case-black.png'],
    category: 'accessory',
    rating: 4.7,
    reviewCount: 654,
  },
  {
    id: 'phone_ring_holder_magnetic',
    name: 'Magnetic Phone Ring Holder',
    price: 8.99,
    description: 'Secure grip and kickstand functionality',
    colors: [],
    compatibility: ['iPhone 15', 'iPhone 14', 'Samsung Galaxy S24', 'Google Pixel 8'],
    features: ['360° rotation', 'Strong magnetic', 'Kickstand function', 'Universal fit'],
    images: ['/generated/phone-case-black.png'],
    category: 'accessory',
    rating: 4.5,
    reviewCount: 423,
  },
  {
    id: 'car_mount_magnetic',
    name: 'Magnetic Car Mount',
    price: 19.99,
    description: 'Secure mounting for safe driving',
    colors: [],
    compatibility: ['iPhone 15', 'iPhone 14', 'Samsung Galaxy S24', 'Google Pixel 8'],
    features: ['Strong magnet', 'Adjustable angle', 'Dashboard mount', 'One-hand operation'],
    images: ['/generated/phone-case-black.png'],
    category: 'accessory',
    rating: 4.6,
    reviewCount: 534,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'sarah_m_verified',
    author: 'Sarah M.',
    verified: true,
    rating: 5,
    text: 'Perfect fit and great protection',
    date: '2024-01-15',
  },
  {
    id: 'mike_k_verified',
    author: 'Mike K.',
    verified: true,
    rating: 5,
    text: 'Love the blue color and feel',
    date: '2024-01-12',
  },
  {
    id: 'emma_r_verified',
    author: 'Emma R.',
    verified: true,
    rating: 5,
    text: 'Dropped my phone multiple times, no damage',
    date: '2024-01-08',
  },
];

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    ...HERO_PRODUCT,
    id: 'recommended_1',
    name: 'Essential Liquid Silicone Case',
    price: 19.99,
    colors: [COLORS.midnight_black],
    images: ['/generated/phone-case-black.png'],
  },
  {
    ...HERO_PRODUCT,
    id: 'recommended_2',
    name: 'Premium Original Case',
    price: 24.99,
    colors: [COLORS.ocean_blue],
    images: ['/generated/phone-case-blue.png'],
  },
  {
    ...HERO_PRODUCT,
    id: 'recommended_3',
    name: 'Designer Elegant Case',
    price: 29.99,
    colors: [COLORS.soft_pink],
    images: ['/generated/phone-case-pink.png'],
  },
  {
    ...HERO_PRODUCT,
    id: 'recommended_4',
    name: 'Nature Inspired Case',
    price: 22.99,
    colors: [COLORS.sage_green],
    images: ['/generated/phone-case-green.png'],
  },
];
