import React from 'react';
import './App.css';
// import Routes from './components/router'
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

 const App = () => {
  return (
      <Router>
          <Switch>
              <Route exact path = '/'  component = {Home}/>
              <Route path = '/about' component = {About}/>

              <Route path = '/users' component = {Users}/>

              {/*<Route path={`${match.path}/:id`} render= {({match}) =>( <div> <h3> {match.params.id} </h3></div>)}/>*/}

              {/*<Route path = '/about/:id' component = {Users}/>*/}
          </Switch>
      </Router>
  );
}




export default App;
