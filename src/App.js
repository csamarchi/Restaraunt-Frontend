import React, { Component } from 'react';
import './App.css';
import RestarauntContainer from './RestarauntContainer';
import { Route, Link, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Profile from './Profile';


  const App = () => {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={RestarauntContainer} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          </div>
    )
}

export default App;
