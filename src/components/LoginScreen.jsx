import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { AppContainer, FlexContainer } from '../styles/base/layout';
import { Card, Button } from '../styles/base/components';
import { Heading, Text } from '../styles/base/typography';
import { Input, Label, FormGroup } from '../styles/base/form';
import { api } from '../services/api';

export function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const response = await api.post('/session', {
        email: username,
        password: password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      onLoginSuccess(); // avisa o componente pai que logou
    } catch (error) {
      console.error('Erro ao logar:', error);
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <AppContainer>
      <FlexContainer height="100vh">
        <Card padding="2rem" maxWidth="26rem" textAlign="center">
          <Heading level="h2" color="#f97316" fontWeight="800" marginBottom="0.5rem">
            RestaurantePro
          </Heading>
          <Text size="0.9rem" marginBottom="1.5rem">Faça login para continuar</Text>

          {erro && <Text color="#ef4444" marginBottom="1rem">{erro}</Text>}

          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <FormGroup>
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </FormGroup>

            <FormGroup marginBottom="1.5rem">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </FormGroup>

            <Button type="submit" fullWidth padding="0.75rem 0" style={{ fontWeight: 'bold' }}>
              <LogIn size={18} />
              Entrar
            </Button>
          </form>
        </Card>
      </FlexContainer>
    </AppContainer>
  );
}
