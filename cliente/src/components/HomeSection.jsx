import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/HomeSection.css';

const HomeSection = () => {
  return (
    <section className="home-hero-section">
      <div className="home-video-background">
        <video autoPlay loop muted playsInline className="home-video">
          <source src="/barber-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-overlay"></div>
      </div>
      
      <div className="home-content">
        <div className="home-text-content">
          <h1 className="home-title">Experiencia Premium en Barbería</h1>
          <p className="home-subtitle">Donde el estilo se encuentra con la tradición</p>
          <div className="home-cta-container">
            <Link to="/booking">
              <button className="home-cta-button home-primary-btn">
                Reservar Ahora <FiArrowRight className="home-button-icon" />
              </button>
            </Link>
            <a href="#services" className="home-secondary-button">
              Nuestros Servicios
            </a>
          </div>
        </div>
        
        <div className="home-social-proof">
          <div className="home-rating">
            <span className="home-stars">★★★★★</span>
            <span>4.9/5 en 250+ reseñas</span>
          </div>
          <div className="home-trust-badges">
            <span>Profesionales certificados</span>
            <span>•</span>
            <span>5 años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;