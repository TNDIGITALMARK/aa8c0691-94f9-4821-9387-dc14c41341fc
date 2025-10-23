// Coque Site - Type Definitions

export type ColorOption = {
  id: string;
  name: string;
  hex: string;
  image: string;
};

export type PhoneModel = 'iPhone 15' | 'iPhone 14' | 'Samsung Galaxy S24' | 'Google Pixel 8';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: ColorOption[];
  compatibility: PhoneModel[];
  features: string[];
  images: string[];
  category: 'case' | 'accessory';
  rating: number;
  reviewCount: number;
};

export type Review = {
  id: string;
  author: string;
  verified: boolean;
  rating: number;
  text: string;
  date: string;
};

export type CartItem = {
  product: Product;
  selectedColor: ColorOption;
  quantity: number;
};
