import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

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
             <Home /> {/* Loads the contents of Home.js */}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
