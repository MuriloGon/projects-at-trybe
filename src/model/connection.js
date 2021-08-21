const { MongoClient } = require('mongodb');

let conn = null;

// Connection URI
const uri = 'mongodb://localhost:27017/aggregations';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connection(collectionName) {
  if (conn) return conn;
  const client = await MongoClient.connect(uri, options);
  conn = client.db('Cookmaster');
  return conn.collection(collectionName);
}

module.exports = connection;