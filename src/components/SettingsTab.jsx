import React from 'react';
import { Card, Button } from '../styles/base/components';
import { Heading } from '../styles/base/typography';

export function SettingsTab() {
  return (
    <Card>
      <Heading size="1.5rem" marginBottom="1rem">Configurações</Heading>
      <Button>Salvar Configurações</Button>
    </Card>
  );
}
