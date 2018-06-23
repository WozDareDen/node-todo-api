// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectId();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2e41caa8fc550e145998ee')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    //
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(count, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        location: "New York"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    })

    // client.close();
});

