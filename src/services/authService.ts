// src/services/authService.ts
import api from './api';

export async function login(email: string, password: string) {
  const response = await api.post('/session', { email, password });
  return response.data; // espera: { token, user }
}
