import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Contents of the Home Page are for this javascript file
const Home = () => (

    <div className='home'>

<<<<<<< HEAD
        <h4 class = "card-title">Are you looking to learn new skills? workshops</h4>

        asldmlkam   mkmalsdmkalskal dmakld malskdm alskdmalskmdlask lorem123 
        <br/>
        <Link to='./workshops' class="btn btn-primary">Find a Workshop Today</Link> 
        </div>
        <div className='projects'>
        <h4 class="card-title">Need a team to work on a project with</h4>
        projects asiodmasodmas dmaksld mkasld mlaks dmalsk mdlask dmlaskm dlaksm dlaks mdlak mdlak mdlask mdalsk
        <br /> 
        <Link to='./projects' class="btn btn-primary">Project Listings</Link>
=======
        <div className="home-hero-image">
            <div className="home-stripes"></div>
            <div className="home-stripes"></div>
            <div className="home-stripes"></div>
            <div className="home-stripes"></div>
            <div className="home-stripes"></div>

            <div className="home-stripes-red"></div>
            <div className="home-stripes-red"></div>
            <div className="home-stripes-red"></div>
            <div className="home-stripes-red"></div>
>>>>>>> 1fa84d0014a72018daf328f0e3227cade6cf5eb2
        </div>

        {/* <h1 className='home-h1-2'>Learn, work, and play.</h1><h1 className='home-h1-2'><strong>Let's code together.</strong></h1> */}

            <div className='workshops'>
                <h1 className='home-h1'>Want to learn new coding skills?</h1>
                <Link to='./workshops' className="home-find-butt">Find a coding workshop near you</Link> 
            </div>
            
            <div className='projects'>
                <h1 className='home-h1'>Want to help develop a project?</h1>
                <Link to='./projects'  className="home-find-butt">Let's find something to build</Link>
            </div>

        </div>

);

export default Home;