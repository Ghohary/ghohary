/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";



export default function ReadyToWearPage() {
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
            
            <a href="/" className="absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.3em] font-serif text-black">
              GHOHARY
            </a>
            
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
            <a href="/couture" className="hover:text-amber-700 transition-colors duration-300">COUTURE</a>
            <a href="/ready-to-wear" className="hover:text-amber-700 transition-colors duration-300">READY TO WEAR</a>
            <a href="/bridal" className="hover:text-amber-700 transition-colors duration-300">BRIDAL</a>
            <a href="/accessories" className="hover:text-amber-700 transition-colors duration-300">ACCESSORIES</a>
            <a href="/maison" className="hover:text-amber-700 transition-colors duration-300">MAISON</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 bg-linear-to-b from-stone-100 via-stone-50 to-white"></div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <div className="mb-8 text-amber-700 text-xs tracking-[0.4em] font-light">
            SPRING SUMMER 2025
          </div>
          <h1 className="text-7xl md:text-9xl tracking-tight font-light mb-8 text-black">
            <span className="block">READY TO</span>
            <span className="block mt-2 text-5xl md:text-6xl font-serif italic text-amber-700">Wear</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Sophisticated luxury for every occasion
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Silk Blazer Set',
                price: '18,500 AED',
                description: 'Tailored blazer with matching trousers',
                image: '/products/rtw-1.jpg'
              },
              {
                name: 'Evening Midi Dress',
                price: '12,800 AED',
                description: 'Embellished cocktail dress in black silk',
                image: '/products/rtw-2.jpg'
              },
              {
                name: 'Cashmere Coat',
                price: '22,000 AED',
                description: 'Luxurious oversized winter coat',
                image: '/products/rtw-3.jpg'
              },
              {
                name: 'Printed Maxi Dress',
                price: '15,500 AED',
                description: 'Flowing silk dress with botanical print',
                image: '/products/rtw-4.jpg'
              },
              {
                name: 'Tailored Jumpsuit',
                price: '16,200 AED',
                description: 'Wide-leg jumpsuit with belt detail',
                image: '/products/rtw-5.jpg'
              },
              {
                name: 'Leather Jacket',
                price: '19,800 AED',
                description: 'Buttery soft leather with gold hardware',
                image: '/products/rtw-6.jpg'
              }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-3/4 bg-stone-100 mb-6 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-6xl text-stone-300 bg-stone-100">${i + 1}</div>`;
                      }
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-black group-hover:underline transition-all">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light">
                    {product.description}
                  </p>
                  <p className="text-base font-normal text-black pt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-6">
            Visit Our Boutique
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
            Explore our ready-to-wear collection and find your perfect piece
          </p>
          <a 
            href="/#contact"
            className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}