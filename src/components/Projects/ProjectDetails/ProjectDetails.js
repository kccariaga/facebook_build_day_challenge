import React, { Component } from 'react';
import './ProjectDetails.css';
// import './ProjectDetailsJS.js';
// import $ from 'jquery';

class ProjectDetails extends Component {


  
  state = {
    name: '',
    location: '',
    tech: '',
    description: ''
  };

  
  


  
  render() {


    return (
      
      <div className="project-details-body">

      {/* BASIC DETAILS LEFT RIGHT */}

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

        {/* SKILLS BUTTONS */}

        <div className="project-details-skills">
          <ul>
            <li><button href="#">HTML5</button></li>
            <li><button href="#">CSS3</button></li>
            <li><button href="#">JavaScript</button></li>
            <li><button href="#">jQuery</button></li>
            <li><button href="#">React</button></li>
          </ul>
        </div>

        {/* STATS GOALS TIMELINE */}

        <div className="project-details-stats">
          <div className="project-details-goals">
            <h1>Goals</h1>
            <ul>
              <li>gather 5 strong and enthusiastic front-end developers</li>
              <li>create wireframes following user flow</li>
              <li>use react's props and state powers</li>
            </ul>
          </div>
          <div className="project-details-timeline">
            <h1>Timeline</h1>
            <div className="timeline-left">
            </div>
            <div className="timeline-right">
              <div className="content">
                <h2>June 2018</h2>
                <p>We're going to use CSS to create CSS images and JS for our interactivity.</p>
                <p>Practice CSS images tutorials.</p>
                <p>Create new mock-ups of website.</p>
              </div>
              <div className="content">
                <h2>May 2018</h2>
                <p>Gather two more coders.</p>
                <p>Decide on features to include on Projects Details page.</p>
              </div>
              <div className="content">
                <h2>April 2018</h2>
                <p>Create a filter search for the many Projects and Workshops we have.</p>
                <p>Create chat and comments for users.</p>
                <p>Create mentor pages and section.</p>
              </div>
            </div>
          </div>
        {/* ends project details stats */}
        </div>

        {/* PROJECT IMAGES */}

        <div className="project-details-images">
          <h1>Images</h1>
          <div id="pd-img1"></div>
          <div id="pd-img2"></div>
          <div id="pd-img3"></div>
          <div id="pd-img4"></div>
          <div id="pd-img5"></div>
          <div id="pd-img6"></div>
        </div>

        {/* PROJECT TEAM */}

        <div className="project-details-team">
          <h1>Team</h1>
          <div className="pd-teammate">
            <div id="pd-teammate1" className="pd-teammate-photoholder"></div>
            <h6>Michelle</h6>
            <p>Michelle has been doing this page for a while but still needs direction with the design, not to mention the responsiveness, HTML5, browser compatibility, and SEO. Yikes, that's a lot of stuff.</p>
          </div>
          <div className="pd-teammate">
            <div id="pd-teammate2" className="pd-teammate-photoholder"></div>
              <h6>Karen</h6>
              <p>Karen is the back-end wizard of all this, I don't know how she does it. How can you do so much programming in so little time?!</p>
          </div>
          <div className="pd-teammate">
            <div id="pd-teammate3" className="pd-teammate-photoholder"></div>
              <h6>Elodia</h6>
              <p>Elodia is our resident artist. All you need to do is hand her a pen or a tablet and some Picasso thing comes out. I still don't know how.</p>
          </div>
        </div>

        
      {/* ENDS BODY */}
      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default ProjectDetails;