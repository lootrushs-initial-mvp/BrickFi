require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const dataRoutes = require('./routes/data');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
