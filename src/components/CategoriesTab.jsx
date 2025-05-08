import React from 'react';
import { Card, Button } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading } from '../styles/base/typography';

export function CategoriesTab() {
  return (
    <Card>
      <FlexContainer justify="space-between" marginBottom="1.5rem">
        <Heading size="1.5rem" marginBottom="0">Categorias</Heading>
        <Button>Nova Categoria</Button>
      </FlexContainer>

      <p>Aqui será exibida a lista de categorias.</p>
    </Card>
  );
}
