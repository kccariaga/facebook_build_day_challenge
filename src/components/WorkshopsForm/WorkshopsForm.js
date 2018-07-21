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
          onSubmit={this.handleSubmit} >
          <div>
            <label 
              htmlFor="workshop name" 
              className="workshop-name">
              Workshop Name:
            </label>
              {/* Workshop Name: */}
              <input 
                className="workshop-input"
                onChange={this.handleChange}
                name="name" 
                value={this.state.value} 
                type="text" />
            {/* </label> */}
          </div>
          <div>
            <label 
              htmlFor="workshop location" 
              className="workshop-comma">
              Workshop Location:
            </label>
            <input type="text" />
          </div>
          <div>
            <label 
              htmlFor="technology involved" 
              className="workshop-comma">
              Technology Involved:
            </label>
              <input type="text" />
          </div>
          <div>
            <label htmlFor="workshop description">
              Workshop Description:
            </label>
              <textarea rows="8" cols="50" placeholder="Talk about what activities that participants can expect during your workshop!">
              </textarea>
            
          </div>
          <input type="submit" value="submit" />
        </form>
        
      </div>
    );
  }
}

export default WorkshopsForm;

