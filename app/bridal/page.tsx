/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

export default function BridalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-neutral-200">
        <div className="w-full px-8">
          <div className="relative text-center py-6 flex items-center justify-between">
            {/* Left Icons */}
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
            
            {/* Logo Center */}
            <a href="/" className="absolute left-1/2 transform -translate-x-1/2 text-4xl tracking-[0.3em] font-serif text-black">
              GHOHARY
            </a>
            
            {/* Right Icons */}
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
          
          {/* Menu */}
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
            <span className="block">BRIDAL</span>
            <span className="block mt-2 text-5xl md:text-6xl font-serif italic text-amber-700">Collection</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Enchanting gowns for your most precious moment
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Celestial Gown',
                price: '45,000 AED',
                description: 'Hand-beaded tulle with crystal embellishments',
                image: '/products/gown-1.jpg'
              },
              {
                name: 'Pearl Dream',
                price: '52,000 AED',
                description: 'Silk organza with pearl appliqués',
                image: '/products/gown-2.jpg'
              },
              {
                name: 'Eternal Grace',
                price: '48,000 AED',
                description: 'Lace mermaid silhouette with train',
                image: '/products/gown-3.jpg'
              },
              {
                name: 'Moonlight Serenade',
                price: '55,000 AED',
                description: 'Embroidered tulle ballgown',
                image: '/products/gown-4.jpg'
              },
              {
                name: 'Garden Romance',
                price: '50,000 AED',
                description: '3D floral appliqués on silk',
                image: '/products/gown-5.jpg'
              },
              {
                name: 'Royal Elegance',
                price: '58,000 AED',
                description: 'Cathedral train with gold threading',
                image: '/products/gown-6.jpg'
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
            Book Your Private Appointment
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
            Experience our bridal collection in an exclusive private session at our atelier
          </p>
          <a 
            href="/#contact"
            className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light"
          >
            REQUEST APPOINTMENT
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-4 gap-16 mb-12">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">HELP</h3>
              <ul className="space-y-3">
                <li className="text-[11px] font-light text-neutral-400 leading-relaxed">
                  Our Client Advisors are available to assist you by phone at <span className="text-white">+971 800 884 8866</span>, email or WhatsApp
                </li>
                <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
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
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Fashion Shows</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Arts & Culture</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">La Maison</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Latest News</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/maison" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Foundation Ghohary</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">CONNECT</h3>
              <p className="text-[11px] font-light text-neutral-400 leading-relaxed mb-6">
                Sign up for Ghohary emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
              </p>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-neutral-700 focus:border-white px-0 py-2 text-[11px] font-light text-white outline-none transition-colors placeholder:text-neutral-600"
                />
              </div>
              <button className="text-[11px] tracking-[0.15em] font-light text-white hover:text-neutral-400 transition-colors mb-6">
                SUBSCRIBE →
              </button>
              <div className="mb-4">
                <p className="text-[11px] font-light text-neutral-400 mb-3">Follow Us</p>
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
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-wrap gap-6 text-[10px] font-light text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Legal & Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Ship to: United Arab Emirates</a>
            <a href="#" className="hover:text-white transition-colors">التبديل إلى اللغة العربية</a>
          </div>
        </div>
      </footer>
    </div>
  );
}