import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Jokes from './components/Jokes'
import Login from './components/Login';

import './App.css';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jokes: [],
     };   
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/api/jokes')
  .then(response => this.setState({ jokes: response.data}))
  .catch(err => console.log(err));
}

  render() { 
    return (  
    <div className="App">
      <h1> Sup? </h1>
      <Jokes jokes={this.state.jokes} />
      <SignUpForm />
      <Login />

    </div> 
    );
  }
}
 
export default App;