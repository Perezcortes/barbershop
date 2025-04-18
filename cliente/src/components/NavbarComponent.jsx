// NavbarComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarComponent.css';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logobarber.png" alt="Pasión y Estilo Logo" className="logo-image" />
        </div>
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#reservas">Reservas</a>
          <a href="#contacto">Contacto</a>
          {/* Link de React Router para redirigir a /login */}
          <Link to="/login">
            <button>INGRESAR</button>
          </Link>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default NavbarComponent;
