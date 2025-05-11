'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Pencil, Trash } from 'lucide-react';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';
import { getCategories } from '../services/categoryService';

interface Product {
  id: string;
  name: string;
  price: number;
  category: {
    name: string;
  };
  quantity: number;
  description?: string;
}

interface Category {
  id: string;
  name: string;
}

export default function ProdutosTab() {
  const searchParams = useSearchParams();
  const categoriaFiltrada = searchParams.get('categoria');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState({ name: '', price: '', category: '', quantity: '', description: '' });
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      const filtrados = categoriaFiltrada
        ? data.filter((p: Product) => p.category.name === categoriaFiltrada)
        : data;
      setProducts(filtrados);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    loadProducts();
    getCategories().then(setCategories);
  }, [categoriaFiltrada]);

  const handleSubmit = async () => {
    try {
      const selectedCategory = categories.find(c => c.id === form.category);
      if (!selectedCategory) {
        alert('Categoria inválida.');
        return;
      }

      const payload = {
        name: form.name,
        price: parseFloat(form.price),
        category_name: selectedCategory.name,
        quantity: parseInt(form.quantity, 10),
        description: form.description || '',
        banner: '',
      };

      if (editing) {
        await updateProduct(editing.id, payload);
      } else {
        await createProduct(payload);
      }

      setForm({ name: '', price: '', category: '', quantity: '', description: '' });
      setEditing(null);
      setShowForm(false);
      loadProducts();
    } catch (error: any) {
      console.error('Erro completo:', error);
      alert(error?.response?.data?.message || 'Erro ao salvar produto');
    }
  };

  const handleEdit = (product: Product) => {
    const matchedCategory = categories.find(c => c.name === product.category.name);
    setEditing(product);
    setForm({
      name: product.name,
      price: product.price.toString(),
      category: matchedCategory?.id || '',
      quantity: product.quantity.toString(),
      description: product.description || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Deseja realmente excluir este produto?')) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (error) {
        alert('Erro ao excluir produto');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">
            {categoriaFiltrada ? `Produtos: ${categoriaFiltrada}` : 'Lista de Produtos'}
          </h2>
          {categoriaFiltrada && (
            <button
              onClick={() => window.location.href = '/produtos'}
              className="text-sm text-orange-600 hover:underline"
            >
              Ver todos
            </button>
          )}
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ name: '', price: '', category: '', quantity: '', description: '' });
            setShowForm(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Novo Produto
        </button>
      </div>

      {showForm && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="">Selecione uma categoria</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preço</label>
            <input
              type="number"
              placeholder="Preço"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
            <input
              type="number"
              placeholder="Quantidade"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="md:col-span-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição (opcional)</label>
            <textarea
              placeholder="Adicione uma descrição do produto"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full"
              rows={3}
            />
          </div>
          <div className="col-span-full flex gap-2 mt-2">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg"
            >
              {editing ? 'Atualizar' : 'Criar'}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditing(null);
                setForm({ name: '', price: '', category: '', quantity: '', description: '' });
              }}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left">
              <th className="py-3 px-4 font-semibold">Nome</th>
              <th className="py-3 px-4 font-semibold">Categoria</th>
              <th className="py-3 px-4 font-semibold">Preço</th>
              <th className="py-3 px-4 font-semibold">Quantidade</th>
              <th className="py-3 px-4 font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category.name}</td>
                <td className="py-3 px-4">R$ {product.price.toFixed(2)}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700">
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
