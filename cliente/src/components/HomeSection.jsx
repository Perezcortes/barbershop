import React from 'react';
import '../styles/HomeSection.css'; // Asegúrate de que el archivo esté en la misma carpeta

const HomeSection = () => {
  return (  
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src="/barber-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h1>Experiencia Premium en Barbería</h1>
        <p>Donde el estilo se encuentra con la tradición</p>
        <button>Reservar Ahora</button>
      </div>
    </section>
  );
};

export default HomeSection;
