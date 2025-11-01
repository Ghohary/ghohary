/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string;
  colors: string;
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  category: string;
  inventory: number;
  images?: string[];
}

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      const products = JSON.parse(saved);
      const found = products.find((p: Product) => p.id === productId);
      if (found) {
        setProduct(found);
        if (found.sizes) {
          setSelectedSize(found.sizes.split(',')[0].trim());
        }
        if (found.colors) {
          setSelectedColor(found.colors.split(',')[0].trim());
        }
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-neutral-600 font-light mb-4">Product not found</p>
          <Link href="/couture" className="text-amber-700 hover:underline">Back to Couture</Link>
        </div>
      </div>
    );
  }

  const defaultImages = Array(3).fill(null).map((_, i) => 
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5f5f5' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23ccc' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E${i + 1}%3C/text%3E%3C/svg%3E`
  );

  const images = product.images && product.images.length > 0 ? product.images : defaultImages;
  const sizes = product.sizes ? product.sizes.split(',').map(s => s.trim()) : [];
  const colors = product.colors ? product.colors.split(',').map(c => c.trim()) : [];

  const getColorValue = (color: string): string => {
    const colorMap: { [key: string]: string } = {
      'black': '#000',
      'white': '#fff',
      'brown': '#8B4513',
      'gold': '#FFD700',
      'silver': '#C0C0C0',
    };
    return colorMap[color.toLowerCase()] || '#ccc';
  };

  const formatPrice = (price: string): string => {
    return `${price},00 AED`;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-neutral-200">
        <div className="w-full px-8">
          <div className="relative text-center py-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="text-black hover:text-amber-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-black hover:text-amber-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.3em] font-serif text-black hover:text-amber-700 transition-colors">
              GHOHARY
            </Link>
            
            <div className="flex items-center gap-6">
              <button className="text-black hover:text-amber-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="text-black hover:text-amber-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-black hover:text-amber-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="text-black hover:text-amber-700 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center gap-12 pb-5 text-sm tracking-[0.25em] font-light text-black">
            <Link href="/couture" className="hover:text-amber-700 transition-colors duration-300">COUTURE</Link>
            <Link href="/ready-to-wear" className="hover:text-amber-700 transition-colors duration-300">READY TO WEAR</Link>
            <Link href="/bridal" className="hover:text-amber-700 transition-colors duration-300">BRIDAL</Link>
            <Link href="/accessories" className="hover:text-amber-700 transition-colors duration-300">ACCESSORIES</Link>
            <Link href="/maison" className="hover:text-amber-700 transition-colors duration-300">MAISON</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 flex min-h-screen">
        <div className="w-1/2 bg-stone-100 overflow-y-auto">
          <div className="space-y-0">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative bg-white h-screen flex items-center justify-center overflow-hidden"
                onMouseEnter={() => setSelectedImageIndex(idx)}
              >
                <img 
                  src={img} 
                  alt={`${product.name} View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 text-white text-xs tracking-wider font-light bg-black/30 px-2 py-1 rounded">
                  {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 bg-white border-l border-neutral-200">
          <div className="sticky top-32 h-[calc(100vh-128px)] overflow-y-auto p-12">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-light text-black mb-3">{product.name}</h1>
                <p className="text-lg text-neutral-700 font-light">{selectedColor}</p>
              </div>

              <div className="pb-6 border-b border-neutral-200">
                <p className="text-xs text-neutral-600 font-light tracking-wider">Reference: REF{product.id}</p>
              </div>

              <div className="pb-6 border-b border-neutral-200">
                <p className="text-xl font-normal text-black">
                  {product.price ? formatPrice(product.price) : 'Price Upon Request'}
                </p>
              </div>

              <div className="pb-6 border-b border-neutral-200">
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-4">OTHER COLORS</p>
                <div className="flex gap-4">
                  {colors.slice(0, 5).map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-black scale-110'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {sizes.length > 0 && (
                <div className="pb-6 border-b border-neutral-200">
                  <label className="block text-xs font-normal tracking-[0.2em] text-black mb-4">SIZE</label>
                  <div className="grid grid-cols-4 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-4 text-sm font-light border-2 transition-all ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-300 text-black hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button className="text-xs text-amber-700 hover:text-amber-800 font-light tracking-wider mt-4">
                    Size Guide
                  </button>
                </div>
              )}

              <button className="w-full px-8 py-5 bg-black text-white text-sm font-light tracking-wider hover:bg-neutral-900 transition-all mb-3">
                ADD TO BAG
              </button>

              <button className="w-full px-8 py-5 border-2 border-black text-black text-sm font-light tracking-wider hover:bg-gray-50 transition-all">
                CONTACT US
              </button>

              <div className="space-y-3 pt-6 border-t border-neutral-200">
                <button className="block text-xs text-black hover:text-amber-700 font-light tracking-wider underline">
                  SHIPPING RETURNS
                </button>
                <button className="block text-xs text-black hover:text-amber-700 font-light tracking-wider underline">
                  CUSTOMER CARE
                </button>
                <button className="block text-xs text-black hover:text-amber-700 font-light tracking-wider underline">
                  FIND A STORE
                </button>
              </div>

              <div className="text-xs text-neutral-600 font-light pt-6 border-t border-neutral-200">
                By placing your order you agree to the <button className="underline hover:text-black">terms of service</button>
              </div>

              <div className="text-xs text-neutral-700 font-light bg-stone-50 p-4 rounded">
                <p className="font-normal mb-2">DELIVERY RETURNS</p>
                <p>Same day or next day delivery available in Dubai, subject to availability. Free returns within 30 days.</p>
              </div>

              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <p className="text-sm font-light text-black leading-relaxed">
                  {product.name} epitomizes refined elegance and timeless beauty. Meticulously handcrafted with the finest materials, this exquisite piece showcases exceptional artistry and attention to detail.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200">
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-3">FEATURES DETAILS</p>
                <p className="text-xs font-light text-neutral-700 leading-relaxed space-y-2">
                  <span className="block">• Main composition: Premium lambskin</span>
                  <span className="block">• Lining: Goatskin and lambskin</span>
                  <span className="block">• Removable chain strap</span>
                  <span className="block">• Adjustable leather shoulder strap</span>
                  <span className="block">• Interior slip pocket</span>
                  <span className="block">• Dust bag included</span>
                  <span className="block">• Gold-finish metal charms</span>
                  <span className="block">• Care: Dry clean only</span>
                  <span className="block">• Made in: Dubai</span>
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-3">CARE INSTRUCTIONS</p>
                <p className="text-xs font-light text-neutral-700 leading-relaxed">
                  To maintain the beauty of your piece, we recommend professional cleaning. Store in the provided dust bag when not in use. Avoid prolonged exposure to direct sunlight and moisture.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-2">COLLECTION</p>
                <p className="text-sm font-light text-neutral-600">Spring Summer 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
