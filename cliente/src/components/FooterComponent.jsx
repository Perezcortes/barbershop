import React from 'react';
import '../styles/FooterComponent.css'; // Asegúrate de tener este archivo CSS creado

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Pasión y Estilo</h3>
            <p className="footer-text">
              Barbería premium con los más altos estándares de calidad y estilo.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Horario</h4>
            <ul>  
              <li>Lunes - Viernes: 9am - 7pm</li>
              <li>Sábado: 10am - 5pm</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul>
              <li>Av. Principal 123</li>
              <li>contacto@pasionestilo.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pasión y Estilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
