// Main.js is used to render routes.
// The Main component renders the provided
// Routes (provided that one matches). and loads the component


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Workshops from './components/Workshops';
<<<<<<< HEAD
import Projects from './components/Projects';
=======
import WorkshopDetails from './components/Workshops/WorkshopDetails';
import WorkshopsForm from './components/WorkshopsForm';
import Projects from './components/Projects';
import ProjectsForm from './components/ProjectsForm';
import ProjectDetails from './components/Projects/ProjectDetails';
// import Login from './components/Login';
>>>>>>> 1fa84d0014a72018daf328f0e3227cade6cf5eb2
// ****** Remember to add imports for every new Webpage!!!!!!!!!!
// ^^^^ Yeah!!!



const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/workshops' component={Workshops} />
            <Route exact path='/workshopsform' component={WorkshopsForm} />
            <Route exact path='/workshopdetails' component={WorkshopDetails} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projectsform' component={ProjectsForm} />
            <Route exact path='/projectdetails' component={ProjectDetails} />
            {/* <Route exact path='/login' component={Login} /> */}
        </Switch>
    </main>
)

export default Router;
