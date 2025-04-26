const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Ruta: POST /api/registro
router.post('/registro', async (req, res) => {
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

module.exports = router;
