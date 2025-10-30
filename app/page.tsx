/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string[];
  colors: string[];
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  category: 'couture' | 'ready-to-wear' | 'bridal' | 'accessories' | 'maison';
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Celestial Gown',
    price: '45,000 AED',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Ivory', 'Champagne'],
    status: 'available',
    category: 'couture'
  },
  {
    id: 2,
    name: 'Pearl Earrings',
    price: '8,500 AED',
    sizes: ['One Size'],
    colors: ['Silver', 'Gold'],
    status: 'available',
    category: 'accessories'
  },
  {
    id: 3,
    name: 'Silk Gloves',
    price: '2,200 AED',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White', 'Cream'],
    status: 'available',
    category: 'accessories'
  },
  {
    id: 4,
    name: 'Crystal Clutch',
    sizes: ['One Size'],
    colors: ['Black', 'Gold'],
    status: 'hidden-price',
    category: 'accessories'
  },
  {
    id: 5,
    name: 'Bridal Gown',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    colors: ['White', 'Ivory'],
    status: 'appointment',
    category: 'bridal'
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleImageError = (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-4xl text-stone-300 bg-stone-100">${i + 1}</div>`;
    }
  };

  return (
    <div className="text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pb-20 -mt-24">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute inset-0">
          <source src="/third.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-widest text-white mb-4">SPRING-SUMMER</h1>
          <p className="text-3xl md:text-4xl font-light tracking-[0.3em] text-white">COLLECTION 2026</p>
        </div>
      </section>

      {/* Products Section 1 */}
      <section className="bg-white py-24">
        <div className="px-8">
          <div className="grid grid-cols-4 gap-8">
            {initialProducts.slice(0, 4).map((product, i) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3" onClick={() => setSelectedProduct(product)}>
                  <img src={`/products/gown-${i + 1}.jpg`} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black mb-2">{product.price || 'Price Upon Request'}</p>
                <div className="text-[10px] text-neutral-600 mb-2">
                  {product.status === 'available' && <span className="text-green-600">Available</span>}
                  {product.status === 'preorder' && <span className="text-blue-600">Pre-Order</span>}
                  {product.status === 'appointment' && <span className="text-purple-600">Appointment Only</span>}
                  {product.status === 'hidden-price' && <span className="text-neutral-600">Inquire for Price</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">DISCOVER THE COLLECTION</button>
          </div>
        </div>
      </section>

      {/* Video Section 2 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/embroidery-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Products Section 2 */}
      <section className="bg-stone-50 py-24">
        <div className="px-8">
          <div className="grid grid-cols-4 gap-8">
            {initialProducts.slice(4).map((product, i) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3" onClick={() => setSelectedProduct(product)}>
                  <img src={`/products/gown-${i + 2}.jpg`} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black mb-2">{product.price || 'Price Upon Request'}</p>
                <div className="text-[10px] text-neutral-600 mb-2">
                  {product.status === 'available' && <span className="text-green-600">Available</span>}
                  {product.status === 'preorder' && <span className="text-blue-600">Pre-Order</span>}
                  {product.status === 'appointment' && <span className="text-purple-600">Appointment Only</span>}
                  {product.status === 'hidden-price' && <span className="text-neutral-600">Inquire for Price</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">DISCOVER THE COLLECTION</button>
          </div>
        </div>
      </section>

      {/* Video Section 3 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/section-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Video Section 4 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/section-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="float-right text-2xl font-light text-black hover:text-neutral-600">×</button>
            
            <h2 className="text-3xl font-light text-black mb-4">{selectedProduct.name}</h2>
            
            {selectedProduct.price && (
              <p className="text-lg font-normal text-black mb-4">{selectedProduct.price}</p>
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
                {selectedProduct.sizes.map((size) => (
                  <button key={size} className="px-4 py-2 border-2 border-black text-black text-xs font-light hover:bg-black hover:text-white transition-all">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-normal tracking-[0.2em] text-black mb-3">COLORS</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.colors.map((color) => (
                  <button key={color} className="px-4 py-2 border-2 border-black text-black text-xs font-light hover:bg-black hover:text-white transition-all">
                    {color}
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
