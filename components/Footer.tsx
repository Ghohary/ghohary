export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-16 mb-12">
          {/* Column 1 - Help */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">HELP</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">You can call or email us</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">FAQ&apos;s</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Product Care</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Stores</a></li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Repairs</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Personalization</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Art of Gifting</a></li>
              <li><a href="#" className="text-[11px] font-light text-neutral-400 hover:text-white transition-colors">Download our Apps</a></li>
            </ul>
          </div>

          {/* Column 3 - About */}
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

          {/* Column 4 - Email Sign-up */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] font-normal mb-6 text-white">EMAIL SIGN-UP</h3>
            <p className="text-[11px] font-light text-neutral-400 leading-relaxed mb-6">
              Sign up for Ghohary emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections
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
            <div>
              <p className="text-[11px] font-light text-neutral-400 mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

        {/* Bottom Links */}
        <div className="border-t border-neutral-800 pt-8 flex flex-wrap gap-6 text-[10px] font-light text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          <a href="#" className="hover:text-white transition-colors">Legal & Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Ship to: United Arab Emirates</a>
        </div>
      </div>
    </footer>
  );
}