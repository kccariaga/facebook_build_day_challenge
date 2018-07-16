import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

/*
 *  These are the components of the website:
 *      Main.js         **Controls the Routes for each webpage, 
 *                         create new path here  when creating a new page**
 * _________________________________________________________________________________
 * 
 *      Home.js         contains the formatting for the (./) home Page
 *      Workshop.js     contains the formatting for ./workshops page
 *      Projects.js     contains the formatting for ./projects page
 *  Edit the components in the corresponding javascript files
 * 
 *  -KRON
 */

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
            {/* TODO: Add Code for Nav Bar Below */}



            {/* This loads the contents of Main.js, which controls the routes to other webpages */}
             <Main /> 
          </div>
        </p>
      </div>
    );
  }
}

export default App;
