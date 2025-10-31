"use client";

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string;
  colors: string;
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  category: string;
  inventory: number;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Product | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const [showJsonImport, setShowJsonImport] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const handleSave = () => {
    if (!formData) return;
    
    if (editingId && editingId > 0) {
      saveProducts(products.map(p => p.id === editingId ? formData : p));
    } else {
      const newProduct = { ...formData, id: Math.max(...products.map(p => p.id), 0) + 1 };
      saveProducts([...products, newProduct]);
    }
    setEditingId(null);
    setFormData(null);
  };

  const handleDelete = (id: number) => {
    saveProducts(products.filter(p => p.id !== id));
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
      category: 'couture',
      inventory: 0
    });
    setEditingId(-1);
  };

  const handleJsonImport = () => {
    try {
      const imported = JSON.parse(jsonInput);
      const importedProducts = Array.isArray(imported) ? imported : [imported];
      saveProducts(importedProducts);
      setJsonInput('');
      setShowJsonImport(false);
      alert(`Successfully imported ${importedProducts.length} products!`);
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  const downloadJson = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'products.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light tracking-wide mb-8 text-black">PRODUCT MANAGEMENT</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={handleAddNew}
            className="px-6 py-2 bg-black text-white font-light text-sm tracking-wider hover:bg-neutral-900"
          >
            ADD NEW PRODUCT
          </button>
          <button
            onClick={() => setShowJsonImport(!showJsonImport)}
            className="px-6 py-2 border-2 border-black text-black font-light text-sm tracking-wider hover:bg-gray-50"
          >
            IMPORT JSON (500+ products)
          </button>
          <button
            onClick={downloadJson}
            className="px-6 py-2 border-2 border-green-600 text-green-600 font-light text-sm tracking-wider hover:bg-green-50"
          >
            DOWNLOAD JSON BACKUP
          </button>
        </div>

        {showJsonImport && (
          <div className="border-2 border-neutral-200 p-6 mb-8">
            <h2 className="text-2xl font-light mb-4">Import Products (JSON)</h2>
            <p className="text-sm text-neutral-600 mb-4">Paste your JSON array of products below:</p>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 text-sm font-mono h-64 mb-4"
              placeholder='[{"name":"Product 1","price":"1000 AED","sizes":"S,M,L","colors":"Black,White","status":"available","category":"couture","inventory":10},...]'
            />
            <div className="flex gap-3">
              <button
                onClick={handleJsonImport}
                className="px-4 py-2 bg-green-600 text-white text-sm font-light tracking-wider hover:bg-green-700"
              >
                IMPORT
              </button>
              <button
                onClick={() => setShowJsonImport(false)}
                className="px-4 py-2 border-2 border-black text-black text-sm font-light tracking-wider hover:bg-gray-50"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-normal tracking-wide mb-2 block">PRICE</label>
                  <input
                    type="text"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 text-sm"
                    placeholder="e.g., 45,000 AED"
                  />
                </div>
                <div>
                  <label className="text-xs font-normal tracking-wide mb-2 block">INVENTORY</label>
                  <input
                    type="number"
                    value={formData.inventory}
                    onChange={(e) => setFormData({ ...formData, inventory: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-neutral-300 text-sm"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
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
                <div>
                  <label className="text-xs font-normal tracking-wide mb-2 block">CATEGORY</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 text-sm"
                  >
                    <option value="couture">Couture</option>
                    <option value="ready-to-wear">Ready to Wear</option>
                    <option value="bridal">Bridal</option>
                    <option value="accessories">Accessories</option>
                    <option value="maison">Maison</option>
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
          <p className="text-sm text-neutral-600 mb-4">Total Products: {products.length}</p>
          {products.map((product) => (
            <div key={product.id} className="border border-neutral-200 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-light text-black">{product.name}</h3>
                <p className="text-xs text-neutral-600">{product.price || 'Hidden Price'} • {product.status} • Inventory: {product.inventory}</p>
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
