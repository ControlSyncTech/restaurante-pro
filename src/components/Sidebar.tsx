'use client';

import React from 'react';
import { Menu, ShoppingBag, Grid, BarChart2, Settings, LogOut } from 'lucide-react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface Props {
  menuOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onToggleMenu: () => void;
}

export default function Sidebar({ menuOpen, activeTab, onTabChange, onToggleMenu }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className={`${menuOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {menuOpen && (
          <span className="font-bold text-xl text-orange-400">RestaurantePro</span>
        )}
        <button onClick={onToggleMenu} className="p-2 rounded-lg hover:bg-gray-700">
          <Menu size={24} />
        </button>
      </div>

      <nav className="flex-1">
        <ul className="pt-2">
          {([
            ['relatorios', BarChart2],
            ['categorias', Grid],
            ['produtos', ShoppingBag],
            ['configuracoes', Settings]
          ] as [string, React.ElementType][]).map(([tab, Icon]) => (
            <li key={tab}>
              <button
                onClick={() => onTabChange(tab)}
                className={`flex items-center p-4 w-full hover:bg-gray-700 ${
                  activeTab === tab ? 'bg-gray-700 border-l-4 border-orange-500' : ''
                }`}
              >
                <Icon size={24} className="text-gray-400" />
                {menuOpen && <span className="ml-4 capitalize">{tab}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-gray-700"
        >
          <LogOut size={24} className="text-gray-400" />
          {menuOpen && <span className="ml-2">Sair</span>}
        </button>
      </div>
    </div>
  );
}
