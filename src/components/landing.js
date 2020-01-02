import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import About from "./about";
import Users from "./users";
import Home from "./home";


export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/users">Users</Link></li>
                    <li><Link to = "/home">Home</Link></li>

                </ul>


            </div>
        );
    }
}

