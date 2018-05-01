const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name)

var obj = new ObjectID();
console.log(obj);
