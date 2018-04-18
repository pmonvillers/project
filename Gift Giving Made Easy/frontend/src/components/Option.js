import React from 'react';

class Option extends React.Component{
    render(){ 


        const {display} = this.props.options 
        const optionsJSX = this.props.options.map(option =>{
            return  <div className='col-lg-4 mx-auto'>
                       <div className="btn-group btn-group-toggle" data-toggle="radio" style={{margin:'3%'}}>
                            <label className="btn btn-outline-light btn-sm" style={{margin:'3%'}}>
                                <input onClick={(e)=>this.props.addOption(e)}
                                       value={option.value}  
                                       type="radio" />     
                                       {option.display}                       
                            </label>
                        </div>
                    </div>
        })
        return(
            <div className='row'> 
                {optionsJSX}        
            </div>
        )
    }
}

export default Option;