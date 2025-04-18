import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el Link de React Router
import '../styles/LoginComponent.css'; 

const LoginComponent = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulación de validación - reemplazar con lógica real
    setTimeout(() => {
      if (email && password) {
        onLoginSuccess();
      } else {
        setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido a Pasión y Estilo</h2>
        <p>Ingresa tus credenciales para acceder a tu cuenta</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="button-container">
            <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </div>
        </form>

        <div className="footer-links">
          <span>¿No tienes una cuenta? </span>
          <Link to="/register" className="register-link">Regístrate ahora</Link> 
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
