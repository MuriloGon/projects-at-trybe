const { MongoClient } = require('mongodb');

require('dotenv').config();

const {
  DB_NAME = 'StoreManager',
  URI = 'mongodb://mongodb:27017/StoreManager',
} = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

async function connection() {
  if (db) return Promise.resolve(db);

  const conn = await MongoClient.connect(URI, OPTIONS);
  db = conn.db(DB_NAME);
  return db;
}

module.exports = connection;
