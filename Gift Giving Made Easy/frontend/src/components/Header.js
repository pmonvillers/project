import React from 'react'

class Header extends React.Component{
    render(){
        
        return(    
            <div>
                <nav  className="navbar navbar-dark max-auto "  style={{backgroundColor: '#1b1b1b', color:'#bdbdbd', marginBottom: '1%'}}>
                <img src="../../gift2.svg" width="30" height="30" alt=""/>
                    <h2 className='mx-auto'>
                        Gift Giving Made Easy
                    </h2>
                    <button className="btn btn-outline-light btn-sm" onClick={this.props.newResearch} type="button">New Search</button>
                </nav>
            </div>  
        )
    }
}

export default Header;