// Main.js is used to render routes.
// The Main component renders the provided
// Routes (provided that one matches). and loads the component


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Workshops from './components/Workshops';
import WorkshopsForm from './components/WorkshopsForm';
import Projects from './components/Projects';
import ProjectsForm from './components/ProjectsForm';
// import Login from './components/Login';
// ****** Remember to add imports for every new Webpage!!!!!!!!!!
// ^^^^ Yeah!!!



const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/workshops' component={Workshops} />
            <Route exact path='/workshopsform' component={WorkshopsForm} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projectsform' component={ProjectsForm} />
            {/* <Route exact path='/login' component={Login} /> */}
        </Switch>
    </main>
)

export default Router;
