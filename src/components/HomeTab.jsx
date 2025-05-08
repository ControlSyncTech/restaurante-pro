import React from 'react';
import { Card, Button } from '../styles/base/components';
import { FlexContainer } from '../styles/base/layout';
import { Heading, Text } from '../styles/base/typography';
import { Map, Truck, Coffee } from 'lucide-react';

export function HomeTab() {
  return (
    <FlexContainer direction="column" gap="1.5rem">
      <Heading level="h2" marginBottom="0">Painel de Operações</Heading>

      <FlexContainer justify="space-between" gap="1rem" style={{ flexWrap: 'wrap' }}>
        <Card style={{ flex: 1, minWidth: '14rem', textAlign: 'center' }}>
          <Map size={36} color="#f97316" />
          <Heading level="h3" marginBottom="0.5rem">Mapa de Mesas</Heading>
          <Text size="0.875rem" marginBottom="1rem">Visualize as mesas ocupadas e livres</Text>
          <Button fullWidth>Ver Mapa</Button>
        </Card>

        <Card style={{ flex: 1, minWidth: '14rem', textAlign: 'center' }}>
          <Truck size={36} color="#f97316" />
          <Heading level="h3" marginBottom="0.5rem">Delivery</Heading>
          <Text size="0.875rem" marginBottom="1rem">Gerencie pedidos para entrega</Text>
          <Button fullWidth>Acessar Delivery</Button>
        </Card>

        <Card style={{ flex: 1, minWidth: '14rem', textAlign: 'center' }}>
          <Coffee size={36} color="#f97316" />
          <Heading level="h3" marginBottom="0.5rem">Mesas Abertas</Heading>
          <Text size="0.875rem" marginBottom="1rem">Pedidos em andamento nas mesas</Text>
          <Button fullWidth>Ver Mesas</Button>
        </Card>
      </FlexContainer>
    </FlexContainer>
  );
}
