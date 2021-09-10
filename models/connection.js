const { MongoClient } = require('mongodb');

require('dotenv').config();
const {ENV, DB_NAME, LOCAL_URI, PRODUCTION_URI} = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = ENV == 'local' ? LOCAL_URI : PRODUCTION_URI;

let db = null;

async function connection() {
  if(db) return Promise.resolve(db);

  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db(DB_NAME);
  return db;
}

module.exports = connection;
