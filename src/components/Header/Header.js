import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return(

      <div>
        <header>
          {/* <nav class="nav flex-column"> */}
            {/* <button class='nav-link active btn-primary'>testing</button> */}
            <a className="nav-link active" href="./">Home</a>
            <a className="nav-link" href="./workshops">Workshops</a>
            <a className="nav-link" href="./projects">Projects</a>
          {/* </nav> */}
        </header>
      </div>

    // ENDS RETURN
    );
  // ENDS RENDER
  }
// ENDS HEADER COMPONENT
}

export default Header;