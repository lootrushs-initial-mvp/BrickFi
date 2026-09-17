const authService = require('../services/authService');

async function register(req, res) {
  try {
    const { email, password, username, role } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
    const user = await authService.registerUser({ email, password, username, role });
    return res.status(201).json({ user });
  } catch (err) {
    if (err.message === 'User already exists') return res.status(409).json({ error: err.message });
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Registration failed' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
    const out = await authService.authenticateUser({ email, password });
    return res.json(out);
  } catch (err) {
    console.error('Login error:', err);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}

module.exports = { register, login };
