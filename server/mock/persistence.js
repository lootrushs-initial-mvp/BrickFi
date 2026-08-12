const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_FILE = path.join(__dirname, 'data.json');

function writeFile(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to write mock data file:', err);
  }
}

// Load data.json if present, otherwise load the in-memory generated data and persist it
let data = null;
if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    data = JSON.parse(raw);
  } catch (err) {
    console.error('Error reading mock data file, falling back to initial generator:', err);
  }
}
// Ensure a developer seed user exists even if data.json was present
const ensureSeedUser = () => {
  const seedEmail = process.env.DEV_SEED_EMAIL || 'test1@gmail.com';
  const seedPassword = process.env.DEV_SEED_PASSWORD || 'pass1234';
  if (!data) return;
  const exists = data.users.find(u => u.email === seedEmail);
  if (!exists) {
    const nextId = data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) + 1 : 1;
    const password_hash = bcrypt.hashSync(seedPassword, 10);
    const seeded = { id: nextId, email: seedEmail, name: 'Test One', role: 'user', password_hash };
    data.users.push(seeded);
    writeFile(data);
  }
};

if (!data) {
  // Require the existing generator file which exports initial arrays
  // This file does not depend on persistence to avoid circular import
  const initial = require('./data');
  data = {
    users: initial.users || [],
    cryptos: initial.cryptos || [],
    purchaseHistory: initial.purchaseHistory || [],
    rewardHistory: initial.rewardHistory || [],
    goods: initial.goods || [],
    cards: initial.cards || [],
    banks: initial.banks || [],
  };
  // Seed a developer test user so dashboard queries used in screenshots work
  const seedEmail = process.env.DEV_SEED_EMAIL || 'test1@gmail.com';
  const seedPassword = process.env.DEV_SEED_PASSWORD || 'pass1234';
  const exists = data.users.find(u => u.email === seedEmail);
  if (!exists) {
    const nextId = data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) + 1 : 1;
    const password_hash = bcrypt.hashSync(seedPassword, 10);
    const seeded = { id: nextId, email: seedEmail, name: 'Test One', role: 'user', password_hash };
    data.users.push(seeded);
  }
  // Persist the initial dataset so subsequent runs use the JSON file
  writeFile(data);
} else {
  // data.json existed - still ensure seed user present
  ensureSeedUser();
}

function getData() {
  return data;
}

function save() {
  writeFile(data);
}

module.exports = { data, getData, save };
