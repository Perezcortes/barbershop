const bcrypt = require('bcrypt');

async function crearUsuario(connection, nombre, correo, contrasena) {
  const hash = await bcrypt.hash(contrasena, 10);
  const sql = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
  const [result] = await connection.query(sql, [nombre, correo, hash]);
  return result.insertId;
}

module.exports = {
  crearUsuario,
};
