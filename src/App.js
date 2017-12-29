import React, { Component } from 'react';
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import { Matchday, Player, Home, League } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="page">
          <Home />
          <Switch>
            <Route exact path="/" component={Matchday} />
            <Route exact path="/leagues/:league" component={League} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
