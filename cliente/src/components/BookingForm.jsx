import React, { useState } from 'react';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    { id: 'corte-clasico', name: 'Corte Clásico' },
    { id: 'corte-premium', name: 'Corte Premium' },
    { id: 'afeitado', name: 'Afeitado Tradicional' },
    { id: 'tratamiento', name: 'Tratamiento Capilar' },
    { id: 'barba', name: 'Arreglo de Barba' },
    { id: 'completo', name: 'Paquete Completo' },
  ];

  const barbers = [
    { id: 'juan', name: 'Juan Pérez', specialty: 'Cortes clásicos' },
    { id: 'carlos', name: 'Carlos Gómez', specialty: 'Estilos modernos' },
    { id: 'miguel', name: 'Miguel Rodríguez', specialty: 'Barbas y afeitados' },
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <section id="reservas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reserva tu Cita</h2>
            
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= num ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} transition-colors`}>
                      {num}
                    </div>
                    <span className={`text-sm mt-2 ${step >= num ? 'text-black font-medium' : 'text-gray-500'}`}>
                      {num === 1 ? 'Servicio' : num === 2 ? 'Fecha' : 'Datos'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-1 bg-gray-200 rounded-full">
                <div 
                  className="absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300" 
                  style={{ width: `${(step - 1) * 50}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Selecciona un servicio</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, service: service.id }));
                          nextStep();
                        }}
                        className="p-4 border border-gray-200 rounded-lg hover:border-black transition-colors text-left"
                      >
                        <h3 className="font-medium text-gray-900">{service.name}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Selecciona tu barbero</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {barbers.map(barber => (
                      <button
                        key={barber.id}
                        onClick={() => setFormData(prev => ({ ...prev, barber: barber.id }))}
                        className={`p-4 border rounded-lg text-left ${formData.barber === barber.id ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'} transition-colors`}
                      >
                        <h3 className="font-medium text-gray-900">{barber.name}</h3>
                        <p className="text-sm text-gray-500">{barber.specialty}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Selecciona una fecha</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>

                {formData.date && (
                  <div>
                    <label className="block text-gray-700 mb-2">Horarios disponibles</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {availableTimes.map(time => (
                        <button
                          key={time}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, time }));
                            nextStep();
                          }}
                          className="py-2 px-3 border border-gray-200 rounded-lg hover:border-black transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Atrás
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Resumen de tu cita</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Servicio:</span>
                      <span className="font-medium">
                        {services.find(s => s.id === formData.service)?.name || 'No seleccionado'}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Barbero:</span>
                      <span className="font-medium">
                        {barbers.find(b => b.id === formData.barber)?.name || 'No seleccionado'}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-medium">
                        {formData.date || 'No seleccionada'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hora:</span>
                      <span className="font-medium">
                        {formData.time || 'No seleccionada'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Nombre completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Correo electrónico</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Notas adicionales (opcional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Confirmar Reserva
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;