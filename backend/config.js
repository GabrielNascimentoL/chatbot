require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'admin',
    database: process.env.PG_DB || 'chatbot',
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'admin',
    database: process.env.PG_DB || 'chatbot',
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'admin',
    database: process.env.PG_DB || 'chatbot',
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
  },
};
