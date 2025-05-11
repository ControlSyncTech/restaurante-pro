'use client';

import React, { useEffect, useState } from 'react';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

export default function ProdutosTab() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: '', price: '', category: '', quantity: '' });
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async () => {
    try {
      const payload = {
        name: form.name,
        price: parseFloat(form.price),
        category: form.category,
        quantity: parseInt(form.quantity, 10),
      };

      if (editing) {
        await updateProduct(editing.id, payload);
      } else {
        await createProduct(payload);
      }

      setForm({ name: '', price: '', category: '', quantity: '' });
      setEditing(null);
      setShowForm(false);
      loadProducts();
    } catch (error) {
      alert('Erro ao salvar produto');
    }
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      quantity: product.quantity.toString(),
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
        <h2 className="text-xl font-semibold">Lista de Produtos</h2>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ name: '', price: '', category: '', quantity: '' });
            setShowForm(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Novo Produto
        </button>
      </div>

      {showForm && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Categoria"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="Preço"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          />
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
                setForm({ name: '', price: '', category: '', quantity: '' });
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
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">R$ {product.price.toFixed(2)}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700">Editar</button>
                  <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}