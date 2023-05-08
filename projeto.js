const express = require('express');
const app = express();

// Rota 1
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Rota 2
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Rota 3
app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

// Rota 4
app.get('/products', (req, res) => {
  res.send('This is the products page.');
});

// Rota 5
app.get('/blog', (req, res) => {
  res.send('This is the blog page.');
});

// Inicialize o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});