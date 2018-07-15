import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's Code Together</h1>
        </header>
        <p className="App-intro">
          <div class = "container fluid">
            <div class = "row">
              {/* First card on the Row */}
              <div class = "container col-6"> 
                <div class="card">
                  <h3 class="card-header">Workshops</h3>
                  <div class="card-body">
                    <h4 class="card-title">Are you looking to learn new skills?</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#!" class="btn btn-primary">Find a Workshop today</a>
                  </div>
                </div>
              
              </div>

              {/* Second card on the row */}
              <div class="col-6">
                <div class="card">
                  <h3 class="card-header">Projects</h3>
                  <div class="card-body">
                    <h4 class="card-title">Need a team to work on a project with</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#!" class="btn btn-primary">Project Listings</a>
                  </div>
                </div>
              
              </div>

              
 

             </div> 
          </div>
        </p>
      </div>
    );
  }
}

export default App;
