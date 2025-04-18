import React, { useState } from 'react';
import '../styles/RegisterComponent.css';

const RegisterComponent = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email no válido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    else if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSuccessMessage('¡Registro exitoso! Redirigiendo...');
        setTimeout(() => onRegisterSuccess(), 1500);
      }, 2000);
    }
  };

  return (
    <div className="full-page-container">
          <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Únete a <span className="text-red-600">Pasión</span> y <span className="text-blue-600">Estilo</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">Crea tu cuenta y reserva tu cita en minutos</p>
        </div>

        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-sm text-green-700">{successMessage}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          <div className="button-container">
            <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
        </form>

        <div className="footer-links">
          <span>¿Ya tienes cuenta? </span>
          <button onClick={onSwitchToLogin}>Inicia sesión</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
