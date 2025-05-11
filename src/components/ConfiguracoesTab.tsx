import React from 'react';

export default function ConfiguracoesTab() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Configurações</h2>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <h3 className="font-medium text-lg mb-4">Informações do Restaurante</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Restaurante</label>
            <input type="text" defaultValue="RestaurantePro Demo" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
            <input type="text" defaultValue="(11) 9999-9999" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
            <input type="email" defaultValue="contato@restaurantepro.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Endereço</label>
            <input type="text" defaultValue="Av. Principal, 123 - Centro" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <h3 className="font-medium text-lg mb-4">Métodos de Pagamento</h3>
        <div className="space-y-2">
          {['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'PIX'].map((metodo, idx) => (
            <div key={idx} className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" id={`metodo-${idx}`} />
              <label htmlFor={`metodo-${idx}`}>{metodo}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-4">Usuários</h3>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mb-4">
          Adicionar Usuário
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-left">
                <th className="py-3 px-4 font-semibold">Nome</th>
                <th className="py-3 px-4 font-semibold">E-mail</th>
                <th className="py-3 px-4 font-semibold">Perfil</th>
                <th className="py-3 px-4 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[{
                nome: 'Admin', email: 'admin@restaurantepro.com', perfil: 'Administrador'
              }, {
                nome: 'Gerente', email: 'gerente@restaurantepro.com', perfil: 'Gerente'
              }].map((usuario, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-3 px-4">{usuario.nome}</td>
                  <td className="py-3 px-4">{usuario.email}</td>
                  <td className="py-3 px-4">{usuario.perfil}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">Editar</button>
                    <button className="text-red-500 hover:text-red-700">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
