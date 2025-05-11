'use client';

import React from 'react';
import { User } from 'lucide-react';
import { login } from '@/services/authService';

interface Props {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  onLoginSuccess: () => void;
}

export default function LoginScreen({ username, password, setUsername, setPassword, onLoginSuccess }: Props) {
  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      onLoginSuccess();
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-orange-500">RestaurantePro</h2>
          <p className="text-gray-600 mt-2">Faça login para continuar</p>
        </div>

        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuário
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <User size={20} className="text-gray-400 mr-2" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 outline-none"
                placeholder="Digite seu usuário"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none"
                placeholder="Digite sua senha"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
