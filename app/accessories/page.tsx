/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";



export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 bg-linear-to-b from-stone-100 via-stone-50 to-white"></div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <div className="mb-8 text-amber-700 text-xs tracking-[0.4em] font-light">
            SPRING SUMMER 2025
          </div>
          <h1 className="text-7xl md:text-9xl tracking-tight font-light mb-8 text-black">
            <span className="block">ACCESSORIES</span>
            <span className="block mt-2 text-5xl md:text-6xl font-serif italic text-amber-700">Collection</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Exquisite details that complete your look
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Crystal Clutch',
                price: '6,800 AED',
                description: 'Hand-embellished evening bag with chain',
                image: '/products/acc-1.jpg'
              },
              {
                name: 'Pearl Drop Earrings',
                price: '4,200 AED',
                description: 'South sea pearls in 18k gold',
                image: '/products/acc-2.jpg'
              },
              {
                name: 'Silk Evening Gloves',
                price: '2,200 AED',
                description: 'Opera length gloves in ivory silk',
                image: '/products/acc-3.jpg'
              },
              {
                name: 'Diamond Tiara',
                price: '28,500 AED',
                description: 'Vintage-inspired bridal crown',
                image: '/products/acc-4.jpg'
              },
              {
                name: 'Embroidered Veil',
                price: '8,500 AED',
                description: 'Cathedral length with lace trim',
                image: '/products/acc-5.jpg'
              },
              {
                name: 'Gold Statement Necklace',
                price: '12,000 AED',
                description: 'Layered chains with crystals',
                image: '/products/acc-6.jpg'
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
            Complete Your Look
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
            Discover the perfect accessories to complement your style
          </p>
          <a 
            href="/#contact"
            className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light"
          >
            VISIT BOUTIQUE
          </a>
        </div>
      </section>

      
    </div>
  );
}