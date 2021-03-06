import React, { Component } from 'react';
import './WorkshopsForm.css';

class WorkshopsForm extends Component {

  state = {
    name: '',
    location: '',
    tech: '',
    description: ''
  }

  handleChange = event => {
    this.setState({
      name: this.state.name
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log('got it!');
  }


  
  render() {
    return (
      
      <div>

        <div className="h1-holder">
          <h1 className="workshop-h1">let newWorkshop = &#123;</h1>
        </div>

        <form 
          className="workshop-form" 
          onSubmit={this.handleSubmit} 
        >

          <div>
            <label htmlFor="workshop name">
              Workshop Name:
            </label>
            <div className="workshop-input">
              <input 
                onChange={this.handleChange}
                name="name" 
                value={this.state.value} 
                type="text" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="workshop location">
              Workshop Location:
            </label>
            <div className="workshop-input">
              <input 
                onChange={this.handleChange}
                name="location" 
                value={this.state.value}
                type="text" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="technology involved">
              Technology Involved:
            </label>
            <div className="workshop-input">
              <input 
                onChange={this.handleChange}
                name="techInvolved" 
                value={this.state.value}
                type="text" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="workshop description">
              Workshop Description:
            </label>
            <div className="workshop-input">
              <textarea rows="8" cols="50" placeholder="Talk about what activities that participants can expect during your workshop!">
              </textarea>
            </div>
          </div>

        <div>
          <input 
            id="workshop-submit-butt"
            type="submit" 
            value="Post your workshop!" 
            onSubmit={this.handleSubmit}
          />
        </div>

        </form>
        
      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default WorkshopsForm;

