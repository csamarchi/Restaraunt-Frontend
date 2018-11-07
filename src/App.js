import React, { Component } from 'react';
import './App.css';
import RestarauntContainer from './RestarauntContainer';
import { Route, Link, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Profile from './Profile';
import Welcome from './Welcome';


  const App = () => {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={RestarauntContainer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/welcome" component={Welcome} />
          </Switch>
          </div>
    )
}

export default App;
