import React from 'react';


class DisplayTodo extends React.Component{
    render(){
        
        return(
            <div>
                <input type="checkbox" checked={this.props.done} value={this.props.done} onChange={(event)=>{this.props.checkboxChangeHandler(event, this.props.id)} }  />            
                <label className={this.props.done?'done':''}>{this.props.todo}</label>
            </div>
        )
    }
}

export default DisplayTodo;