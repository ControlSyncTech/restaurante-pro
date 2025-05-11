'use client';

import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProdutosTab from '../ProdutosTab';
import CategoriasTab from '../CategoriasTab';
import RelatoriosTab from '../RelatoriosTab';
import ConfiguracoesTab from '../ConfiguracoesTab';

interface Props {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('produtos');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        menuOpen={menuOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onLogout={onLogout}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {activeTab === 'produtos' && <ProdutosTab />}
          {activeTab === 'categorias' && <CategoriasTab />}
          {activeTab === 'relatorios' && <RelatoriosTab />}
          {activeTab === 'configuracoes' && <ConfiguracoesTab />}
        </main>
      </div>
    </div>
  );
}
