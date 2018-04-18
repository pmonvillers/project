import React from 'react';


class Question extends React.Component{
    render(){ 
        
    
        return(
            <div className='row' style={{textAlign:'center', padding:'1%', color: '#bdbdbd',display:'inline-block', fontFamily: 'roboto' }}>
                <div className='col'>
                    <h3>{this.props.question}</h3>
                </div>
            </div>
        )
    }
}

export default Question;