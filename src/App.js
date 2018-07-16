import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's Code Together</h1>
        </header>
        
        <p className="App-intro">
          <div>
             <Main /> 
          </div>
        </p>
      </div>
    );
  }
}

export default App;
