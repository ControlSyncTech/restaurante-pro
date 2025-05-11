'use client';

import React, { useEffect, useState } from 'react';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '@/services/categoryService';

interface Category {
  id: string;
  name: string;
}

export default function CategoriasTab() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newName, setNewName] = useState('');
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, newName);
      } else {
        await createCategory(newName);
      }
      setNewName('');
      setEditingCategory(null);
      setShowForm(false);
      loadCategories();
    } catch (error) {
      alert('Erro ao salvar categoria');
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setNewName(category.name);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Deseja realmente excluir esta categoria?')) {
      try {
        await deleteCategory(id);
        loadCategories();
      } catch (error) {
        alert('Erro ao excluir categoria');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Categorias</h2>
        <button
          onClick={() => {
            setEditingCategory(null);
            setNewName('');
            setShowForm(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Nova Categoria
        </button>
      </div>

      {showForm && (
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nome da categoria"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg"
            >
              {editingCategory ? 'Atualizar' : 'Criar'}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setNewName('');
                setEditingCategory(null);
              }}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
            <div className="flex justify-end space-x-2">
              <button onClick={() => handleEdit(cat)} className="text-blue-500 hover:text-blue-700">
                Editar
              </button>
              <button onClick={() => handleDelete(cat.id)} className="text-red-500 hover:text-red-700">
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}