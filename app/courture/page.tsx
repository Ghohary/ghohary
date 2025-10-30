/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";



export default function CouturePage() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Midnight Reverie',
                price: '75,000 AED',
                description: 'Hand-embroidered evening gown with 24k gold thread',
                image: '/products/couture-1.jpg'
              },
              {
                name: 'Noir Étoile',
                price: '82,000 AED',
                description: 'Sculpted silhouette with crystal constellation',
                image: '/products/couture-2.jpg'
              },
              {
                name: 'Lumière d\'Or',
                price: '95,000 AED',
                description: 'Architectural design with metallic gold leaf',
                image: '/products/couture-3.jpg'
              },
              {
                name: 'Ethereal Dawn',
                price: '88,000 AED',
                description: 'Illusion masterpiece with hand-painted motifs',
                image: '/products/couture-4.jpg'
              },
              {
                name: 'Royal Opulence',
                price: '120,000 AED',
                description: 'Dramatic cape gown with jewel embellishments',
                image: '/products/couture-5.jpg'
              },
              {
                name: 'Celestial Symphony',
                price: '98,000 AED',
                description: 'Feather-adorned silk with pearl detailing',
                image: '/products/couture-6.jpg'
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
            Commission Your Masterpiece
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-10 leading-relaxed">
            Experience the pinnacle of haute couture with a bespoke creation designed exclusively for you
          </p>
          <a 
            href="/#contact"
            className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light"
          >
            REQUEST CONSULTATION
          </a>
        </div>
      </section>

      
    </div>
  );
}