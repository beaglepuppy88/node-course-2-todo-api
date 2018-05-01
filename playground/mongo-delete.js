const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      console.log('Todos');
      console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
      console.log("Unable to delete todos", err);
  });

});
