import React, { Component } from 'react'
import FollowedPlayer from './FollowedPlayer'
import MatchContainer from './MatchContainer'
import Header from './Header'
import {images, players, matchdayMatches} from '../../testData'
import './matchday.css'

class Matchday extends Component {
  render() {
    return (
      <div>
        <div id="my-matches" className="col-xs-7">
          <Header text="My Matches" />
          {matchdayMatches.map(match => <MatchContainer key={match.id} match={match} />)}
        </div>
        <div id="my-players" className="col-xs-4">
          <Header text="My Players"/>
          {players.map(player => <FollowedPlayer key={player.id} player={player} />)}
        </div>
      </div>
    );
  }
}

export default Matchday;