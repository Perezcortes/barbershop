// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent'; // Importar el nuevo componente de registro
import HomeSection from './components/HomeSection';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
  // Función para manejar el clic en el botón "INGRESAR"
  const handleAdminClick = () => {
    console.log('Botón INGRESAR clickeado');
  };

  return (
    <Router>
      <NavbarComponent onAdminClick={handleAdminClick} />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
