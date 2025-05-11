'use client';

import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import LoginScreen from '@/components/LoginScreen';
import Dashboard from '@/components/Dashboard';

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'login' | 'dashboard'>('welcome');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setCurrentScreen('dashboard');
    }
  };

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onEnter={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return (
      <LoginScreen
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onLoginSuccess={handleLogin}
      />

    );
  }

  return <Dashboard onLogout={() => setCurrentScreen('welcome')} />;
}
