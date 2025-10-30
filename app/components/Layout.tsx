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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-neutral-200' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full px-8">
          <div className="relative text-center py-6 flex items-center justify-between">
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
              <a href="/store-locator" className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </a>
            </div>
            <a href="/" className={`absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.2em] font-serif transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>GHOHARY</a>
            <div className="flex items-center gap-6">
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className={`transition-colors ${
                isScrolled 
                  ? 'text-black hover:text-gray-400' 
                  : 'text-white hover:text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
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
          <div className={`flex justify-center gap-12 pb-8 text-sm tracking-[0.25em] font-light transition-all duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            <a href="/couture" className={`border-b-2 pb-1 transition-all ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>COUTURE</a>
            <a href="/ready-to-wear" className={`border-b-2 pb-1 transition-all ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>READY TO WEAR</a>
            <a href="/bridal" className={`border-b-2 pb-1 transition-all ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>BRIDAL</a>
            <a href="/accessories" className={`border-b-2 pb-1 transition-all ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>ACCESSORIES</a>
            <a href="/maison" className={`border-b-2 pb-1 transition-all ${
              isScrolled 
                ? 'border-transparent hover:border-black text-black' 
                : 'border-transparent hover:border-white text-white'
            }`}>MAISON</a>
          </div>
        </div>
      </nav>
      <div className="pt-24">{children}</div>
      <footer className="bg-black text-white border-t border-neutral-800">
        <div className="px-8 py-16">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">HELP</h3>
              <ul className="space-y-3">
                <li className="text-[11px] font-light text-neutral-400">You can call or email us</li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">FAQ's</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Product Care</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Stores</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Repairs</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Personalization</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Art of Gifting</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Download our Apps</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">ABOUT GHOHARY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Fashion Shows</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Arts & Culture</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">La Maison</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Foundation GHOHARY</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">EMAIL SIGN-UP</h3>
              <p className="text-[11px] font-light text-neutral-400 leading-relaxed mb-6">
                Sign up for GHOHARY emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
              </p>
              <div className="flex gap-2 mb-8">
                <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border-b border-neutral-700 focus:border-white px-0 py-2 text-[11px] font-light text-white outline-none placeholder:text-neutral-600" />
                <button className="text-[11px] tracking-[0.15em] font-light text-white hover:text-neutral-400 transition-colors">SIGN UP</button>
              </div>
              
              <h4 className="text-[11px] tracking-[0.2em] font-normal mb-4 text-white">FOLLOW US</h4>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-wrap gap-6 text-[10px] font-light text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Legal & privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">International (English)</a>
          </div>
        </div>
      </footer>
    </>
  );
}
