// Pasta: components/MesasComandasTab.tsx
'use client';

import React, { useState } from 'react';

interface Mesa {
  id: number;
  status: 'livre' | 'ocupada';
}

export default function MesasComandasTab() {
  const [mesas, setMesas] = useState<Mesa[]>(
    Array.from({ length: 12 }, (_, i) => ({ id: i + 1, status: i % 3 === 0 ? 'ocupada' : 'livre' }))
  );
  const [selectedMesa, setSelectedMesa] = useState<Mesa | null>(null);
  const [showNovoPedido, setShowNovoPedido] = useState(false);

  const toggleMesaStatus = (id: number) => {
    setMesas((prev) =>
      prev.map((mesa) =>
        mesa.id === id
          ? {
              ...mesa,
              status: mesa.status === 'livre' ? 'ocupada' : 'livre',
            }
          : mesa
      )
    );
    setSelectedMesa(null);
  };

  const handleMesaClick = (mesa: Mesa) => {
    setSelectedMesa(mesa);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Mesas</h2>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
          onClick={() => setShowNovoPedido(true)}
        >
          Novo Pedido
        </button>
      </div>

      {/* Mapa de Mesas */}
      <div>
        <div className="grid grid-cols-4 gap-4">
          {mesas.map((mesa) => (
            <div
              key={mesa.id}
              onClick={() => handleMesaClick(mesa)}
              className={`flex items-center justify-center h-20 rounded-lg cursor-pointer text-white font-bold transition-colors select-none ${
                mesa.status === 'ocupada' ? 'bg-orange-500' : 'bg-green-500'
              }`}
            >
              Mesa {mesa.id}
            </div>
          ))}
        </div>
      </div>

      {/* Detalhes da Mesa Selecionada */}
      {selectedMesa && (
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
          {selectedMesa.status === 'ocupada' ? (
            <>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Pedido da Mesa {selectedMesa.id}</h3>
              <p className="text-sm text-gray-600">Visualização dos itens e status do pedido (mock).</p>
              <button
                onClick={() => toggleMesaStatus(selectedMesa.id)}
                className="mt-4 text-sm text-red-500 hover:underline"
              >
                Liberar Mesa
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Abrir Mesa {selectedMesa.id}?</h3>
              <button
                onClick={() => toggleMesaStatus(selectedMesa.id)}
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
              >
                Confirmar
              </button>
            </>
          )}
        </div>
      )}

      {/* Modal Opções de Pedido */}
      {showNovoPedido && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Escolher tipo de pedido</h3>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">Mesa</button>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Retirada</button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">Entrega</button>
            <button
              onClick={() => setShowNovoPedido(false)}
              className="w-full text-sm text-gray-500 hover:underline mt-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Retiradas / Comandas para Entrega */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-700">Retiradas / Delivery</h3>
          <button className="text-blue-500 hover:text-blue-700 text-sm">Ver todos</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="text-xs text-gray-500 uppercase">
                <th className="px-4 py-2">Nº Pedido</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">#1451</td>
                <td className="px-4 py-2">Ana Paula</td>
                <td className="px-4 py-2">R$ 42,00</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Entregue
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">#1450</td>
                <td className="px-4 py-2">Bruno Lima</td>
                <td className="px-4 py-2">R$ 58,90</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Em preparo
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">#1451</td>
                <td className="px-4 py-2">Lucas Miguel</td>
                <td className="px-4 py-2">R$ 64,90</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Em preparo
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
