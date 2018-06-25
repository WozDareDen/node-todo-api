const {mongoose} = require('./../server/db/mongoose'),
    {Todo} = require('./../server/models/todo'),
    {User} = require('./../server/models/user'),
    {ObjectID} = require('mongodb');

let id = '5b2f6c38ae49a01248d406e8';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if (!user){
        return console.log('Unable to find user');
    }
    console.log('User by Id', user);
}, (e) => console.log(e));

