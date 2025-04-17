import React from 'react';

const ServicesSection = () => {
  const services = [
    { name: 'Corte Clásico', price: '$25', duration: '30 min' },
    { name: 'Corte Premium', price: '$35', duration: '45 min' },
    { name: 'Afeitado Tradicional', price: '$30', duration: '40 min' },
    { name: 'Tratamiento Capilar', price: '$40', duration: '60 min' },
    { name: 'Arreglo de Barba', price: '$20', duration: '25 min' },
    { name: 'Paquete Completo', price: '$60', duration: '90 min' },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experiencia de barbería premium con los mejores estándares de calidad</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">Duración: {service.duration}</p>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;