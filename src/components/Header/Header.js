import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return(

      <div>
        <header className="header">
          <h1>&#60; Let's Code Together &#47;&#62;</h1>
          <div className="header-links">
            <ul>
              <Link to="/" className="header-link"><li>Home</li></Link>
              <Link to="/workshops"><li>Workshops</li></Link>
              <Link to="/projects"><li>Projects</li></Link>
              <Link to="/login"><li>Login</li></Link>
            </ul>
          </div>
        </header>
      </div>

    // ENDS RETURN
    );
  // ENDS RENDER
  }
// ENDS HEADER COMPONENT
}

export default Header;