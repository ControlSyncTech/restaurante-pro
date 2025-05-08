import React from 'react';
import { AppContainer, FlexContainer } from '../styles/base/layout';
import { Card, Button } from '../styles/base/components';
import { Heading, Text } from '../styles/base/typography';

export function WelcomeScreen({ onEnterClick }) {
  return (
    <AppContainer>
      <FlexContainer height="100vh">
        <Card padding="2rem" maxWidth="26rem" textAlign="center" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
          <Heading level="h2" fontWeight="700" marginBottom="0.25rem">
            Bem-vindo ao
          </Heading>

          <Heading level="h1" color="#f97316" fontWeight="800" marginBottom="1rem">
            RestaurantePro
          </Heading>

          <Text marginBottom="2rem" size="1rem">
            Sistema de gerenciamento completo para o seu restaurante
          </Text>

          <Button onClick={onEnterClick} fullWidth padding="0.75rem 0" style={{ fontWeight: 'bold' }}>
            Entrar no Sistema
          </Button>
        </Card>
      </FlexContainer>
    </AppContainer>
  );
}
