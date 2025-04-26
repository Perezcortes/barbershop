import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import '../styles/FooterComponent.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">Pasión y Estilo</h3>
            <p className="footer-description">
              Barbería premium con los más altos estándares de calidad y estilo.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title"><FaClock className="footer-icon" /> Horario</h4>
            <ul className="footer-list">  
              <li>Lunes - Viernes: 9am - 7pm</li>
              <li>Sábado: 10am - 5pm</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Contacto</h4>
            <ul className="footer-list">
              <li><FaMapMarkerAlt className="footer-icon" /> Av. Principal 123</li>
              <li><FaEnvelope className="footer-icon" /> contacto@pasionestilo.com</li>
              <li><FaPhoneAlt className="footer-icon" /> +1 234 567 890</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Síguenos</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp className="social-icon" />
              </a>
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