// Pasta: components/Dashboard/index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProdutosTab from '../ProdutosTab';
import CategoriasTab from '../CategoriasTab';
import RelatoriosTab from '../RelatoriosTab';
import ConfiguracoesTab from '../ConfiguracoesTab';
import MesasComandasTab from '../MesasComandasTab';
import { me } from '@/services/authService';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pedidos');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) setActiveTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    async function validateToken() {
      try {
        await me();
        setLoading(false);
      } catch {
        router.push('/login');
      }
    }

    validateToken();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Validando acesso...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        menuOpen={menuOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {activeTab === 'pedidos' && <MesasComandasTab />}
          {activeTab === 'relatorios' && <RelatoriosTab />}
          {activeTab === 'categorias' && <CategoriasTab />}
          {activeTab === 'produtos' && <ProdutosTab />}
          {activeTab === 'configuracoes' && <ConfiguracoesTab />}
        </main>
      </div>
    </div>
  );
}
