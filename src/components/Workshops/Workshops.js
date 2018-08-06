// This is where the html code for the /workshops page of the
// website will go.

// TODO:
// Establish dummy data from Firebase or chosen database
// Render that information through props by mapping or some other way to go through list of data and render
// Figure out how to render only the filtered topics

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Workshops.css';

class Workshops extends Component {

  render() {
    return(

      <div>

        <div className='workshop-form-link'>
          <Link to='/workshopsform'>Host your own workshop here!</Link>
        </div>

        <div className='workshop-grid-holder'>
          <div className='workshop-grid'>
            <Link to='./workshopdetails'>
              <div className="grid-item">
                <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
                <h5 className='workshop-h5'>html5 intro</h5>
                <p className='workshop-p'>thursday, july 19, 2018</p>
              </div>
              </Link>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
              <h5 className='workshop-h5'>accessibility for all</h5>
              <p className='workshop-p'>sunday, july 22, 2018</p>      
            </div>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
              <h5 className='workshop-h5'>coding html5 games</h5>
              <p className='workshop-p'>monday, july 23, 2018</p>

            </div>
          </div>

          <div className='workshop-grid'>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
            </div>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />       
            </div>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
            </div>
          </div>

          <div className='workshop-grid'>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
            </div>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />       
            </div>
            <div className="grid-item">
              <img className="workshop-img" src="https://picsum.photos/400/300/?random" />
            </div>
          </div>


        </div>
      </div>

    // ENDS RETURN
    )
  // ENDS RENDER
  }

}

export default Workshops;