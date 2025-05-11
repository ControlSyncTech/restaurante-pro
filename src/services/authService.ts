import api from './api';

export async function login(email: string, password: string) {
  const response = await api.post('/session', { email, password });
  return response.data;
}

export async function me() {
  const response = await api.get('/me');
  return response.data; // ex: { id, name, email }
}
