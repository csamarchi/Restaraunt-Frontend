import React, { Component } from 'react';
import './App.css';
import RestarauntContainer from './RestarauntContainer';
import { Route, Link, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Profile from './Profile';
import Welcome from './Welcome';
import Login from './Login';



  const App = () => {
    return (
      <div>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');
      </style>
          <Switch>
            <Route exact path="/" component={RestarauntContainer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/login" component={Login} />
          </Switch>
          </div>
    )
}

export default App;
