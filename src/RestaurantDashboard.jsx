import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';

export default function RestaurantDashboard() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('inicio');

  // ✅ Quando login for bem-sucedido
  const handleLoginSuccess = () => {
    setCurrentScreen('dashboard');
    setActiveTab('inicio');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logOut = () => {
    localStorage.removeItem('token');
    setCurrentScreen('welcome');
  };

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onEnterClick={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
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
