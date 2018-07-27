import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Header from './components/Header';
// import './reset.css';
// import Home from './Home.js';

/*
 *  These are the components of the website:
 *      Main.js         **Controls the Routes for each webpage, 
 *                         create new path here  when creating a new page**
 * _________________________________________________________________________________
 * 
 *      Home.js         contains the formatting for the (./) home Page
 *      Workshops.js    contains the formatting for ./workshops page
 *      Projects.js     contains the formatting for ./projects page
 *      Header.js       contains basic navigation for App.js
 *      Login.js        contains the formatting for the Login Page
 *      script.js       contains the information for creating and appending to firebase
 *  Edit the components in the corresponding javascript files
 * 
 *  -KRON
 */

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Router />
      </div>

    );
  }
}

export default App;
