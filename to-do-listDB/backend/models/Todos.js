const mongoose = require("mongoose"),
      Schema = mongoose.Schema;


const TodosSchema = new Schema({
    
    todo: {
        type: String,
        required: true,
        unique: false
    },
    done: {
        type: Boolean
    }
    
});

const TodosModel = mongoose.model('Todos', 
                        TodosSchema);

module.exports = TodosModel;