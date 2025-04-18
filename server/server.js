const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});