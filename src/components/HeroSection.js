import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/barber-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Experiencia Premium en Barbería</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Donde el estilo se encuentra con la tradición</p>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
          Reservar Ahora
        </button>
      </div>
    </section>
  );
};

export default HeroSection;