'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wide">
            COQUE SITE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-400 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium hover:text-blue-400 transition-colors relative group"
            >
              Shop
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/accessories"
              className="text-sm font-medium hover:text-blue-400 transition-colors relative group"
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/accessories"
              className="text-sm font-medium hover:text-blue-400 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Cart Icon */}
          <button
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/product"
              className="block py-2 text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/accessories"
              className="block py-2 text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/accessories"
              className="block py-2 text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
