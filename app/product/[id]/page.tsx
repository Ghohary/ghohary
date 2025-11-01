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
          <Link href="/couture" className="text-amber-700 hover:underline">← Back to Couture</Link>
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

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-neutral-200">
        <div className="w-full px-8">
          <div className="relative text-center py-6 flex items-center justify-between">
            <Link href="/couture" className="text-black hover:text-amber-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.3em] font-serif text-black hover:text-amber-700 transition-colors">
              GHOHARY
            </Link>
            
            <button className="text-black hover:text-amber-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20 flex min-h-screen">
        {/* Left Side - Images (50%) */}
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
                  alt={`${product.name} - View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 text-white text-xs tracking-wider font-light bg-black/30 px-2 py-1 rounded">
                  {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Details (50%) */}
        <div className="w-1/2 bg-white border-l border-neutral-200">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto p-12">
            <div className="space-y-6 max-w-md">
              {/* Product Name */}
              <div>
                <h1 className="text-3xl font-light text-black mb-2">{product.name}</h1>
                <p className="text-sm text-neutral-600 font-light">{selectedColor}</p>
              </div>

              {/* Reference */}
              <div>
                <p className="text-xs text-neutral-600 font-light tracking-wider">Reference: REF{product.id}</p>
              </div>

              {/* Price */}
              <div>
                <p className="text-2xl font-normal text-black">
                  {product.price ? `${product.price} AED` : 'Price Upon Request'}
                </p>
              </div>

              {/* Other Colors */}
              <div>
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-4">OTHER COLORS</p>
                <div className="flex gap-3">
                  {colors.slice(0, 5).map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-black'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                      style={{backgroundColor: color.toLowerCase() === 'black' ? '#000' : color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase() === 'brown' ? '#8B4513' : '#ccc'}}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              {sizes.length > 0 && (
                <div>
                  <label className="block text-xs font-normal tracking-[0.2em] text-black mb-3">SIZE</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-neutral-300 text-black font-light text-sm bg-white cursor-pointer hover:border-black transition-all"
                  >
                    <option value="">Select an option</option>
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Add to Bag Button */}
              <button className="w-full px-8 py-4 bg-black text-white text-sm font-light tracking-wider hover:bg-neutral-900 transition-all mt-6">
                ADD TO BAG
              </button>

              {/* Terms */}
              <div className="text-xs text-neutral-600 font-light">
                By placing your order you agree to the <button className="underline hover:text-black">terms of service</button>
              </div>

              {/* Delivery Info */}
              <div className="text-xs text-neutral-700 font-light">
                Delivery same day or next day, subject to availability.
              </div>

              {/* Product Description */}
              <div className="pt-8 border-t border-neutral-200 space-y-4">
                <p className="text-sm font-light text-black leading-relaxed">
                  {product.name} epitomizes refined elegance and timeless beauty. Meticulously handcrafted with the finest materials, this exquisite piece showcases exceptional artistry and attention to detail. Each element is carefully considered to create a luxury accessory that transcends trends.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <p className="text-xs font-light text-neutral-700 leading-relaxed">
                  <span className="block">• Main composition: Premium materials</span>
                  <span className="block">• Lining: 100% Silk</span>
                  <span className="block">• Removable chain strap</span>
                  <span className="block">• Adjustable and removable leather strap</span>
                  <span className="block">• Interior slip pocket</span>
                  <span className="block">• Dust bag included</span>
                  <span className="block">• Made in: Dubai</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
