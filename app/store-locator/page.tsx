"use client";

import { useState } from 'react';

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  isFlagship: boolean;
  image: string;
}

export default function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const stores: Store[] = [
    {
      id: 1,
      name: 'Dubai Flagship Store',
      address: 'The Opus, Business Bay, Dubai',
      city: 'Dubai',
      country: 'UAE',
      phone: '+971 4 XXX XXXX',
      email: 'dubai@ghohary.ae',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      isFlagship: true,
      image: '/stores/dubai.jpg'
    },
    {
      id: 2,
      name: 'Abu Dhabi Store',
      address: 'Saadiyat Island, Abu Dhabi',
      city: 'Abu Dhabi',
      country: 'UAE',
      phone: '+971 2 XXX XXXX',
      email: 'abudhabi@ghohary.ae',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      isFlagship: false,
      image: '/stores/abudhabi.jpg'
    },
    {
      id: 3,
      name: 'Riyadh Store',
      address: 'Riyadh Front, Riyadh',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      phone: '+966 11 XXX XXXX',
      email: 'riyadh@ghohary.ae',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      isFlagship: false,
      image: '/stores/riyadh.jpg'
    },
    {
      id: 4,
      name: 'Jeddah Store',
      address: 'Red Sea Mall, Jeddah',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      phone: '+966 12 XXX XXXX',
      email: 'jeddah@ghohary.ae',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      isFlagship: false,
      image: '/stores/jeddah.jpg'
    }
  ];

  const flagshipStores = stores.filter(store => store.isFlagship);

  const getMarkerPosition = (city: string): { x: number; y: number } => {
    switch (city) {
      case 'Dubai':
        return { x: 570, y: 240 };
      case 'Abu Dhabi':
        return { x: 560, y: 250 };
      case 'Riyadh':
        return { x: 540, y: 220 };
      case 'Jeddah':
        return { x: 510, y: 240 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-0">
        <div className="grid grid-cols-2 gap-0 min-h-screen">
          {/* Left Side - Map */}
          <div className="relative h-screen bg-stone-200 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-stone-100">
              <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <rect width={1000} height={600} fill="#e8e8e8" />
                <g fill="#d4d4d8" stroke="none">
                  <path d="M 80 100 L 180 80 L 200 200 L 150 250 L 100 220 Z" />
                  <path d="M 140 250 L 180 240 L 190 380 L 160 390 Z" />
                  <path d="M 450 80 L 520 85 L 530 150 L 480 160 Z" />
                  <path d="M 450 150 L 520 160 L 540 350 L 480 360 Z" />
                  <path d="M 520 160 L 580 170 L 600 260 L 540 270 Z" />
                  <path d="M 580 100 L 750 90 L 800 200 L 750 280 L 600 270 Z" />
                  <path d="M 750 380 L 810 375 L 820 450 L 760 455 Z" />
                </g>
                <g stroke="#e0e0e0" strokeWidth="1" opacity={0.3}>
                  <line x1="0" y1="100" x2="1000" y2="100" />
                  <line x1="0" y1="200" x2="1000" y2="200" />
                  <line x1="0" y1="300" x2="1000" y2="300" />
                  <line x1="0" y1="400" x2="1000" y2="400" />
                  <line x1="200" y1="0" x2="200" y2="600" />
                  <line x1="400" y1="0" x2="400" y2="600" />
                  <line x1="600" y1="0" x2="600" y2="600" />
                  <line x1="800" y1="0" x2="800" y2="600" />
                </g>
                {stores.map((store) => {
                  const pos = getMarkerPosition(store.city);
                  return (
                    <g key={store.id}>
                      <circle cx={pos.x} cy={pos.y} r={store.isFlagship ? 28 : 16} fill={store.isFlagship ? "#000000" : "#999999"} opacity={store.isFlagship ? 1 : 0.7} className="cursor-pointer" onClick={() => setSelectedStore(store)} />
                      {store.isFlagship && (
                        <>
                          <circle cx={pos.x} cy={pos.y} r="22" fill="none" stroke="#000000" strokeWidth="2" opacity={0.3} />
                          <circle cx={pos.x} cy={pos.y} r="6" fill="#ffffff" />
                          <text x={pos.x} y={pos.y + 45} textAnchor="middle" fontSize="12" fill="#333">
                            {store.city}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Side - Store Info */}
          <div className="h-screen bg-white flex flex-col overflow-y-auto">
            <div className="sticky top-0 bg-white py-12 px-12 border-b border-neutral-200 z-10">
              <h1 className="text-4xl font-light tracking-wider text-black mb-2">LOCATE A STORE</h1>
              <p className="text-neutral-600 font-light">Find our boutiques worldwide</p>
            </div>

            <div className="flex-1 flex flex-col p-12">
              <div className="mb-12">
                <input type="text" placeholder="Find store" className="w-full px-4 py-3 border-b-2 border-neutral-300 focus:border-black outline-none font-light text-sm" />
              </div>

              <button className="mb-12 flex items-center gap-3 text-black hover:text-neutral-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm font-light tracking-wide">USE MY CURRENT LOCATION</span>
              </button>

              <div className="mb-12">
                <h2 className="text-xs tracking-[0.2em] font-normal text-black mb-8">OUR FLAGSHIP STORES</h2>
                <div className="space-y-6">
                  {flagshipStores.map((store) => (
                    <button key={store.id} onClick={() => setSelectedStore(store)} className={`w-full text-left p-6 border-2 ${selectedStore?.id === store.id ? 'border-black bg-black text-white' : 'border-neutral-200 bg-white text-black hover:border-black'}`}>
                      <h3 className="text-base font-light tracking-wide mb-1">{store.name}</h3>
                      <p className={`text-xs font-light ${selectedStore?.id === store.id ? 'text-gray-300' : 'text-neutral-600'}`}>{store.city}, {store.country}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.2em] font-normal text-black mb-8">ALL STORES</h2>
                <div className="space-y-3">
                  {stores.map((store) => (
                    <button key={store.id} onClick={() => setSelectedStore(store)} className={`w-full text-left p-4 border-b-2 pb-4 ${selectedStore?.id === store.id ? 'border-black' : 'border-transparent hover:border-neutral-300'}`}>
                      <p className="text-sm font-light text-black mb-1">{store.name}</p>
                      <p className="text-xs font-light text-neutral-600">{store.city}, {store.country}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedStore && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button onClick={() => setSelectedStore(null)} className="absolute top-6 right-6 z-10 text-black hover:text-neutral-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-video bg-stone-200">
              <img src={selectedStore.image} alt={selectedStore.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-12">
              <h2 className="text-4xl font-light tracking-wide mb-2 text-black">{selectedStore.name}</h2>
              {selectedStore.isFlagship && <p className="text-xs tracking-[0.2em] font-normal text-neutral-600 mb-8">FLAGSHIP STORE</p>}

              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-xs tracking-[0.2em] font-normal text-black mb-3">ADDRESS</p>
                  <p className="text-base font-light text-neutral-700 leading-relaxed">{selectedStore.address}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] font-normal text-black mb-3">HOURS</p>
                  <p className="text-base font-light text-neutral-700">{selectedStore.hours}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 py-12 border-t border-b border-neutral-200 mb-12">
                <div>
                  <p className="text-xs tracking-[0.2em] font-normal text-black mb-3">PHONE</p>
                  <a href={`tel:${selectedStore.phone}`} className="text-base font-light text-neutral-700 hover:text-black">{selectedStore.phone}</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] font-normal text-black mb-3">EMAIL</p>
                  <a href={`mailto:${selectedStore.email}`} className="text-base font-light text-neutral-700 hover:text-black">{selectedStore.email}</a>
                </div>
              </div>

              <div className="flex gap-6">
                <button className="flex-1 px-8 py-4 border-2 border-black text-black font-light text-xs tracking-wider hover:bg-black hover:text-white">GET DIRECTIONS</button>
                <button className="flex-1 px-8 py-4 bg-black text-white font-light text-xs tracking-wider hover:bg-neutral-900">BOOK APPOINTMENT</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
