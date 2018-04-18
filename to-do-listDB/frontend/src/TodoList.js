import React from 'react';
import DisplayTodo from './DisplayTodo';

class TodoList extends React.Component{
    render(){

        let todoArray = this.props.todo;

        
        let todoDisplayJSX = [];
        
        
        for(let i = 0; i < todoArray.length; i++){
            let oneTodo = < DisplayTodo checkboxChangeHandler={this.props.checkboxChangeHandler} todo={ todoArray[i].todo } done={todoArray[i].done} id={todoArray[i]._id}/>
                                        
            todoDisplayJSX.push(oneTodo);     

        }
        return(

            <ul className="list-group">
                <li className="list-group-item">
                    <label>{todoDisplayJSX}</label>
                </li>
            </ul>
            
        
        )
    }
}

export default TodoList;