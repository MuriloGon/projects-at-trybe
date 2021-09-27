const { MongoClient } = require('mongodb');
require('dotenv').config();

let db = null;

const { DB_NAME = 'Cookmaster', MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster' } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connection() {
  if (db) return db;

  const conn = await MongoClient.connect(MONGO_DB_URL, options);
  db = conn.db(DB_NAME);
  return db;
}

module.exports = connection;