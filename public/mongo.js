const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db('socialmedia');
  console.log('Database created!');

  client.close();
});
