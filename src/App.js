import React, { Component } from 'react';
import './App.css';
import RestarauntContainer from './RestarauntContainer';
import { Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div className="App">
        <RestarauntContainer />
          <Switch>
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </div>
    );
  }
}

export default App;
