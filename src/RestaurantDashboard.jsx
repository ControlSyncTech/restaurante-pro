import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';

export default function RestaurantDashboard() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('produtos');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setCurrentScreen('dashboard');
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logOut = () => {
    setCurrentScreen('welcome');
    setUsername('');
    setPassword('');
  };

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onEnterClick={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return (
      <LoginScreen
        onLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    );
  }

  return (
    <Dashboard
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuOpen={menuOpen}
      toggleMenu={toggleMenu}
      logOut={logOut}
    />
  );
}
