import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar si es registro o login

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'jorgehpasionyestilo@gmail.com' && password === '12345style*') {
      setSuccess('¡Bienvenido Admin!');
      setError('');
      onLogin('admin');
    } else if (email && password) {
      setSuccess('¡Bienvenido Usuario!');
      setError('');
      onLogin('user'); // login general
    } else {
      setError('Por favor, ingresa todos los campos');
      setSuccess('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulamos un registro exitoso para la demostración
    setSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={isRegistering ? handleRegister : handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
        </h2>
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {isRegistering ? 'Registrar' : 'Ingresar'}
        </button>

        <div className="mt-4 text-center">
          <p
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-sm text-blue-500 cursor-pointer hover:underline"
          >
            {isRegistering
              ? '¿Ya tienes cuenta? Inicia sesión aquí'
              : '¿No tienes cuenta? Regístrate'}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
