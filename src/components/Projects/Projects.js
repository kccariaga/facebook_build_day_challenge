//This is where the code for the /projects page of the website
//will go

import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {

    render() {
      return(
  
        <div>
          <div className='project-grid-holder'>
            <div className='project-grid'>
              <div className="grid-item">
              
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
                <h5 className='project-h5'>let's code together</h5>
                <p className='project-p'>thursday, july 19, 2018</p>
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
                <h5 className='project-h5'>b-sides</h5>
                <p className='project-p'>sunday, july 22, 2018</p>      
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
                <h5 className='project-h5'>virtual pets</h5>
                <p className='project-p'>monday, july 23, 2018</p>
  
              </div>
            </div>
  
            <div className='project-grid'>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />       
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
              </div>
            </div>
  
            <div className='project-grid'>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />       
              </div>
              <div className="grid-item">
                <img className="project-img" src="https://picsum.photos/400/300/?random" />
              </div>
            </div>
  
  
          </div>
        </div>
  
      // ENDS RETURN
      )
    // ENDS RENDER
    }
  
  }

export default Projects;