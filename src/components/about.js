import React from 'react'

import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import AboutHome from "./AboutHome";
import AboutHomeId from './AboutHomeId'



const About = () =>{
    return (

        <Router>
            <Switch>
                <Route exact path = '/about'  component = {AboutHome}/>
                <Route path = '/about/:id' component = {AboutHomeId}/>
            </Switch>
        </Router>

    )
};

export default About;
