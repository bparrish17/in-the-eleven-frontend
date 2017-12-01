import React, { Component } from 'react'
import FollowedPlayer from './FollowedPlayer'
import MatchContainer from './MatchContainer'
import Header from './Header'
import {images, players, matchdayMatches} from '../testData'
import './matchday.css'

class Matchday extends Component {
  render() {
    return (
      <div id="matchday-container">
        <div id="matchday-players">
          <Header text="Players"/>
          {players.map(player => <FollowedPlayer key={player.id} player={player} />)}
        </div>
        <div id="matchday-matches">
          <Header text="My Matches" />
          {matchdayMatches.map(match => <MatchContainer key={match.id} match={match} />)}
        </div>
      </div>
    );
  }
}

export default Matchday;