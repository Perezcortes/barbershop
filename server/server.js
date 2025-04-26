const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a base de datos
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Middleware para pasar conexión a las rutas
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// Ruta de prueba
app.get('/', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT NOW() AS hora_actual');
    res.json({ mensaje: 'Base de datos conectada', hora: rows[0].hora_actual });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error en conexión');
  }
});

// Ruta para registrar usuario
app.post('/api/registro', async (req, res) => {
  const { nombre, correo, contrasena, telefono } = req.body;

  if (!nombre || !correo || !contrasena) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }

  try {
    const db = req.db;

    // Verificar si el correo ya existe
    const [existe] = await db.query('SELECT id FROM usuarios WHERE correo = ?', [correo]);
    if (existe.length > 0) {
      return res.status(409).json({ mensaje: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña
    const hash = await bcrypt.hash(contrasena, 10);

    // Insertar el usuario
    await db.query(
      'INSERT INTO usuarios (nombre, correo, contrasena, telefono) VALUES (?, ?, ?, ?)',
      [nombre, correo, hash, telefono || null]
    );

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
