// Main.js is used to render routes.
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Workshops from './Workshops';
import Projects from './Projects';


// The Main component renders the provided
// Routes (provided that one matches). and loads the component

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/workshops' component={Workshops} />
            <Route path='/projects' component={Projects} />
        </Switch>
    </main>
)

export default Main
