const express = require('express');
const app = express();
const PORT = 3000;

// HOME ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to Express server!');
});

// ABOUT ROUTE
app.get('/about', (req, res) => {
  res.send('About this application.');
});

// CONTACT ROUTE
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// PRODUCTS ROUTE
app.get('/products', (req, res) => {
  res.json({
    message: 'Products Page',
    products: [
      { id: 1, name: 'Morphee Brushes', price: 29.99 },
      { id: 2, name: 'Beauty Blender', price: 19.99 },
      { id: 3, name: 'Fenty Beauty Foundation', price: 39.99 }
    ]
  });
});

// USER API
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Jawrell Nguele',
    email: 'nguelejawrell@gmail.com'
  });
});

// SERVER START
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});