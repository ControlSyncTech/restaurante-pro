import React from 'react';

interface Props {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo ao</h1>
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">RestaurantePro</h2>
        <p className="text-gray-600 mb-8">Sistema de gerenciamento completo para o seu restaurante</p>
        <button 
          onClick={onEnter}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
        >
          Entrar no Sistema
        </button>
      </div>
    </div>
  );
}