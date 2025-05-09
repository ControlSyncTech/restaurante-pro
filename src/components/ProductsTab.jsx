import React, { useEffect, useState } from 'react';
import { ProductService } from '../services/productService';
import { Card, Button, TextButton } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading, Text } from '../styles/base/typography';

export function ProductsTab() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ name: '', price: '', description: '' });
  const [editando, setEditando] = useState(null);
  const [dadosEditados, setDadosEditados] = useState({});

  const carregar = async () => {
    const lista = await ProductService.listar();
    setProdutos(lista);
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleCriar = async () => {
    if (!novoProduto.name || !novoProduto.price) return;
    await ProductService.criar(novoProduto);
    setNovoProduto({ name: '', price: '', description: '' });
    carregar();
  };

  const handleAtualizar = async (id) => {
    await ProductService.atualizar(id, dadosEditados);
    setEditando(null);
    setDadosEditados({});
    carregar();
  };

  const handleExcluir = async (id) => {
    await ProductService.excluir(id);
    carregar();
  };

  return (
    <Card>
      <Heading level="h2" marginBottom="1.5rem">Produtos</Heading>

      <FlexContainer gap="1rem" marginBottom="1.5rem">
        <input
          type="text"
          value={novoProduto.name}
          placeholder="Nome"
          onChange={(e) => setNovoProduto({ ...novoProduto, name: e.target.value })}
        />
        <input
          type="text"
          value={novoProduto.price}
          placeholder="Preço"
          onChange={(e) => setNovoProduto({ ...novoProduto, price: e.target.value })}
        />
        <input
          type="text"
          value={novoProduto.description}
          placeholder="Descrição"
          onChange={(e) => setNovoProduto({ ...novoProduto, description: e.target.value })}
        />
        <Button onClick={handleCriar}>Adicionar</Button>
      </FlexContainer>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {produtos.map((p) => (
          <li key={p.id} style={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid #e5e7eb',
            marginBottom: '1rem',
            paddingBottom: '1rem'
          }}>
            {editando === p.id ? (
              <>
                <input
                  type="text"
                  value={dadosEditados.name || ''}
                  placeholder="Nome"
                  onChange={(e) => setDadosEditados({ ...dadosEditados, name: e.target.value })}
                />
                <input
                  type="text"
                  value={dadosEditados.price || ''}
                  placeholder="Preço"
                  onChange={(e) => setDadosEditados({ ...dadosEditados, price: e.target.value })}
                />
                <input
                  type="text"
                  value={dadosEditados.description || ''}
                  placeholder="Descrição"
                  onChange={(e) => setDadosEditados({ ...dadosEditados, description: e.target.value })}
                />
                <FlexContainer justify="flex-end" gap="1rem">
                  <Button onClick={() => handleAtualizar(p.id)}>Salvar</Button>
                  <Button onClick={() => setEditando(null)} secondary>Cancelar</Button>
                </FlexContainer>
              </>
            ) : (
              <>
                <Text><strong>{p.name}</strong> — R$ {p.price}</Text>
                <Text size="0.9rem">{p.description}</Text>
                <FlexContainer gap="0.5rem" justify="flex-end">
                  <TextButton color="#3b82f6" onClick={() => {
                    setEditando(p.id);
                    setDadosEditados({ name: p.name, price: p.price, description: p.description });
                  }}>Editar</TextButton>
                  <TextButton color="#ef4444" onClick={() => handleExcluir(p.id)}>Excluir</TextButton>
                </FlexContainer>
              </>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
