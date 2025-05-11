import React from 'react';

export default function RelatoriosTab() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Relatórios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-700 mb-4">Vendas do Mês</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Gráfico de vendas do mês</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-700 mb-4">Produtos Mais Vendidos</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Gráfico de produtos mais vendidos</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-700">Vendas Recentes</h3>
          <button className="text-blue-500 hover:text-blue-700 text-sm">Ver todos</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-600 text-left">
                <th className="py-2 px-4 font-medium">Nº Pedido</th>
                <th className="py-2 px-4 font-medium">Data</th>
                <th className="py-2 px-4 font-medium">Cliente</th>
                <th className="py-2 px-4 font-medium">Total</th>
                <th className="py-2 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4">#1234</td>
                <td className="py-2 px-4">06/05/2025</td>
                <td className="py-2 px-4">João Silva</td>
                <td className="py-2 px-4">R$ 87,50</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Entregue</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4">#1233</td>
                <td className="py-2 px-4">06/05/2025</td>
                <td className="py-2 px-4">Maria Oliveira</td>
                <td className="py-2 px-4">R$ 45,80</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Em preparo</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4">#1232</td>
                <td className="py-2 px-4">05/05/2025</td>
                <td className="py-2 px-4">Carlos Santos</td>
                <td className="py-2 px-4">R$ 63,20</td>
                <td className="py-2 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enviado</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
