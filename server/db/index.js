const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

module.exports = { pool };
