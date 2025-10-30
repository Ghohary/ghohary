/* eslint-disable @next/next/no-html-link-for-pages */
"use client";



export default function MaisonPage() {
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
          <h1 className="text-7xl md:text-9xl tracking-tight font-serif italic mb-8 text-black">
            La Maison
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-3xl mx-auto tracking-wide leading-relaxed">
            A legacy of excellence in haute couture
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 font-light leading-relaxed">
            <p>
              Founded in 2025, Ghohary represents the pinnacle of haute couture craftsmanship. Our atelier combines centuries-old techniques with contemporary innovation, creating pieces that transcend time and trend.
            </p>
            <p>
              Every gown that leaves our atelier is a testament to the skill of our master artisans, who dedicate over 300 hours of meticulous handwork to each creation. From the first sketch to the final stitch, we pursue perfection in every detail.
            </p>
            <p>
              Our philosophy is simple: luxury is in each detail. We believe that true elegance comes from the marriage of exceptional materials, impeccable craftsmanship, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-16 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Craftsmanship',
                description: 'Every piece is handcrafted by master artisans with decades of experience, ensuring unparalleled quality and attention to detail.'
              },
              {
                title: 'Innovation',
                description: 'We blend traditional techniques with modern design, creating couture that honors heritage while embracing the future.'
              },
              {
                title: 'Exclusivity',
                description: 'Each creation is unique, designed specifically for the individual who wears it, ensuring you own a true one-of-a-kind masterpiece.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-amber-700 flex items-center justify-center text-3xl text-amber-700">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-light text-black mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atelier */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-8">
                The Atelier
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 font-light leading-relaxed">
                <p>
                  Our Dubai atelier is a sanctuary of creativity and craftsmanship. Here, dreams are transformed into reality through the skilled hands of our master couturiers.
                </p>
                <p>
                  We invite you to experience the magic of haute couture firsthand. Schedule a private consultation to discuss your vision and witness the artistry that goes into every Ghohary creation.
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href="/#contact"
                  className="inline-block px-12 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 text-sm tracking-wider font-light"
                >
                  BOOK A VISIT
                </a>
              </div>
            </div>
            <div className="relative aspect-4/5 bg-stone-100">
              <div className="absolute inset-0 flex items-center justify-center text-9xl text-stone-300">
                ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-8">
            Our Commitment
          </h2>
          <p className="text-lg text-neutral-700 font-light leading-relaxed mb-6">
            We are committed to sustainable luxury. Our made-to-order approach eliminates waste, while our choice of premium, ethically-sourced materials ensures that beauty and responsibility go hand in hand.
          </p>
          <p className="text-lg text-neutral-700 font-light leading-relaxed">
            Every Ghohary piece is designed to be treasured for generations, embodying our belief that true luxury is timeless.
          </p>
        </div>
      </section>

      
    </div>
  );
}