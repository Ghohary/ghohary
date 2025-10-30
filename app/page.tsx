/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-4xl text-stone-300 bg-stone-100">${i + 1}</div>`;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-neutral-200' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full px-8">
          {/* Logo Centered with Icons */}
          <div className="relative text-center py-6 flex items-center justify-between">
            {/* Left Icons - Call and Search */}
            <div className="flex items-center gap-4">
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </button>
            </div>
            
            {/* Logo Center */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.2em] font-serif transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              GHOHARY
            </div>
            
            {/* Right Icons - Heart, Account, Cart */}
            <div className="flex items-center gap-6">
              {/* Wishlist/Heart */}
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              
              {/* My Account */}
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              {/* Shopping Cart */}
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Menu Below Logo */}
          <div className={`flex justify-center gap-12 pb-8 text-sm tracking-[0.25em] font-light transition-all duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            <a href="/couture" className={`cursor-pointer border-b-2 pb-1 transition-all duration-300 ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>COUTURE</a>
            <a href="/ready-to-wear" className={`cursor-pointer border-b-2 pb-1 transition-all duration-300 ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>READY TO WEAR</a>
            <a href="/bridal" className={`cursor-pointer border-b-2 pb-1 transition-all duration-300 ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>BRIDAL</a>
            <a href="/accessories" className={`cursor-pointer border-b-2 pb-1 transition-all duration-300 ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>ACCESSORIES</a>
            <a href="/maison" className={`cursor-pointer border-b-2 pb-1 transition-all duration-300 ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>MAISON</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Video with Transparent Background */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pt-40 bg-transparent pb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="/third.mp4" type="video/mp4" />
        </video>
        
        {/* Text Overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-widest text-white mb-4">
            SPRING-SUMMER
          </h1>
          <p className="text-3xl md:text-4xl font-light tracking-[0.3em] text-white">
            COLLECTION 2026
          </p>
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
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError(i)}
                  />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">
                  {product.name}
                </h3>
                <p className="text-xs font-normal text-black">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
          
          {/* Discover Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Video Section 2 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
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
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError(i)}
                  />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">
                  {product.name}
                </h3>
                <p className="text-xs font-normal text-black">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
          
          {/* Discover Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Video Section 3 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
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
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError(i)}
                  />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">
                  {product.name}
                </h3>
                <p className="text-xs font-normal text-black">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
          
          {/* Discover Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Video Section 4 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
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
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError(i)}
                  />
                </div>
                <h3 className="text-xs font-light text-black mb-1 group-hover:underline transition-all">
                  {product.name}
                </h3>
                <p className="text-xs font-normal text-black">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
          
          {/* Discover Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider font-light">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-neutral-800">
        <div className="px-8 py-16">
          <div className="grid grid-cols-4 gap-16 mb-12">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">HELP</h3>
              <ul className="space-y-3">
                <li className="text-[11px] font-light text-neutral-400 leading-relaxed">
                  Contact us at <span className="text-white">+971 800 884 8866</span>
                </li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Product Care</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Stores</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Alterations</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Bespoke Design</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Personal Styling</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">VIP Access</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">ABOUT GHOHARY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">CONNECT</h3>
              <p className="text-[11px] font-light text-neutral-400 leading-relaxed mb-6">
                Join our mailing list for exclusive updates and new collections.
              </p>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-neutral-700 focus:border-white px-0 py-2 text-[11px] font-light text-white outline-none transition-colors placeholder:text-neutral-600"
              />
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-wrap gap-6 text-[10px] font-light text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Legal & Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Ship to: United Arab Emirates</a>
          </div>
        </div>
      </footer>
    </div>
  );
}