import { api } from './api';

export const ProductService = {
  async listar() {
    const response = await api.get('/product');
    return response.data;
  },

  async criar(produto) {
    const response = await api.post('/product', produto);
    return response.data;
  },

  async atualizar(id, dados) {
    const response = await api.put(`/product/${id}`, dados);
    return response.data;
  },

  async excluir(id) {
    await api.delete(`/product/${id}`);
  }
};
