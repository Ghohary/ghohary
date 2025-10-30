"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string;
  colors: string;
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  category: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!formData) return;
    
    try {
      if (editingId && editingId > 0) {
        const { error } = await supabase
          .from('products')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('products')
          .insert([{ ...formData, id: undefined }]);
        if (error) throw error;
      }
      fetchProducts();
      setEditingId(null);
      setFormData(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({ ...product });
  };

  const handleAddNew = () => {
    setFormData({
      id: 0,
      name: '',
      price: '',
      sizes: '',
      colors: '',
      status: 'available',
      category: 'couture'
    });
    setEditingId(-1);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

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

        {editingId !== null && formData && (
          <div className="border-2 border-neutral-200 p-6 mb-8">
            <h2 className="text-2xl font-light mb-4">Edit Product</h2>
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
                    placeholder="e.g., 20,000 AED"
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

              <input
                type="text"
                value={formData.sizes}
                onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 text-sm"
                placeholder="Sizes (comma separated): XS, S, M, L, XL"
              />

              <input
                type="text"
                value={formData.colors}
                onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 text-sm"
                placeholder="Colors (comma separated): Black, White, Gold"
              />

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
          </div>
        )}

        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="border border-neutral-200 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-light text-black">{product.name}</h3>
                <p className="text-xs text-neutral-600">{product.price || 'Hidden Price'} • {product.status}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 border-2 border-black text-black text-xs font-light hover:bg-gray-50"
                >
                  EDIT
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 border-2 border-red-500 text-red-500 text-xs font-light hover:bg-red-50"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
