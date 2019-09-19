const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {poolSize:10}, function(err,client){
  if (err) {
    return console.log(err)
  }
  const db = client.db('mydb');
  db.createCollection('product', function(err, res)){
    if (err) {
      return console.log(err)
    }
  }
  const collection = db.collection('product');
})
