import React, { useState } from 'react';
import { FiScissors, FiUser, FiCalendar, FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Servicios disponibles
  const bfServices = [
    { id: 'classic', name: 'Corte Clásico', icon: <FiScissors /> },
    { id: 'premium', name: 'Corte Premium', icon: <FiScissors /> },
    { id: 'beard', name: 'Arreglo de Barba', icon: <FiScissors /> },
    { id: 'full', name: 'Servicio Completo', icon: <FiScissors /> }
  ];

  // Barberos disponibles
  const bfBarbers = [
    { id: 'juan', name: 'Juan Pérez', specialty: 'Estilos clásicos', avatar: 'JP' },
    { id: 'carlos', name: 'Carlos Gómez', specialty: 'Cortes modernos', avatar: 'CG' },
    { id: 'miguel', name: 'Miguel Rodríguez', specialty: 'Barbas', avatar: 'MR' }
  ];

  // Generar días del mes actual
  const bfGenerateDays = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = new Date(year, month, i + 1);
      return {
        date: day,
        disabled: day < new Date(new Date().setHours(0, 0, 0, 0))
      };
    });
  };

  // Generar horarios disponibles
  const bfGenerateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 18; hour++) {
      slots.push(`${hour}:00`, `${hour}:30`);
    }
    return slots;
  };

  const bfDays = bfGenerateDays();
  const bfTimeSlots = bfGenerateTimeSlots();

  const bfHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const bfNextStep = () => setStep(prev => prev + 1);
  const bfPrevStep = () => setStep(prev => prev - 1);

  const bfHandleDateSelect = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const bfHandleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva confirmada:', formData);
    alert('¡Reserva confirmada con éxito!');
  };

  return (
    <div className="bf-container">
      <div className="bf-card">
        <div className="bf-header">
          <h2 className="bf-title">Reserva tu Cita</h2>
          <div className="bf-progress-steps">
            <div className={`bf-step ${step >= 1 ? 'bf-active' : ''}`}>
              <div className="bf-step-number">1</div>
              <span className="bf-step-label">Servicio</span>
            </div>
            <div className={`bf-step ${step >= 2 ? 'bf-active' : ''}`}>
              <div className="bf-step-number">2</div>
              <span className="bf-step-label">Fecha/Hora</span>
            </div>
            <div className={`bf-step ${step >= 3 ? 'bf-active' : ''}`}>
              <div className="bf-step-number">3</div>
              <span className="bf-step-label">Tus Datos</span>
            </div>
          </div>
        </div>

        <form onSubmit={bfHandleSubmit} className="bf-form">
          {step === 1 && (
            <div className="bf-form-step">
              <h3 className="bf-step-title"><FiScissors /> Selecciona tu corte</h3>
              <div className="bf-services-grid">
                {bfServices.map(service => (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.id }));
                      bfNextStep();
                    }}
                    className={`bf-service-card ${formData.service === service.id ? 'bf-selected' : ''}`}
                  >
                    <span className="bf-service-icon">{service.icon}</span>
                    <span className="bf-service-name">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bf-form-step">
              <div className="bf-step-section">
                <h3 className="bf-step-title"><FiUser /> Elige tu barbero</h3>
                <div className="bf-barbers-grid">
                  {bfBarbers.map(barber => (
                    <button
                      type="button"
                      key={barber.id}
                      onClick={() => setFormData(prev => ({ ...prev, barber: barber.id }))}
                      className={`bf-barber-card ${formData.barber === barber.id ? 'bf-selected' : ''}`}
                    >
                      <div className="bf-barber-avatar">{barber.avatar}</div>
                      <div className="bf-barber-info">
                        <h4 className="bf-barber-name">{barber.name}</h4>
                        <p className="bf-barber-specialty">{barber.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bf-step-section">
                <h3 className="bf-step-title"><FiCalendar /> Selecciona fecha</h3>
                <div className="bf-calendar-container">
                  <div className="bf-calendar-header">
                    <button type="button" className="bf-calendar-nav" onClick={() => {}}>
                      <FiChevronLeft />
                    </button>
                    <h4 className="bf-calendar-month">{new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</h4>
                    <button type="button" className="bf-calendar-nav" onClick={() => {}}>
                      <FiChevronRight />
                    </button>
                  </div>
                  <div className="bf-calendar-grid">
                    {bfDays.map((day, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => bfHandleDateSelect(day.date)}
                        disabled={day.disabled}
                        className={`bf-calendar-day ${formData.date && day.date.toDateString() === formData.date.toDateString() ? 'bf-selected' : ''}`}
                      >
                        {day.date.getDate()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {formData.date && (
                <div className="bf-step-section">
                  <h3 className="bf-step-title"><FiClock /> Horario disponible</h3>
                  <div className="bf-time-slots">
                    {bfTimeSlots.map((time, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, time }));
                          bfNextStep();
                        }}
                        className={`bf-time-slot ${formData.time === time ? 'bf-selected' : ''}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bf-form-navigation">
                <button type="button" onClick={bfPrevStep} className="bf-back-button">
                  <FiChevronLeft /> Atrás
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bf-form-step">
              <div className="bf-booking-summary">
                <h3 className="bf-summary-title">Resumen de tu reserva</h3>
                <div className="bf-summary-card">
                  <div className="bf-summary-item">
                    <span className="bf-summary-label">Servicio:</span>
                    <strong className="bf-summary-value">{bfServices.find(s => s.id === formData.service)?.name}</strong>
                  </div>
                  <div className="bf-summary-item">
                    <span className="bf-summary-label">Barbero:</span>
                    <strong className="bf-summary-value">{bfBarbers.find(b => b.id === formData.barber)?.name}</strong>
                  </div>
                  <div className="bf-summary-item">
                    <span className="bf-summary-label">Fecha:</span>
                    <strong className="bf-summary-value">{formData.date?.toLocaleDateString('es-ES')}</strong>
                  </div>
                  <div className="bf-summary-item">
                    <span className="bf-summary-label">Hora:</span>
                    <strong className="bf-summary-value">{formData.time}</strong>
                  </div>
                </div>
              </div>

              <div className="bf-form-group">
                <label className="bf-input-label">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={bfHandleChange}
                  className="bf-input-field"
                  required
                />
              </div>

              <div className="bf-form-group">
                <label className="bf-input-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={bfHandleChange}
                  className="bf-input-field"
                  required
                />
              </div>

              <div className="bf-form-group">
                <label className="bf-input-label">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={bfHandleChange}
                  className="bf-input-field"
                  required
                />
              </div>

              <div className="bf-form-group">
                <label className="bf-input-label">Notas adicionales (opcional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={bfHandleChange}
                  className="bf-textarea-field"
                  rows="3"
                ></textarea>
              </div>

              <div className="bf-form-navigation">
                <button type="button" onClick={bfPrevStep} className="bf-back-button">
                  <FiChevronLeft /> Atrás
                </button>
                <button type="submit" className="bf-submit-button">
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;