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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide mb-8 text-black">PRODUCT MANAGEMENT</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={handleAddNew}
            className="px-6 py-3 bg-black text-white font-bold text-sm tracking-wider hover:bg-neutral-900 rounded"
          >
            + ADD NEW PRODUCT
          </button>
          <button
            onClick={() => setShowJsonImport(!showJsonImport)}
            className="px-6 py-3 bg-blue-600 text-white font-bold text-sm tracking-wider hover:bg-blue-700 rounded"
          >
            📥 IMPORT JSON
          </button>
          <button
            onClick={downloadJson}
            className="px-6 py-3 bg-green-600 text-white font-bold text-sm tracking-wider hover:bg-green-700 rounded"
          >
            💾 DOWNLOAD JSON
          </button>
        </div>

        {showJsonImport && (
          <div className="bg-white border-4 border-blue-600 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-black">Import Products (JSON)</h2>
            <p className="text-base text-black mb-4 font-semibold">Paste your JSON array of products below:</p>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 text-base font-mono h-64 mb-4 text-black"
              placeholder='[{"name":"Product 1","price":"1000 AED","sizes":"S,M,L","colors":"Black,White","status":"available","category":"couture","inventory":10}]'
            />
            <div className="flex gap-3">
              <button
                onClick={handleJsonImport}
                className="px-6 py-2 bg-green-600 text-white font-bold text-base tracking-wider hover:bg-green-700 rounded"
              >
                IMPORT
              </button>
              <button
                onClick={() => setShowJsonImport(false)}
                className="px-6 py-2 bg-gray-500 text-white font-bold text-base tracking-wider hover:bg-gray-600 rounded"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        {editingId !== null && formData && (
          <div className="bg-white border-4 border-black p-8 mb-8 rounded">
            <h2 className="text-3xl font-bold mb-6 text-black">Edit Product</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-black font-bold mb-2">PRODUCT NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                  placeholder="Brown Empress"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-bold mb-2">PRICE</label>
                  <input
                    type="text"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                    placeholder="2800 AED"
                  />
                </div>
                <div>
                  <label className="block text-black font-bold mb-2">INVENTORY</label>
                  <input
                    type="number"
                    value={formData.inventory}
                    onChange={(e) => setFormData({ ...formData, inventory: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-bold mb-2">STATUS</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                  >
                    <option value="available">✓ Available</option>
                    <option value="preorder">Pre-Order</option>
                    <option value="appointment">Appointment Only</option>
                    <option value="hidden-price">Hidden Price</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black font-bold mb-2">CATEGORY</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                  >
                    <option value="couture">Couture</option>
                    <option value="ready-to-wear">Ready to Wear</option>
                    <option value="bridal">Bridal</option>
                    <option value="accessories">Accessories</option>
                    <option value="maison">Maison</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-black font-bold mb-2">SIZES (comma separated)</label>
                <input
                  type="text"
                  value={formData.sizes}
                  onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                  placeholder="36, 38, 40, 42"
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">COLORS (comma separated)</label>
                <input
                  type="text"
                  value={formData.colors}
                  onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded"
                  placeholder="Brown"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 px-6 py-3 bg-green-600 text-white font-bold text-base tracking-wider hover:bg-green-700 rounded"
                >
                  ✓ SAVE PRODUCT
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="flex-1 px-6 py-3 bg-gray-500 text-white font-bold text-base tracking-wider hover:bg-gray-600 rounded"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-lg text-black font-bold mb-6">Total Products: {products.length}</p>
          {products.length === 0 ? (
            <div className="bg-white p-8 rounded border-2 border-gray-300 text-center">
              <p className="text-xl text-gray-600 font-semibold">No products yet. Click "ADD NEW PRODUCT" to get started!</p>
            </div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white p-6 border-2 border-gray-300 rounded flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-black">{product.name}</h3>
                  <p className="text-base text-black font-semibold">{product.price ? `${product.price} AED` : 'Hidden Price'} • {product.status} • Inventory: {product.inventory}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-6 py-2 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 rounded"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-6 py-2 bg-red-600 text-white font-bold text-base hover:bg-red-700 rounded"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
