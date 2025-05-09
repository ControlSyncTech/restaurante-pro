import { api } from './api';

export const CategoryService = {
  async listar() {
    const response = await api.get('/category');
    return response.data;
  },

  async criar(nome) {
    const response = await api.post('/category', { name: nome });
    return response.data;
  },

  async atualizar(id, novoNome) {
    const response = await api.put(`/category/${id}`, { name: novoNome });
    return response.data;
  },

  async excluir(id) {
    await api.delete(`/category/${id}`);
  }
};
