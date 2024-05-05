const express = require('express');
const mongoose = require('mongoose');
const tutorsRoutes = require('./routes/tutorsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const subjectsRoutes = require('./routes/subjectsRoutes');

const app = express();

// Configuración de MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/uni'; // URL de conexión a tu base de datos MongoDB
//mongodb://localhost:27017

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/', tutorsRoutes);
app.use('/', studentsRoutes);
app.use('/', subjectsRoutes);

// Puerto de escucha del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
