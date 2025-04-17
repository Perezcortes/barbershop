// Datos simulados para la barbería
export const services = [
  { id: 'corte-clasico', name: 'Corte Clásico', price: 25, duration: 30 },
  { id: 'corte-premium', name: 'Corte Premium', price: 35, duration: 45 },
  { id: 'afeitado', name: 'Afeitado Tradicional', price: 30, duration: 40 },
  { id: 'tratamiento', name: 'Tratamiento Capilar', price: 40, duration: 60 },
  { id: 'barba', name: 'Arreglo de Barba', price: 20, duration: 25 },
  { id: 'completo', name: 'Paquete Completo', price: 60, duration: 90 },
];

export const barbers = [
  { id: 'juan', name: 'Juan Pérez', specialty: 'Cortes clásicos', bio: 'Con más de 10 años de experiencia en cortes tradicionales.' },
  { id: 'carlos', name: 'Carlos Gómez', specialty: 'Estilos modernos', bio: 'Especialista en tendencias actuales y cortes de vanguardia.' },
  { id: 'miguel', name: 'Miguel Rodríguez', specialty: 'Barbas y afeitados', bio: 'Maestro del afeitado tradicional y diseño de barbas.' },
];

export const galleryImages = [
  { id: 1, src: '/gallery1.jpg', category: 'cortes', title: 'Corte Clásico' },
  { id: 2, src: '/gallery2.jpg', category: 'barbas', title: 'Barba Estilizada' },
  { id: 3, src: '/gallery3.jpg', category: 'afeitados', title: 'Afeitado Tradicional' },
  { id: 4, src: '/gallery4.jpg', category: 'cortes', title: 'Corte Moderno' },
  { id: 5, src: '/gallery5.jpg', category: 'barbas', title: 'Diseño de Barba' },
  { id: 6, src: '/gallery6.jpg', category: 'afeitados', title: 'Afeitado de Lujo' },
  { id: 7, src: '/gallery7.jpg', category: 'cortes', title: 'Corte Degradado' },
  { id: 8, src: '/gallery8.jpg', category: 'barbas', title: 'Barba Recortada' },
];

export const workingHours = {
  days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  start: 9,
  end: 19,
  breakStart: 13,
  breakEnd: 14,
  saturdayEnd: 17
};

// DONE