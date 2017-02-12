import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Weatherstore from './Weatherstore';
 

class App extends Component {
  render() {
       
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Current Weather</h2>
        </div>
       <Weather store={Weatherstore}/>
           
      </div>
    );
  }
}

export default App;
