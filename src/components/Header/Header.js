import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return(
                
      <div>
        <header>

            <a className="nav-link active" href="./">Home</a>
            <a className="nav-link" href="./workshops">Workshops</a>
            <a className="nav-link" href="./projects">Projects</a>
            <a className="nav-link" href="./login">Login</a>
        </header>
      </div>

    // ENDS RETURN
    );
  // ENDS RENDER
  }
// ENDS HEADER COMPONENT
}

export default Header;