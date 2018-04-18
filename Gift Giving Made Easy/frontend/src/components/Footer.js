import React from 'react'

class Footer extends React.Component{
    render(){
        
        return(
            <div className='footer'>
                <nav  className="navbar navbar-dark sticky-bot "  style={{backgroundColor: '#1b1b1b', color:'#bdbdbd'}} >
                    <p className='mx-auto' style={{margin: ' 0 auto'}}>
                      © 2018 Pierre Monvillers, All rights reserved.
                    </p>
                    <a href="https://github.com/pmonvillers"  target="_blank">
                        <img style={{marginRight:'20px'}} src="/github.svg" width="30" height="30" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-monvillers/"  target="_blank">
                        <img src="/linkedin.svg" width="30" height="30" alt=""/>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Footer;