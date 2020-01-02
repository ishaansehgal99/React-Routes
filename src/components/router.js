import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Users from "./users";
import React from "react";

export default class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/about' component = {About}/>
                    <Route path = '/users' component = {Users}/>
                </Switch>
            </Router>
        );
    }
}
