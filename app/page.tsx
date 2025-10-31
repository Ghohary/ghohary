/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from 'react';

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
    price: '20,000 AED',
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
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPlaying, setIsPlaying] = useState({ hero: true, video2: true, video3: true, video4: true });
  const [isMuted, setIsMuted] = useState({ hero: true, video2: true, video3: true, video4: true });
  const videoRefs = useRef({ hero: null as HTMLVideoElement | null, video2: null as HTMLVideoElement | null, video3: null as HTMLVideoElement | null, video4: null as HTMLVideoElement | null });

  const handleImageError = (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    if (target.parentElement) {
      target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-4xl text-stone-300 bg-stone-100">${i + 1}</div>`;
    }
  };

  const togglePlay = (videoId: 'hero' | 'video2' | 'video3' | 'video4') => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (isPlaying[videoId]) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying({ ...isPlaying, [videoId]: !isPlaying[videoId] });
    }
  };

  const toggleMute = (videoId: 'hero' | 'video2' | 'video3' | 'video4') => {
    const video = videoRefs.current[videoId];
    if (video) {
      video.muted = !isMuted[videoId];
      setIsMuted({ ...isMuted, [videoId]: !isMuted[videoId] });
    }
  };

  const VideoControls = ({ videoId }: { videoId: 'hero' | 'video2' | 'video3' | 'video4' }) => (
    <div className="absolute bottom-8 left-8 z-20 flex gap-4">
      <button
        onClick={() => togglePlay(videoId)}
        className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
      >
        {isPlaying[videoId] ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        onClick={() => toggleMute(videoId)}
        className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
      >
        {!isMuted[videoId] ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3z" />
          </svg>
        )}
      </button>
    </div>
  );

  return (
    <div className="text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-end overflow-hidden -mt-24 pb-24">
        <video 
          ref={(el) => { if (el) videoRefs.current.hero = el; }}
          autoPlay 
          loop 
          muted={isMuted.hero}
          playsInline 
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="/third.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-white mb-2">SPRING-SUMMER</h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.2em] text-white mb-8">COLLECTION 2026</p>
            
            <button className="px-12 py-3 border-2 border-white text-white font-light text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
              SEE THE NEW COLLECTION
            </button>
          </div>
        </div>

        <VideoControls videoId="hero" />
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
        <video 
          ref={(el) => { if (el) videoRefs.current.video2 = el; }}
          autoPlay 
          loop 
          muted={isMuted.video2}
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/embroidery-video.mp4" type="video/mp4" />
        </video>
        <VideoControls videoId="video2" />
      </section>

      {/* Products Section 2 */}
      <section className="bg-stone-50 py-24">
        <div className="px-8">
          <div className="grid grid-cols-4 gap-8">
            {initialProducts.slice(0, 4).map((product, i) => (
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
        <video 
          ref={(el) => { if (el) videoRefs.current.video3 = el; }}
          autoPlay 
          loop 
          muted={isMuted.video3}
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/section-video.mp4" type="video/mp4" />
        </video>
        <VideoControls videoId="video3" />
      </section>

      {/* Video Section 4 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
        <video 
          ref={(el) => { if (el) videoRefs.current.video4 = el; }}
          autoPlay 
          loop 
          muted={isMuted.video4}
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/section-video.mp4" type="video/mp4" />
        </video>
        <VideoControls videoId="video4" />
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
