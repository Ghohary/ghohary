/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string;
  colors: string;
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  category: string;
  inventory: number;
  image?: string;
}

export default function CouturePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      const allProducts = JSON.parse(saved);
      const coutureProducts = allProducts.filter((p: Product) => p.category === 'couture');
      setProducts(coutureProducts);
    }
  }, []);

  const handleImageError = (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-6xl text-stone-300 bg-stone-100">${i + 1}</div>`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-white"></div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <div className="mb-8 text-amber-700 text-xs tracking-[0.4em] font-light">
            SPRING SUMMER 2026
          </div>
          <h1 className="text-7xl md:text-9xl tracking-tight font-light mb-8 text-black">
            <span className="block">HAUTE</span>
            <span className="block mt-2 text-5xl md:text-6xl font-serif italic text-amber-700">Couture</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Bespoke excellence crafted for the extraordinary
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {products.map((product, i) => (
                <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="relative aspect-3/4 bg-stone-100 mb-6 overflow-hidden">
                    {product.image ? (
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => handleImageError(i)(e)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl text-stone-300 bg-stone-100">
                        {i + 1}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-light text-black group-hover:underline transition-all">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-600 font-light">
                      {product.colors}
                    </p>
                    <div className="text-xs text-neutral-500 pt-1">
                      Sizes: {product.sizes}
                    </div>
                    <p className="text-base font-normal text-black pt-2">
                      {product.price ? `${product.price} AED` : 'Price Upon Request'}
                    </p>
                    <div className="text-[10px] text-neutral-500 pt-1">
                      {product.status === 'available' && <span className="text-green-600">✓ Available</span>}
                      {product.status === 'preorder' && <span className="text-blue-600">• Pre-Order</span>}
                      {product.status === 'appointment' && <span className="text-purple-600">• Appointment Only</span>}
                      {product.status === 'hidden-price' && <span className="text-neutral-600">• Inquire</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-xl text-neutral-600 font-light">No couture products available yet</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-6">
            Commission Your Masterpiece
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
            Experience the pinnacle of haute couture with a bespoke creation designed exclusively for you
          </p>
          <button className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light">
            REQUEST CONSULTATION
          </button>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="float-right text-2xl font-light text-black hover:text-neutral-600">×</button>
            
            {selectedProduct.image && (
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover rounded mb-6 border border-gray-300" />
            )}
            
            <h2 className="text-3xl font-light text-black mb-4">{selectedProduct.name}</h2>
            
            {selectedProduct.price && (
              <p className="text-lg font-normal text-black mb-4">{selectedProduct.price} AED</p>
            )}
            
            {!selectedProduct.price && (
              <p className="text-lg font-light text-neutral-600 mb-4">Price Upon Request</p>
            )}

            <div className="mb-6">
              <h3 className="text-xs font-normal tracking-[0.2em] text-black mb-3">STATUS</h3>
              <div className="inline-block px-3 py-1 bg-neutral-100 text-xs font-light tracking-wide">
                {selectedProduct.status === 'available' && 'Available'}
                {selectedProduct.status === 'preorder' && 'Pre-Order'}
                {selectedProduct.status === 'appointment' && 'Appointment Only'}
                {selectedProduct.status === 'hidden-price' && 'Hidden Price'}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-normal tracking-[0.2em] text-black mb-3">SIZES</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.sizes.split(',').map((size) => (
                  <button key={size} className="px-4 py-2 border-2 border-black text-black text-xs font-light hover:bg-black hover:text-white transition-all">
                    {size.trim()}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-normal tracking-[0.2em] text-black mb-3">COLORS</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.colors.split(',').map((color) => (
                  <button key={color} className="px-4 py-2 border-2 border-black text-black text-xs font-light hover:bg-black hover:text-white transition-all">
                    {color.trim()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-black text-white text-sm font-light tracking-wider hover:bg-neutral-900">
                ADD TO CART
              </button>
              <button onClick={() => setSelectedProduct(null)} className="flex-1 px-6 py-3 border-2 border-black text-black text-sm font-light tracking-wider hover:bg-gray-50">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
