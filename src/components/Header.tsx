import React from 'react';
import { User } from 'lucide-react';

interface Props {
  activeTab: string;
}

export default function Header({ activeTab }: Props) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-gray-700">
              <User size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
