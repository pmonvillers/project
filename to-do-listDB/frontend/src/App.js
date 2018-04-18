import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';
import DisplayTodo from './DisplayTodo';
import axios from 'axios';




class App extends React.Component{
  constructor(){
    super();

    this.state = {
      todo: [{  todo:'string',
                done:true,  
                 _id:0
              }]
    }
  
    this.addTodo = this.addTodo.bind(this);
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    this.clear = this.clear.bind(this);
  }  
  

  addTodo(todo){
    let newTodo = {todo:todo, done:false };
    axios.post('http://localhost:8080/todos', newTodo)
    .then((result) =>{
      let todoCopy = Array.from(this.state.todo);
      todoCopy.push(newTodo);
      this.setState({
      todo: todoCopy
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  

  checkboxChangeHandler(event, id){

    let todoCopy = Array.from(this.state.todo);

    for(let i = 0; i < todoCopy.length; i++){
      if(todoCopy[i]._id === id){
        todoCopy[i].done = !todoCopy[i].done
      }
    }
    
    let newCheckboxValue = event.target.checked;
    this.setState({
       todo: todoCopy
    });
  }
  
  clear(){
    let todoCopy = Array.from(this.state.todo);
    let newTodoCopy=[];
    for(let i = 0; i < todoCopy.length; i++){
      if(todoCopy[i].done === false){
        newTodoCopy.push(todoCopy[i])
      }
    }
    this.setState({
      todo: newTodoCopy
    })
  }  

  componentWillMount(){
    axios.get('http://localhost:8080/Todos')
    .then((results) =>{
      console.log(results.data);
      this.setState({
        todo: results.data
      })
    });
  }

  render() {
    return (
        <div className='App'>
          <div className="container">
            <h1 className="text-center">todos</h1>

            < Form formSubmit={this.addTodo} />

            <h3>Tasks List</h3>
            
            < TodoList todo={this.state.todo} checkboxChangeHandler={this.checkboxChangeHandler} />

            <button className="pull-right btn btn-default" onClick={this.clear} >Clear Complete</button>
          </div>
        </div>
    );
  }
}

export default App;


