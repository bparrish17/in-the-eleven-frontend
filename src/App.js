import React, { Component } from 'react';
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import history from './history'
import { Matchday, Player, Home, League, Team } from './Components';
import { getTeamsThunk } from './Store'
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Router history={history}>
        <div id="page">
          <Home />
          <Switch>
            <Route exact path="/" component={Matchday} />
            <Route exact path="/league" component={League} />
            <Route exact path="/teams/:teamId/players/:playerId" component={Player} />
            <Route exact path="/teams/:id" component={Team} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      teams: state.teams
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(getTeamsThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

