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
      
      <div>

        <div className="project-details-h1-holder">
          <h1 className="project-details-h1">html5 games</h1>
        </div>

      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default ProjectDetails;