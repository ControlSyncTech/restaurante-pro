import api from './api';

export async function getCategories() {
  const res = await api.get('/category');
  return res.data;
}

export async function createCategory(name: string) {
  const res = await api.post('/category', { name });
  return res.data;
}

export async function updateCategory(id: string, name: string) {
  const res = await api.put(`/category/${id}`, { name });
  return res.data;
}

export async function deleteCategory(id: string) {
  const res = await api.delete(`/category/${id}`);
  return res.data;
}
