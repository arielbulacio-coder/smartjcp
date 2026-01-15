const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (Placeholder for Cloud SQL or Local)
// const sequelize = new Sequelize(process.env.DB_URL);

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la API de Smart JCP - Ciudad del Aprendizaje',
        status: 'Running on Google Cloud'
    });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Example Route
app.get('/api/info', (req, res) => {
    res.json({
        project: 'Smart JCP',
        location: 'José C. Paz',
        intendente: 'Mario Alberto Ishi',
        description: 'Plataforma Educativa de la Ciudad del Aprendizaje'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
