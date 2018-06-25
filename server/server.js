const express = require('express'),
    bodyParser = require('body-parser'),

    {ObjectID} = require('mongodb'),
    {mongoose} = require('./db/mongoose'),
        {Todo} = require('./models/todo'),
        {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
       res.send({todos});
   }, (e) => {
       res.status(400).send(e);
   });
});



// GET /todos/12345
app.get('/todos/:id', (req,res) => {
    let id = req.params.id;
    console.log(ObjectID.isValid(id))
    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        console.log(todo)
        if (!todo){
          return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });

});







app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};
