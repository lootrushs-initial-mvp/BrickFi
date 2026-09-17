const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API root' });
});

router.get('/private', (req, res) => {
  res.json({ message: 'Private data (add auth middleware)' });
});

module.exports = router;
