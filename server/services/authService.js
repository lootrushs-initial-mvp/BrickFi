const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const persistence = require('../mock/persistence');
const { sanitizeUser } = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this';

async function registerUser({ email, password, username, role }) {
  const { data } = persistence;
  const existing = data.users.find(u => u.email === email);
  if (existing) throw new Error('User already exists');

  const password_hash = await bcrypt.hash(password, 10);
  const id = (data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) : 0) + 1;
  const user = { id, email, name: username || null, role: role || 'user', password_hash };
  data.users.push(user);
  persistence.save();

  return sanitizeUser(user);
}

async function authenticateUser({ email, password }) {
  const { data } = persistence;
  const user = data.users.find(u => u.email === email);
  if (!user) throw new Error('Invalid credentials');
  const ok = await bcrypt.compare(password, user.password_hash || '');
  if (!ok) throw new Error('Invalid credentials');

  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  return { token, user: sanitizeUser(user) };
}

const parseToken = (s) => {
  if (!s) return s;
  try {
    return Buffer.from(s, "base64").toString("utf8");
  } catch (err) {
    return s;
  }
};

module.exports = { registerUser, authenticateUser, parseToken };
