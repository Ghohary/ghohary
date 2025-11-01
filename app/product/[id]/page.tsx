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

      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {product.images && product.images.length > 0 ? (
                <div className="relative bg-stone-100 rounded overflow-hidden" style={{aspectRatio: '3/4'}}>
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative bg-stone-100 rounded overflow-hidden flex items-center justify-center" style={{aspectRatio: '3/4'}}>
                  <span className="text-6xl text-stone-300">1</span>
                </div>
              )}

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative bg-stone-100 rounded overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-black' : 'border-transparent'
                      }`}
                      style={{aspectRatio: '1'}}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8 pt-12">
              <div>
                <h1 className="text-5xl font-light text-black mb-4">{product.name}</h1>
                <p className="text-2xl font-normal text-black">
                  {product.price ? `${product.price} AED` : 'Price Upon Request'}
                </p>
              </div>

              <div>
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-3">STATUS</p>
                <div className="inline-block px-4 py-2 bg-neutral-100 text-sm font-light tracking-wide">
                  {product.status === 'available' && '✓ Available'}
                  {product.status === 'preorder' && 'Pre-Order'}
                  {product.status === 'appointment' && 'Appointment Only'}
                  {product.status === 'hidden-price' && 'Hidden Price'}
                </div>
              </div>

              <div>
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-4">SELECT SIZE</p>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.split(',').map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size.trim())}
                      className={`px-4 py-3 text-sm font-light border-2 transition-all ${
                        selectedSize === size.trim()
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-300 text-black hover:border-black'
                      }`}
                    >
                      {size.trim()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-normal tracking-[0.2em] text-black mb-4">SELECT COLOR</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.split(',').map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color.trim())}
                      className={`px-6 py-2 text-sm font-light border-2 transition-all ${
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

              <div className="space-y-4 pt-8">
                <button className="w-full px-8 py-4 bg-black text-white text-lg font-light tracking-wider hover:bg-neutral-900 transition-all rounded">
                  ADD TO CART
                </button>
                <button className="w-full px-8 py-4 border-2 border-black text-black text-lg font-light tracking-wider hover:bg-gray-50 transition-all rounded">
                  INQUIRE
                </button>
              </div>

              <div className="pt-8 border-t border-neutral-200 space-y-4">
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
  );
}
