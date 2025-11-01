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

      <div className="pt-20 min-h-screen flex">
        {/* Left Side - Images (50%) */}
        <div className="w-1/2 bg-stone-100 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Main Image */}
            {product.images && product.images.length > 0 ? (
              <div className="relative bg-white rounded overflow-hidden" style={{aspectRatio: '3/4'}}>
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative bg-white rounded overflow-hidden flex items-center justify-center" style={{aspectRatio: '3/4'}}>
                <span className="text-6xl text-stone-300">1</span>
              </div>
            )}

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative bg-white rounded overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{aspectRatio: '1'}}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Details (50%) */}
        <div className="w-1/2 bg-white p-12 flex flex-col justify-center overflow-y-auto">
          <div className="max-w-md space-y-8">
            {/* Product Name & Price */}
            <div>
              <h1 className="text-5xl font-light text-black mb-4">{product.name}</h1>
              <p className="text-2xl font-normal text-black">
                {product.price ? `${product.price} AED` : 'Price Upon Request'}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className="text-xs font-normal tracking-[0.2em] text-black mb-3">STATUS</p>
              <div className="inline-block px-4 py-2 bg-neutral-100 text-sm font-light tracking-wide">
                {product.status === 'available' && '✓ Available'}
                {product.status === 'preorder' && 'Pre-Order'}
                {product.status === 'appointment' && 'Appointment Only'}
                {product.status === 'hidden-price' && 'Hidden Price'}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="text-xs font-normal tracking-[0.2em] text-black mb-4">SELECT SIZE</p>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.split(',').map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size.trim())}
                    className={`px-3 py-3 text-xs font-light border-2 transition-all ${
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

            {/* Color Selection */}
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

            {/* Buttons */}
            <div className="space-y-3 pt-4">
              <button className="w-full px-8 py-4 bg-black text-white text-base font-light tracking-wider hover:bg-neutral-900 transition-all rounded">
                ADD TO CART
              </button>
              <button className="w-full px-8 py-4 border-2 border-black text-black text-base font-light tracking-wider hover:bg-gray-50 transition-all rounded">
                INQUIRE
              </button>
            </div>

            {/* Product Info */}
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
  );
}
