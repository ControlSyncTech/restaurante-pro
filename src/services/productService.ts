import api from './api';

// Tipagem separada para criação
export interface ProductCreatePayload {
  name: string;
  price: number;
  category_name: string;
  quantity: number;
  description?: string;
  banner?: string;
}

// Tipagem separada para atualização
export interface ProductUpdatePayload {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  banner?: string;
}

export async function getProducts() {
  const res = await api.get('/product');
  return res.data;
}

export async function createProduct(data: ProductCreatePayload) {
  const res = await api.post('/product', data);
  return res.data;
}

export async function updateProduct(id: string, data: ProductUpdatePayload) {
  const res = await api.put(`/product/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: string) {
  const res = await api.delete(`/product/${id}`);
  return res.data;
}
