import React, { Component } from 'react';
import './ProjectsForm.css';

class ProjectsForm extends Component {
  
  state = {
    name: '',
    location: '',
    tech: '',
    description: '',
    people: ''
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
          <h1 className="project-h1">let newProject = &#123;</h1>
        </div>

        <form 
          className="project-form" 
          onSubmit={this.handleSubmit} 
        >

          <div>
            <label htmlFor="project name">
              Project Name:
            </label>
            <div className="project-input">
              <input 
                onChange={this.handleChange}
                name="name" 
                value={this.state.value} 
                type="text" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="project location">
              Project Location:
            </label>
            <div className="project-input">
              <input 
                onChange={this.handleChange}
                name="location" 
                value={this.state.value}
                type="text"
                placeholder="You can also allow remote work." 
              />
            </div>
          </div>

          <div>
            <label htmlFor="technology involved">
              Technology Involved:
            </label>
            <div className="project-input">
              <input 
                onChange={this.handleChange}
                name="techInvolved" 
                value={this.state.value}
                type="text" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="project description">
              Project Description:
            </label>
            <div className="project-input">
              <textarea rows="8" cols="50" placeholder="Pitch your project. Why should we be interested? What is your goal?">
              </textarea>
            </div>
          </div>

          <div>
            <label htmlFor="desired skills">
              Desired Skills:
            </label>
            <div className="project-input">
              <textarea rows="8" cols="50" placeholder="List the kind of people you want, including coders, artists, designers, writers, etc.">
              </textarea>
            </div>
          </div>

        <div>
          <input 
            id="project-submit-butt"
            type="submit" 
            value="Post your project!" 
            onSubmit={this.handleSubmit}
          />
        </div>

        </form>

      </div>

    ); // ENDS RETURN
  } // ENDS RENDER
} // ENDS COMPONENT

export default ProjectsForm;

