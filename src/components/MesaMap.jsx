import React, { useState } from 'react';
import { Card, Button } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading, Text } from '../styles/base/typography';

const mesasIniciais = [
  { id: 'M01', status: 'livre' },
  { id: 'M02', status: 'ocupada' },
  { id: 'M03', status: 'livre' },
  { id: 'M04', status: 'ocupada' },
  { id: 'M05', status: 'livre' },
  { id: 'M06', status: 'reservada' },
  { id: 'M07', status: 'livre' },
  { id: 'M08', status: 'ocupada' },
  { id: 'M09', status: 'livre' },
  { id: 'M10', status: 'livre' },
  { id: 'M11', status: 'ocupada' },
  { id: 'M12', status: 'livre' },
];

const statusCor = {
  livre: '#10b981',     // verde
  ocupada: '#f97316',   // laranja
  reservada: '#f59e0b', // amarelo
};

export function MesaMap() {
  const [mesas, setMesas] = useState(mesasIniciais);
  const [mesaSelecionada, setMesaSelecionada] = useState(null);

  const handleAbrirMesa = (mesa) => {
    setMesaSelecionada(mesa);
  };

  const confirmarAbertura = () => {
    setMesas(prev =>
      prev.map(m => m.id === mesaSelecionada.id ? { ...m, status: 'ocupada' } : m)
    );
    setMesaSelecionada(null);
  };

  const fecharDetalhes = () => {
    setMesaSelecionada(null);
  };

  const mesasOcupadas = mesas.filter(m => m.status === 'ocupada');

  return (
    <div>
      <Heading level="h3" marginBottom="1rem">Mapa de Mesas</Heading>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
        gap: '1rem',
        justifyItems: 'center'
      }}>
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            onClick={() => mesa.status === 'livre' && handleAbrirMesa(mesa)}
            style={{
              backgroundColor: statusCor[mesa.status],
              color: '#fff',
              borderRadius: '9999px',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
              cursor: mesa.status === 'livre' ? 'pointer' : 'not-allowed',
              opacity: mesa.status === 'livre' ? 1 : 0.7
            }}
          >
            {mesa.id}
          </div>
        ))}
      </div>

      {mesaSelecionada && (
        <Card style={{ marginTop: '2rem' }}>
          <Heading level="h4" marginBottom="0.5rem">Abrir Mesa {mesaSelecionada.id}</Heading>
          <Text>Status atual: {mesaSelecionada.status}</Text>
          <FlexContainer gap="1rem" justify="flex-end">
            <Button onClick={confirmarAbertura}>Confirmar Abertura</Button>
            <Button onClick={fecharDetalhes} secondary>Cancelar</Button>
          </FlexContainer>
        </Card>
      )}

      {mesasOcupadas.length > 0 && (
        <Card style={{ marginTop: '2rem' }}>
          <Heading level="h4" marginBottom="1rem">Mesas Ocupadas</Heading>
          <ul style={{ paddingLeft: '1rem' }}>
            {mesasOcupadas.map((m) => (
              <li key={m.id}>Mesa {m.id} - Ocupada</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
