import React from 'react';
import { AppContainer, FlexContainer } from '../styles/base/layout';
import { Card, Button } from '../styles/base/components';
import { Heading, Text } from '../styles/base/typography';
import { Input, Label, FormGroup } from '../styles/base/form';
import { User } from 'lucide-react';

export function LoginScreen({ onLogin, username, setUsername, password, setPassword }) {
  return (
    <AppContainer>
      <FlexContainer height="100vh">
        <Card padding="2rem" maxWidth="24rem" textAlign="center" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <Heading level="h2" color="#f97316" fontWeight="800" marginBottom="0.5rem">
            RestaurantePro
          </Heading>
          <Text size="0.9rem" marginBottom="1.5rem">Faça login para continuar</Text>

          <form onSubmit={onLogin} style={{ textAlign: 'left' }}>
            <FormGroup>
              <Label htmlFor="username">Usuário</Label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                padding: '0.5rem 0.75rem'
              }}>
                <User size={20} style={{ color: '#9ca3af', marginRight: '0.5rem' }} />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  style={{
                    border: 'none',
                    outline: 'none',
                    flex: 1,
                    fontSize: '1rem',
                    backgroundColor: 'transparent'
                  }}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup marginBottom="1.5rem">
              <Label htmlFor="password">Senha</Label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                padding: '0.5rem 0.75rem'
              }}>
                <svg width="20" height="20" fill="none" stroke="#9ca3af" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  style={{
                    border: 'none',
                    outline: 'none',
                    flex: 1,
                    fontSize: '1rem',
                    backgroundColor: 'transparent',
                    marginLeft: '0.5rem'
                  }}
                  required
                />
              </div>
            </FormGroup>

            <Button type="submit" fullWidth padding="0.75rem 0" style={{ fontWeight: 'bold' }}>
              Entrar
            </Button>
          </form>
        </Card>
      </FlexContainer>
    </AppContainer>
  );
}
