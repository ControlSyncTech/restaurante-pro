import React, { useEffect, useState } from 'react';
import { CategoryService } from '../services/categoryService';
import { Card, Button, TextButton } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading, Text } from '../styles/base/typography';

export function CategoriesTab() {
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [editando, setEditando] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');

  const carregar = async () => {
    const lista = await CategoryService.listar();
    setCategorias(lista);
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleCriar = async () => {
    if (!novaCategoria) return;
    await CategoryService.criar(novaCategoria);
    setNovaCategoria('');
    carregar();
  };

  const handleAtualizar = async (id) => {
    if (!nomeEditado) return;
    await CategoryService.atualizar(id, nomeEditado);
    setEditando(null);
    setNomeEditado('');
    carregar();
  };

  const handleExcluir = async (id) => {
    await CategoryService.excluir(id);
    carregar();
  };

  return (
    <Card>
      <Heading level="h2" marginBottom="1.5rem">Categorias</Heading>

      <FlexContainer gap="1rem" marginBottom="1.5rem">
        <input
          type="text"
          value={novaCategoria}
          onChange={(e) => setNovaCategoria(e.target.value)}
          placeholder="Nova categoria"
          style={{
            flex: 1,
            padding: '0.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem'
          }}
        />
        <Button onClick={handleCriar}>Adicionar</Button>
      </FlexContainer>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categorias.map((cat) => (
          <li key={cat.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem'
          }}>
            {editando === cat.id ? (
              <>
                <input
                  type="text"
                  value={nomeEditado}
                  onChange={(e) => setNomeEditado(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.4rem',
                    marginRight: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '0.5rem'
                  }}
                />
                <Button onClick={() => handleAtualizar(cat.id)}>Salvar</Button>
                <Button onClick={() => setEditando(null)} secondary>Cancelar</Button>
              </>
            ) : (
              <>
                <Text size="1rem" marginBottom="0">{cat.name}</Text>
                <FlexContainer gap="0.5rem" justify="flex-end">
                  <TextButton color="#3b82f6" onClick={() => {
                    setEditando(cat.id);
                    setNomeEditado(cat.name);
                  }}>Editar</TextButton>
                  <TextButton color="#ef4444" onClick={() => handleExcluir(cat.id)}>Excluir</TextButton>
                </FlexContainer>
              </>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
