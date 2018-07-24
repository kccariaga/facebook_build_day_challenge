import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Contents of the Home Page are for this javascript file
const Home = () => (

    <div className='home'>

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