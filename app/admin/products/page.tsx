"use client";

import { useState } from 'react';

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
    price: '45,000 AED',
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

export default function AdminProducts() {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({ ...product });
  };

  const handleSave = () => {
    if (!formData) return;
    setProductList(productList.map(p => p.id === formData.id ? formData : p));
    setEditingId(null);
    setFormData(null);
  };

  const handleDelete = (id: number) => {
    setProductList(productList.filter(p => p.id !== id));
  };

  const handleAddNew = () => {
    const newProduct: Product = {
      id: Math.max(...productList.map(p => p.id), 0) + 1,
      name: 'New Product',
      price: '0 AED',
      sizes: ['One Size'],
      colors: ['Black'],
      status: 'available',
      category: 'couture'
    };
    setProductList([...productList, newProduct]);
    setEditingId(newProduct.id);
    setFormData(newProduct);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light tracking-wide mb-8 text-black">PRODUCT MANAGEMENT</h1>

        <button
          onClick={handleAddNew}
          className="mb-8 px-6 py-2 bg-black text-white font-light text-sm tracking-wider hover:bg-neutral-900"
        >
          ADD NEW PRODUCT
        </button>

        <div className="space-y-6">
          {productList.map((product) => (
            <div key={product.id} className="border-2 border-neutral-200 p-6">
              {editingId === product.id && formData ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 text-sm"
                    placeholder="Product Name"
                  />

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-xs font-normal tracking-wide mb-2 block">PRICE</label>
                      <input
                        type="text"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-2 border border-neutral-300 text-sm"
                        placeholder="e.g., 45,000 AED"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-normal tracking-wide mb-2 block">STATUS</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                        className="w-full px-4 py-2 border border-neutral-300 text-sm"
                      >
                        <option value="available">Available</option>
                        <option value="preorder">Pre-Order</option>
                        <option value="appointment">Appointment Only</option>
                        <option value="hidden-price">Hidden Price</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-normal tracking-wide mb-2 block">SIZES</label>
                    <input
                      type="text"
                      value={formData.sizes.join(', ')}
                      onChange={(e) => setFormData({ ...formData, sizes: e.target.value.split(',').map(s => s.trim()) })}
                      className="w-full px-4 py-2 border border-neutral-300 text-sm"
                      placeholder="e.g., XS, S, M, L, XL"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-normal tracking-wide mb-2 block">COLORS</label>
                    <input
                      type="text"
                      value={formData.colors.join(', ')}
                      onChange={(e) => setFormData({ ...formData, colors: e.target.value.split(',').map(c => c.trim()) })}
                      className="w-full px-4 py-2 border border-neutral-300 text-sm"
                      placeholder="e.g., Black, White, Gold"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="flex-1 px-4 py-2 bg-black text-white text-sm font-light tracking-wider hover:bg-neutral-900"
                    >
                      SAVE
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 px-4 py-2 border-2 border-black text-black text-sm font-light tracking-wider hover:bg-gray-50"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-light text-black mb-2">{product.name}</h3>
                    <p className="text-xs text-neutral-600 mb-3">
                      {product.price ? `Price: ${product.price}` : 'Price: Hidden'}
                    </p>
                    <p className="text-xs text-neutral-600 mb-1">Sizes: {product.sizes.join(', ')}</p>
                    <p className="text-xs text-neutral-600 mb-3">Colors: {product.colors.join(', ')}</p>
                    <div className="inline-block px-3 py-1 bg-neutral-100 text-xs font-light tracking-wide">
                      {product.status === 'available' && 'Available'}
                      {product.status === 'preorder' && 'Pre-Order'}
                      {product.status === 'appointment' && 'Appointment Only'}
                      {product.status === 'hidden-price' && 'Hidden Price'}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-4 py-2 border-2 border-black text-black text-xs font-light tracking-wider hover:bg-gray-50"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-4 py-2 border-2 border-red-500 text-red-500 text-xs font-light tracking-wider hover:bg-red-50"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
