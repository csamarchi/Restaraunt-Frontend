import React from 'react';
import './App.css';
import RestarauntContainer from './RestarauntContainer';
import { Route, Switch } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import Profile from './Profile';
import Welcome from './Welcome';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';




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
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
          </Switch>
          </div>
    )
}

export default App;
