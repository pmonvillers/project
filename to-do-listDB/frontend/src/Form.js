import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        
        this.collectTodoData = this.collectTodoData.bind(this);
        this.state = {
            value: null
        }
        
    }

    collectTodoData(e){
        e.preventDefault();
        let newTodoData = this.refs.todo.value;
        let todo = this.refs.todo;
        todo.value = '';

        this.props.formSubmit(newTodoData);
    }

    render(){
        return(
            
            
            <form onSubmit={ this.collectTodoData }>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </span>
                    <input className="form-control" placeholder="add a todo" type='text' name='todo' ref='todo' value={ this.state.value } />
                </div>
            </form>
            

        )
    }
}




export default Form;
