// backend/src/routes/categories.js
const express = require('express');
const router = express.Router();

// Simulación: categorías fijas (puedes traerlas de Mongo después)
router.get('/', (req, res) => {
  res.json(['consolas', 'videojuegos', 'accesorios']);
});

module.exports = router;
