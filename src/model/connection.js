const { MongoClient } = require('mongodb');

let db = null;

const uri = 'mongodb://localhost:27017/aggregations';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connection() {
  if (db) return db;

  const conn = await MongoClient.connect(uri, options);
  db = conn.db('Cookmaster');
  return db;
}

module.exports = connection;