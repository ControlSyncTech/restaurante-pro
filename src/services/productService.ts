import api from './api';

interface ProductPayload {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

export async function getProducts() {
  const res = await api.get('/product');
  return res.data;
}

export async function createProduct(data: ProductPayload) {
  const res = await api.post('/product', data);
  return res.data;
}

export async function updateProduct(id: string, data: ProductPayload) {
  const res = await api.put(`/product/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: string) {
  const res = await api.delete(`/product/${id}`);
  return res.data;
}
