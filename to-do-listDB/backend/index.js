const  express = require('express'),
           app = express(),
      mongoose = require('mongoose'),
     MONGO_URL = 'mongodb://localhost:27017/Todos';
    bodyParser = require('body-parser');


// call .connect() to connect;
mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS")
    next();
    }); 

app.use(bodyParser());


connection.on('open', ()=>{
    console.log("connected to mongo!");
})

// use require to bring in our Todos model
 const Todos = require("./models/Todos");


// read Todo check

app.get('/todos', (req, res) =>{
    Todos.find({})
    .then(Todos => {
        res.json(Todos);
    })
    .catch(error => {
        console.log(error);
        
    });
});


// create new Todo check

app.post('/todos', (req, res) => {
    let newTodo = Todos({
        todo: req.body.todo,
        done: req.body.done
    });
    newTodo.save()
        .then(newTodo => {
            res.json(newTodo)
        })
        
        .catch(error => {
            console.log(error);
            res.status(500).json({msg: 'error'});
        });
      
})

// delete Todo check

app.delete('/todos/:TodoId', (req, res) =>{
    let deletedTodo = ({_id:req.params.TodoId})
    Todos.findOneAndRemove({_id:req.params.TodoId}, deletedTodo)
        .then(deletedTodo => {
            res.json(deletedTodo);
        })
        .catch(error => {
            res.status(500).json({msg: 'error'});
        });
});

// update Todo check

app.put('/todos/:TodoId', (req, res)=>{
    let updatedTodo = ({
        todo: req.body.todo,
        done: req.body.done
    })
    Todos.findOneAndUpdate({_id:req.params.TodoId}, updatedTodo)
        .then(updatedTodo => {
            res.json(updatedTodo)
        })
        .catch(error => {
            res.status(500).json({msg: 'error'});
        });
});



app.listen(8080, ()=> {
    console.log('listening on 8080');
})