import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Friends,ServiceDemo} from "./Examples"


class App extends Component {  
  render() {
    return <div className="App">
      <h2>React App</h2>
      <Friends></Friends>      
      <ServiceDemo/>
      </div>
    
  }
}

export default App;
