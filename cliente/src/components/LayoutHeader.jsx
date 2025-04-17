// src/components/LayoutHeader.jsx
import React from 'react';

const LayoutHeader = ({ onAdminClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <h1 className="text-2xl font-bold text-gray-900">Pasión y Estilo</h1>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#servicios" className="text-gray-700 hover:text-black transition-colors">Servicios</a>
          <a href="#galeria" className="text-gray-700 hover:text-black transition-colors">Galería</a>
          <a href="#reservas" className="text-gray-700 hover:text-black transition-colors">Reservas</a>
          <a href="#contacto" className="text-gray-700 hover:text-black transition-colors">Contacto</a>
          <button
            onClick={onAdminClick}
            className="ml-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            INGRESAR
          </button>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;
