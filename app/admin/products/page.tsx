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
  images?: string[];
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Brown Crystal Hearts',
    price: '2800',
    sizes: '36, 38, 40, 42',
    colors: 'Brown',
    status: 'available',
    category: 'couture',
    inventory: 2,
    images: []
  }
];

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Product | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const [showJsonImport, setShowJsonImport] = useState(false);
  const [priceInput, setPriceInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(DEFAULT_PRODUCTS);
      localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (formData) {
            const images = formData.images || [];
            images.push(reader.result as string);
            setFormData({ ...formData, images });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    if (formData && formData.images) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData({ ...formData, images: newImages });
    }
  };

  const handlePriceChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setPriceInput(numericValue);
    if (formData) {
      setFormData({ ...formData, price: numericValue ? `${numericValue}` : '' });
    }
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
    setPriceInput('');
  };

  const handleDelete = (id: number) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({ ...product });
    setPriceInput(product.price?.replace(/[^0-9]/g, '') || '');
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
      inventory: 0,
      images: []
    });
    setEditingId(-1);
    setPriceInput('');
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
              placeholder='[{"name":"Product 1","price":"1000","sizes":"S,M,L","colors":"Black,White","status":"available","category":"couture","inventory":10,"images":[]}]'
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
                  placeholder="Product Name"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-bold mb-2">PRICE (numbers only)</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={priceInput}
                      onChange={(e) => handlePriceChange(e.target.value)}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded-l"
                      placeholder="2800"
                    />
                    <span className="px-4 py-3 bg-gray-200 text-black font-bold border-2 border-gray-300 border-l-0 rounded-r">
                      AED
                    </span>
                  </div>
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
                  placeholder="Gold, Silver"
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">PRODUCT IMAGES (upload 3-5 images)</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 border-2 border-gray-300 text-black font-semibold text-base rounded bg-white cursor-pointer"
                />
                <p className="text-sm text-gray-600 mt-2">You can select multiple images at once!</p>
              </div>

              {formData.images && formData.images.length > 0 && (
                <div>
                  <h3 className="text-black font-bold mb-4">Image Gallery ({formData.images.length} images)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, idx) => (
                      <div key={idx} className="relative group">
                        <img src={image} alt={`Preview ${idx + 1}`} className="w-full h-40 object-cover rounded border-2 border-gray-300" />
                        <button
                          onClick={() => removeImage(idx)}
                          className="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
              <div key={product.id} className="bg-white p-6 border-2 border-gray-300 rounded">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-black">{product.name}</h3>
                    <p className="text-base text-black font-semibold">{product.price ? `${product.price} AED` : 'Hidden Price'} • {product.status} • Inventory: {product.inventory}</p>
                    {product.images && product.images.length > 0 && (
                      <p className="text-sm text-gray-600 mt-2">📷 {product.images.length} images</p>
                    )}
                  </div>
                  {product.images && product.images.length > 0 && (
                    <div className="flex gap-2 ml-4">
                      {product.images.slice(0, 2).map((img, idx) => (
                        <img key={idx} src={img} alt={`${product.name} ${idx + 1}`} className="w-16 h-20 object-cover rounded border border-gray-300" />
                      ))}
                      {product.images.length > 2 && (
                        <div className="w-16 h-20 bg-gray-300 rounded border border-gray-300 flex items-center justify-center text-black font-bold">
                          +{product.images.length - 2}
                        </div>
                      )}
                    </div>
                  )}
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
