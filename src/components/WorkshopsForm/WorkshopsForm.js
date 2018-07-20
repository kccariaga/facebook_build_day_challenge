import React, { Component } from 'react';
import './WorkshopsForm.css';

class WorkshopsForm extends Component {


  
  render() {
    return (
      
        <div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label for="workshop name">Workshop Name
            <input type="text" />
            </label>
          </div>
          <div>
            <label for="workshop location">Workshop Location
            <input type="text" />
            </label>
          </div>
          <div>
            <label for="technology involved">Technology Involved
            <input type="text" />
            </label>
          </div>
          <div>
            <label for="workshop description">Workshop Description
            <textarea>Talk about what activities that participants can expect during your workshop!</textarea>
            </label>
          </div>
          <input type="submit" value="submit" />
        </form>
        
      </div>
    );
  }
}

export default WorkshopsForm;

