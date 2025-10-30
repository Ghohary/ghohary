/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';

export default function Home() {
  const handleImageError = (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-4xl text-stone-300 bg-stone-100">${i + 1}</div>`;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pt-40 bg-transparent pb-20">
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
            {[
              { name: 'Celestial Gown', price: '45,000 AED', image: '/products/gown-1.jpg' },
              { name: 'Pearl Earrings', price: '8,500 AED', image: '/products/earrings-1.jpg' },
              { name: 'Silk Gloves', price: '2,200 AED', image: '/products/gloves-1.jpg' },
              { name: 'Crystal Clutch', price: '6,800 AED', image: '/products/clutch-1.jpg' }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black">{product.price}</p>
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
            {[
              { name: 'Bridal Gown', price: '48,000 AED', image: '/products/gown-2.jpg' },
              { name: 'Tiara Crown', price: '28,500 AED', image: '/products/tiara.jpg' },
              { name: 'Embroidered Veil', price: '8,500 AED', image: '/products/veil-1.jpg' },
              { name: 'Diamond Ring', price: '12,000 AED', image: '/products/ring.jpg' }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black">{product.price}</p>
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

      {/* Products Section 3 */}
      <section className="bg-white py-24">
        <div className="px-8">
          <div className="grid grid-cols-4 gap-8">
            {[
              { name: 'Evening Gown', price: '35,000 AED', image: '/products/gown-3.jpg' },
              { name: 'Statement Necklace', price: '12,000 AED', image: '/products/necklace.jpg' },
              { name: 'Satin Shawl', price: '3,500 AED', image: '/products/shawl.jpg' },
              { name: 'Heeled Shoes', price: '4,200 AED', image: '/products/shoes.jpg' }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">DISCOVER THE COLLECTION</button>
          </div>
        </div>
      </section>

      {/* Video Section 4 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/section-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Products Section 4 */}
      <section className="bg-stone-50 py-24">
        <div className="px-8">
          <div className="grid grid-cols-4 gap-8">
            {[
              { name: 'Pearl Necklace', price: '18,000 AED', image: '/products/necklace-2.jpg' },
              { name: 'Bridal Shoes', price: '5,800 AED', image: '/products/shoes-2.jpg' },
              { name: 'Beaded Clutch', price: '7,500 AED', image: '/products/clutch-2.jpg' },
              { name: 'Crystal Earrings', price: '6,200 AED', image: '/products/earrings-2.jpg' }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-stone-100 overflow-hidden mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageError(i)} />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">{product.name}</h3>
                <p className="text-xs font-normal text-black">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">DISCOVER THE COLLECTION</button>
          </div>
        </div>
      </section>
    </div>
  );
}
