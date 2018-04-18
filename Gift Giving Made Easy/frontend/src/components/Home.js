import React from 'react';
import {DisplayProducts, Product, Questionnaire, Budget, Header, Footer} from './Components';
import {Switch, Link, Route, Router, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Paper, FlatButton} from "material-ui"    

class Home extends React.Component{
    render(){ 
        const style = {
            width: '90%',
            height: '100%',
            padding: '1%',
            marginTop: '10%',
            textAlign: 'center',
            display: 'inline-block',
            background: '#1b1b1b',
            fontFamily: 'Roboto',
            
          };
        return(
            <div>
                <Header/>
                 <MuiThemeProvider> 
                    <Paper style={style} zDepth={5}>
                        <p>
                            <h3>Do you have a birthday party or special occasion coming up?</h3>
                        </p>
                        <p>
                            <h3>And as usual, have no idea what to buy?</h3>
                        </p>
                        <p>
                            <h3>Gift Giving Made Easy can save you!</h3>
                        </p>
                        <FlatButton style={{textAlign:'center', color:'white'}} label="let's find gifts" primary={true} containerElement={<Link to={"/questionnaire"}/>} />
                    </Paper>
                </MuiThemeProvider>
                <Footer/>
            </div>
        )
    }
}

export default Home;