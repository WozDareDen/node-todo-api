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

    // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b2f5acb6a833705b066fb76")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2e4290239c831d388acfd0')
    }, {
            $set: {
                name: 'Flo'
            },
            $inc: {
                age: 1
            }

        },
        {
            returnOriginal: false
        }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });

    // client.close();
});