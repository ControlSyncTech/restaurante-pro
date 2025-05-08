import React from 'react';
import { Card, Button } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading } from '../styles/base/typography';

export function ProductsTab() {
  return (
    <Card>
      <FlexContainer justify="space-between" marginBottom="1.5rem">
        <Heading size="1.5rem" marginBottom="0">Lista de Produtos</Heading>
        <Button>Novo Produto</Button>
      </FlexContainer>

      <p>Aqui será exibida a tabela de produtos.</p>
    </Card>
  );
}
