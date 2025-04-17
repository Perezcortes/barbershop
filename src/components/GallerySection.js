import React, { useState } from 'react';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'cortes', name: 'Cortes' },
    { id: 'barbas', name: 'Barbas' },
    { id: 'afeitados', name: 'Afeitados' },
  ];

  const images = [
    { id: 1, src: '/gallery1.jpg', category: 'cortes' },
    { id: 2, src: '/gallery2.jpg', category: 'barbas' },
    { id: 3, src: '/gallery3.jpg', category: 'afeitados' },
    { id: 4, src: '/gallery4.jpg', category: 'cortes' },
    { id: 5, src: '/gallery5.jpg', category: 'barbas' },
    { id: 6, src: '/gallery6.jpg', category: 'afeitados' },
    { id: 7, src: '/gallery7.jpg', category: 'cortes' },
    { id: 8, src: '/gallery8.jpg', category: 'barbas' },
  ];

  const filteredImages = activeCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galería de Estilos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Inspírate con nuestros trabajos más recientes</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full ${activeCategory === category.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={image.src} 
                alt={`Estilo de barbería ${image.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-4 py-2 rounded-full">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;