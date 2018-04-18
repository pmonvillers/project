import React from 'react';
import {Question, Option, Budget, DisplayProducts, Header, Footer} from './Components';
import {Switch, Link, Route, Router, Redirect} from 'react-router-dom';
import {Paper, FlatButton} from "material-ui"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Questionnaire extends React.Component{

    render(){
        const style = {
            width: '90%',
            padding: '1%',
            marginTop: '2%',
            textAlign: 'center',
            display: 'inline-block',
            background: '#1b1b1b',
            fontFamily: 'Roboto',
          };
       
        return(
            <div  className= 'questionnaire'>
                <MuiThemeProvider>
                    <Header newResearch={this.props.newSearch}/>
                    <Paper style={style} zDepth={5}>
                    {this.props.progress !== 3 ?
                    <div>                   
                        <Question question={this.props.questions[this.props.progress].type} />
                        <Option options={this.props.questions[this.props.progress].options} post={this.props.post}  addOption={this.props.addOption}/>
                    </div> 
                    :
                    <div>
                        <Question question={this.props.questions[this.props.progress].type} />
                        <Budget style={{textAlign:'center', color:'white'}} budgetMax={this.props.budgetMax} post={this.props.post} handleSlider={this.props.handleSlider}/>
                    </div>}
                       
                    </Paper>
                    <Footer />
                </MuiThemeProvider>
            </div>
            
        )
}
}

export default Questionnaire;