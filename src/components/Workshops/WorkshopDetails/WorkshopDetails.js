import React, { Component } from 'react';
import './WorkshopDetails.css';

class WorkshopDetails extends Component {
  
  state = {
    name: '',
    location: '',
    tech: '',
    description: ''
  };

  

  
  render() {


    return (
      
      <div className="workshop-details-body">

      {/* BASIC DETAILS LEFT RIGHT */}

        <div className="workshop-details-holder">
          <div className="workshop-details-info">
            <h1 className="workshop-details-h1">Intro to HTML5</h1>
            <p>We'll be looking at what differentiates HTML5 from all the other HTMLs. This includes Canvas, games, and SEO. Bring your laptops - we'll be doing an interactive tutorial!</p>
          </div>
          <div className="workshop-details-coder-info">
            <ul>
              <li>elk grove, california</li>
            </ul>
          </div>
        </div>

        {/* SKILLS BUTTONS */}

        <div className="workshop-details-skills">
          <ul>
            <li><button href="#">HTML5</button></li>
            <li><button href="#">CSS3</button></li>
            <li><button href="#">Text Editors</button></li>
          </ul>
        </div>

        {/* STATS GOALS TIMELINE */}

        <div className="workshop-details-stats">
          <div className="workshop-details-goals">
            <h1>CODERS ATTENDING</h1>
            <ul>
              <li>gather 5 strong and enthusiastic front-end developers</li>
              <li>create wireframes following user flow</li>
              <li>use react's props and state powers</li>
            </ul>
          </div>
        {/* ends workshop details stats */}
        </div>

        {/* workshop TEAM */}

        <div className="workshop-details-team">
          <h1>Your Hosts</h1>
          <div className="pd-teammate">
            <div id="pd-teammate1" className="pd-teammate-photoholder"></div>
            <h6>Kaneesha</h6>
            <p>Kaneesha has been designing websites ever since she set her eyes on Neopets.</p>
          </div>
          <div className="pd-teammate">
            <div id="pd-teammate2" className="pd-teammate-photoholder"></div>
              <h6>Karen</h6>
              <p>Karen has back-end skillz and a good amount of knowledge about how HTML and CSS work.</p>
          </div>
        </div>

        
      {/* ENDS BODY */}
      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default WorkshopDetails;