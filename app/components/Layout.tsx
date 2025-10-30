/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'bg-white border-b border-neutral-200' : 'bg-transparent border-b border-transparent'}`}>
        <div className="w-full px-8">
          <div className="relative text-center py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <a href="/store-locator" className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </a>
            </div>
            <a href="/" className={`absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.2em] font-serif transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>GHOHARY</a>
            <div className="flex items-center gap-6">
              <button className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className={`transition-colors ${isScrolled ? 'text-black hover:text-gray-400' : 'text-white hover:text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`flex justify-center gap-12 pb-8 text-sm tracking-[0.25em] font-light transition-all duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <a href="/couture" className={`border-b-2 pb-1 transition-all ${isScrolled ? 'border-transparent hover:border-black text-black' : 'border-transparent hover:border-white text-white'}`}>COUTURE</a>
            <a href="/ready-to-wear" className={`border-b-2 pb-1 transition-all ${isScrolled ? 'border-transparent hover:border-black text-black' : 'border-transparent hover:border-white text-white'}`}>READY TO WEAR</a>
            <a href="/bridal" className={`border-b-2 pb-1 transition-all ${isScrolled ? 'border-transparent hover:border-black text-black' : 'border-transparent hover:border-white text-white'}`}>BRIDAL</a>
            <a href="/accessories" className={`border-b-2 pb-1 transition-all ${isScrolled ? 'border-transparent hover:border-black text-black' : 'border-transparent hover:border-white text-white'}`}>ACCESSORIES</a>
            <a href="/maison" className={`border-b-2 pb-1 transition-all ${isScrolled ? 'border-transparent hover:border-black text-black' : 'border-transparent hover:border-white text-white'}`}>MAISON</a>
          </div>
        </div>
      </nav>
      <div className="pt-24">{children}</div>
      <footer className="bg-black text-white border-t border-neutral-800">
        <div className="px-8 py-16">
          <div className="grid grid-cols-4 gap-16 mb-12">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">HELP</h3>
              <ul className="space-y-3">
                <li className="text-[11px] font-light text-neutral-400"><span className="text-white">+971 800 884 8866</span></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Product Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Alterations</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Bespoke Design</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Personal Styling</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">ABOUT</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white">Collections</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">NEWSLETTER</h3>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-neutral-700 focus:border-white px-0 py-2 text-[11px] font-light text-white outline-none placeholder:text-neutral-600" />
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-[10px] font-light text-neutral-400">
            <p>© 2026 GHOHARY</p>
          </div>
        </div>
      </footer>
    </>
  );
}
