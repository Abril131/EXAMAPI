const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configuración de MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: 'adm',
  database: 'exam'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Rutas
app.get('/tutors', (req, res) => {
  connection.query('SELECT * FROM tutors', (error, results) => {
    if (error) {
      console.error('Error al obtener los tutores:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.json(results);
  });
});

app.post('/tutors', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO tutors (name) VALUES (?)', [name], (error, results) => {
    if (error) {
      console.error('Error al crear un nuevo tutor:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.status(201).send('Tutor creado correctamente');
  });
});

app.get('/students', (req, res) => {
  connection.query('SELECT * FROM students', (error, results) => {
    if (error) {
      console.error('Error al obtener los estudiantes:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.json(results);
  });
});

app.post('/students', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO students (name) VALUES (?)', [name], (error, results) => {
    if (error) {
      console.error('Error al crear un nuevo estudiante:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.status(201).send('Estudiante creado correctamente');
  });
});

app.get('/subjects', (req, res) => {
  connection.query('SELECT * FROM subjects', (error, results) => {
    if (error) {
      console.error('Error al obtener las materias:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.json(results);
  });
});

app.post('/subjects', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO subjects (name) VALUES (?)', [name], (error, results) => {
    if (error) {
      console.error('Error al crear una nueva materia:', error);
      res.status(500).send('Error del servidor');
      return;
    }
    res.status(201).send('Materia creada correctamente');
  });
});
// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
