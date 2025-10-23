import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Coque Site</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium phone protection with style. Quality cases designed for modern devices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Information</h4>
            <p className="text-sm text-gray-400 mb-3">Email</p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm rounded-md border border-gray-800 focus:border-blue-400 focus:outline-none transition-colors"
              />
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-900 hover:bg-blue-500 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-900 hover:bg-blue-500 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-900 hover:bg-blue-500 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© 2024 Coque Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
