import React, { Component } from 'react';
import './App.css';
import {DisplayProducts, Home, Product, Questionnaire, Question, Budget} from './components/Components';
import {Switch, Link, Route, Router, Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';



class App extends Component {
  constructor(){
    super();

    this.state = {
      questions: [
        
        // working on a better questionnaire
        
        {
          type: 'You are looking for a Gift for your:',
          options: [{display:'Father', value:"men"}, 
                    {display:'Mother', value:"women"}, 
                    {display:'GrandFather', value:'men'}, 
                    {display:'GrandMother', value:'women'}, 
                    {display:'Girlfriend', value:'women'}, 
                    {display:'Boyfriend', value:'men'}, 
                    {display:'Wife', value:'women'}, 
                    {display:'Husband', value:'men'}, 
                    {display:'Sister', value:''}, 
                    {display:'Brother', value:''},
                    {display:'Cousin', value:''},
                    {display:'Friend', value:''},],
          id: 1 
        },
        {
          type: 'How old is this person?',
          options: [{display:'0-3', value : 'baby'},
                    {display:'4-10', value : 'kids'},
                    {display:'11-17', value:''},
                    {display:'18-40', value:''},
                    {display:'41-65', value:''},
                    {display:'65 and more', value:'senior'}], 
          id: 2
          
        },
        
        {
          type: 'What activity does this person enjoy most?',
          options: [{display:'Reading', value:'books'},
                    {display:'Fishing', value:'Fishing'},
                    {display:'Sewing', value:'Sewing'},
                    {display:'Listening Music', value:'Music'},
                    {display:'Wood Working', value:'Wood Working'},
                    {display:'Travelling', value:'Travelling'},
                    {display:'Cooking', value:'Cooking'},
                    {display:'Gardening', value:'Gardening'},
                    {display:'Playing Video-Game', value:'Video-Game'},
                    {display:'Shopping', value:'cloth'},
                    {display:'Sport', value:'Sport'},
                    {display:'Playing music', value:'music instrument'},
                    {display:'playing with his/her drone', value:'high tech'}],
          id: 3
        }, {
          type: 'What is your budget?',
          id: 4
        },

      ],
      progress: 0,
      keyWords: [],
      budgetMax: 0,
      product: [],    
    } 
    
  }

  amazonRequest = (data) => {
    console.log(data)

    axios.get('http://localhost:8080/')
      .then(result => {
        console.log(result);
        this.setState({
          product: result.data
        }, ()=> this.props.history.push('/displayProducts'));
        
       
      })
      .catch(error => {
        console.log(error);
      });
  }



  postRequest = (event) => {
    event.preventDefault();
   
    (this.state.budgetMax === 0)? alert("Please set a budget"):
    axios.post('http://localhost:8080/questionnaire', {keywords:this.state.keyWords, budget:(this.state.budgetMax * 100)} )
      .then(result => {
        console.log(result);
        this.amazonRequest(result)
      })
      .catch(error => {
        console.log(error);
      });

  }

  similarItemPost = (event, itemId) => {
    event.preventDefault();
    console.log(itemId)
    axios.post('http://localhost:8080/itemId', {itemId: itemId})
      .then(result =>{
        console.log(result);
        this.similarGet(itemId)
      })
      .catch(error =>{
        console.log(error)
      });
  }

  similarGet = (data) => {
    console.log(data)

    axios.get('http://localhost:8080/similar/'+ data)
      .then(result => {
        console.log(result);
        this.setState({
          product: result.data
        
      }, ()=> this.props.history.push('/displayProducts'))
  
    })
      .catch(error => {
        console.log(error);
      });
  }



  changeQuestion = () =>{

    const {progress} = this.state;
    this.setState({
      progress: progress + 1
    })
  }
  
  addOption = (e) =>{
      let copy = Array.from(this.state.keyWords);
      copy.push(e.target.value)
      this.setState({
        keyWords: copy
      }),
      this.changeQuestion();
  }
  
  handleSlider = (event, value)=>{
    this.setState({
        budgetMax: value
    })
  }

  newSearch = (event) =>{
    event.preventDefault();
    axios.delete('http://localhost:8080/newsearch')
    .then(result =>{
      console.log('delete',result);
    })
    .catch(error =>{
      console.log(error);
    })
    this.setState({
      keyWords: [],
      budgetMax: 0,
      progress: 0,
      product:[]
    });
    this.props.history.push('/')
  }

  render() {
   let products;
   if(!this.state.product){
     products = []
   } else {
     products = this.state.product
   }

    return (
      <div>
        <Switch>
          <Route exact path='/' exact render={(props)=>{return <Home />}}/>
          <Route path='/questionnaire' render={(props)=>{return <Questionnaire newSearch={this.newSearch} amazozn={this.amazonRequest} product={products} post={this.postRequest} budgetMax={this.state.budgetMax}
                    handleSlider={this.handleSlider} questions={this.state.questions} changeQuestion={this.changeQuestion}
                    progress={this.state.progress} addOption={this.addOption}/>}}/>
          <Route path='/displayProducts' render={(props)=>{return <DisplayProducts newSearch={this.newSearch} similarItemPost={this.similarItemPost} product={products}/>}}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
