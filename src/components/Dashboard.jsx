import React from 'react';
import {
  Menu, LogOut, User, ShoppingBag, Grid, Settings, BarChart2, Home
} from 'lucide-react';

import { FlexContainer } from '../styles/base/layout';
import { Card, Button } from '../styles/base/components';
import { Heading } from '../styles/base/typography';

import { HomeTab } from './HomeTab';
import { ProductsTab } from './ProductsTab';
import { CategoriesTab } from './CategoriesTab';
import { ReportsTab } from './ReportsTab';
import { SettingsTab } from './SettingsTab';

export function Dashboard({ activeTab, setActiveTab, menuOpen, toggleMenu, logOut }) {
  return (
    <FlexContainer align="stretch" height="100vh">
      {/* Sidebar */}
      <div style={{
        width: menuOpen ? '16rem' : '5rem',
        backgroundColor: '#1f2937',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s'
      }}>
        <div style={{
          padding: '1rem',
          display: 'flex',
          justifyContent: menuOpen ? 'space-between' : 'center',
          alignItems: 'center',
          borderBottom: '1px solid #374151'
        }}>
          {menuOpen && <strong style={{ color: '#f97316' }}>RestaurantePro</strong>}
          <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <Menu size={20} />
          </button>
        </div>

        <nav style={{ flex: 1 }}>
          <SidebarItem icon={<Home size={20} />} label="Início" isOpen={menuOpen} active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} />
          <SidebarItem icon={<Grid size={20} />} label="Categorias" isOpen={menuOpen} active={activeTab === 'categorias'} onClick={() => setActiveTab('categorias')} />
          <SidebarItem icon={<ShoppingBag size={20} />} label="Produtos" isOpen={menuOpen} active={activeTab === 'produtos'} onClick={() => setActiveTab('produtos')} />
          <SidebarItem icon={<BarChart2 size={20} />} label="Relatórios" isOpen={menuOpen} active={activeTab === 'relatorios'} onClick={() => setActiveTab('relatorios')} />
          <SidebarItem icon={<Settings size={20} />} label="Configurações" isOpen={menuOpen} active={activeTab === 'configuracoes'} onClick={() => setActiveTab('configuracoes')} />
        </nav>

        <div style={{ padding: '1rem', borderTop: '1px solid #374151' }}>
          <Button onClick={logOut} secondary fullWidth gap="0.5rem">
            <LogOut size={20} />
            {menuOpen && <span>Sair</span>}
          </Button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Heading level="h2" marginBottom="0">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </Heading>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '2.5rem',
            width: '2.5rem',
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            color: '#4b5563',
            cursor: 'pointer',
          }}>
            <User size={20} />
          </div>
        </header>

        <main style={{ padding: '1.5rem', backgroundColor: '#f3f4f6', flex: 1, overflowY: 'auto' }}>
          {activeTab === 'inicio' && <HomeTab />}
          {activeTab === 'produtos' && <ProductsTab />}
          {activeTab === 'categorias' && <CategoriesTab />}
          {activeTab === 'relatorios' && <ReportsTab />}
          {activeTab === 'configuracoes' && <SettingsTab />}
        </main>
      </div>
    </FlexContainer>
  );
}

function SidebarItem({ icon, label, isOpen, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        background: active ? '#374151' : 'transparent',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderLeft: active ? '4px solid #f97316' : 'none'
      }}
    >
      <div style={{ marginRight: isOpen ? '1rem' : '0' }}>{icon}</div>
      {isOpen && <span>{label}</span>}
    </button>
  );
}
