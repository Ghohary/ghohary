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
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [expanded, setExpanded] = useState(false);

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

  // Default placeholder images if no images provided
  const defaultImages = Array(3).fill(null).map((_, i) => 
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5f5f5' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23ccc' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E${i + 1}%3C/text%3E%3C/svg%3E`
  );

  const images = product.images && product.images.length > 0 ? product.images : defaultImages;

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
                onMouseEnter={() => setSelectedImage(idx)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={img} 
                    alt={`${product.name} - View ${idx + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-black text-xs tracking-wider font-light">
                  {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Details (50%) STICKY */}
        <div className="w-1/2 bg-white border-l border-neutral-200">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto p-12">
            <div className="space-y-8">
              {/* Product Name */}
              <div>
                <h1 className="text-3xl font-light text-black mb-6">{product.name}</h1>
              </div>

              {/* Price & Status */}
              <div>
                <p className="text-2xl font-normal text-black mb-4">
                  {product.price ? `${product.price} AED` : 'Price Upon Request'}
                </p>
                <div className="inline-block px-4 py-2 bg-neutral-100 text-xs font-light tracking-widest">
                  {product.status === 'available' && '✓ AVAILABLE'}
                  {product.status === 'preorder' && 'PRE-ORDER'}
                  {product.status === 'appointment' && 'APPOINTMENT ONLY'}
                  {product.status === 'hidden-price' && 'INQUIRE FOR PRICE'}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <p className="text-xs font-normal tracking-[0.3em] text-black mb-4">SIZES</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {product.sizes.split(',').map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size.trim())}
                      className={`px-4 py-3 text-xs font-light border-2 transition-all ${
                        selectedSize === size.trim()
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-300 text-black hover:border-black'
                      }`}
                    >
                      {size.trim()}
                    </button>
                  ))}
                </div>
                <button className="text-xs text-amber-700 hover:text-amber-800 font-light tracking-wider">
                  SIZE GUIDE
                </button>
              </div>

              {/* Color Selection */}
              <div>
                <p className="text-xs font-normal tracking-[0.3em] text-black mb-4">COLORS</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.split(',').map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color.trim())}
                      className={`px-6 py-2 text-xs font-light border-2 transition-all ${
                        selectedColor === color.trim()
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-300 text-black hover:border-black'
                      }`}
                    >
                      {color.trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-6">
                <button className="w-full px-8 py-4 bg-black text-white text-sm font-light tracking-wider hover:bg-neutral-900 transition-all rounded">
                  ADD TO CART
                </button>
                <button className="w-full px-8 py-4 border-2 border-black text-black text-sm font-light tracking-wider hover:bg-gray-50 transition-all rounded">
                  INQUIRE
                </button>
              </div>

              {/* Details */}
              <div className="space-y-6 pt-8 border-t border-neutral-200">
                <div>
                  <button 
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center justify-between w-full py-4 border-b border-neutral-200 hover:opacity-60 transition-opacity"
                  >
                    <p className="text-xs font-normal tracking-[0.2em] text-black">DETAILS</p>
                    <span className="text-lg text-black">{expanded ? '−' : '+'}</span>
                  </button>
                  {expanded && (
                    <div className="pt-4 space-y-3 text-sm font-light text-neutral-700 leading-relaxed">
                      <p>This exquisite couture piece represents the pinnacle of craftsmanship and luxury design. Meticulously handcrafted with the finest materials and attention to detail.</p>
                      <ul className="space-y-2 pt-4">
                        <li>• Bespoke couture collection</li>
                        <li>• Hand-selected premium materials</li>
                        <li>• Artisan crafted</li>
                        <li>• Made in Dubai</li>
                        <li>• Limited availability</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-xs font-normal tracking-[0.2em] text-black mb-2">COLLECTION</p>
                    <p className="text-sm font-light text-neutral-600">Spring Summer 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-normal tracking-[0.2em] text-black mb-2">INVENTORY</p>
                    <p className="text-sm font-light text-neutral-600">{product.inventory} pieces available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
