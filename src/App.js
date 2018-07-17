import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './components/Header';
import Workshops from './components/Workshops';

/*
 *  These are the components of the website:
 *      Main.js         **Controls the Routes for each webpage, 
 *                         create new path here  when creating a new page**
 * _________________________________________________________________________________
 * 
 *      Home.js         contains the formatting for the (./) home Page
 *      Workshops.js     contains the formatting for ./workshops page
 *      Projects.js     contains the formatting for ./projects page
 *      Header.js       contains basic navigation for App.js
 *  Edit the components in the corresponding javascript files
 * 
 *  -KRON
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Let's Code Together</h1>
        </header>
        {/* <p className="App-intro"> */}
          {/* <div> */}
            {/* TODO: Add Code for Nav Bar Below */}
            <Header />
            {/* <nav class="nav flex-column">
              <a class="nav-link active" href="./">Home</a>
              <a class="nav-link" href="./workshops">Workshops</a>
              <a class="nav-link" href="./projects">Projects </a>
            </nav> */}
            {/* This loads the contents of Main.js, which controls the routes to other webpages */}
             <Main /> 
             {/* <Workshops /> */}
          {/* </div> */}
        {/* </p> */}
      </div>
    );
  }
}

export default App;
