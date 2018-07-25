import React, { Component } from 'react';
import './ProjectDetails.css';

class ProjectDetails extends Component {

  state = {
    name: '',
    location: '',
    tech: '',
    description: ''
  }
  
  render() {
    return (
      
      <div className="project-details-body">

        <div className="project-details-holder">
          <div className="project-details-info">
            <h1 className="project-details-h1">let's code together</h1>
            <p>We're determined to create the best system that enables coders and developers of all skill levels to learn from workshops and participate in projects.</p>
          </div>
          <div className="project-details-coder-info">
            <ul>
              <li>elk grove, california</li>
              <li>remote allowed</li>
              <li>google hangouts every sunday at 6pm</li>
              <li>unpaid</li>
            </ul>
          </div>
        </div>

        <div className="project-details-skills">
          <ul>
            <li><button href="#">HTML5</button></li>
            <li><button href="#">CSS3</button></li>
            <li><button href="#">JavaScript</button></li>
            <li><button href="#">jQuery</button></li>
            <li><button href="#">React</button></li>
          </ul>
        </div>

        <div className="project-details-stats">
          <div className="project-details-goals">
            <h1>Goals</h1>
            <ul>
              <li>gather 5 strong and enthusiastic front-end developers</li>
              <li>create wireframes following user flow</li>
              <li>use react's props and state powers</li>
            </ul>
          </div>
          
          <div class="project-details-timeline">
            
          </div>

        </div>

        

      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default ProjectDetails;