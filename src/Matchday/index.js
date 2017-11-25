import React, { Component } from 'react';
import FollowedPlayer from './FollowedPlayer';
import Header from './Header';
import './matchday.css';

class Matchday extends Component {
  render() {
    let players = [
      { name: 'Christian Pulisic', team: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg', opp: 'Hertha Berlin', gametime: '9:30 AM' },
      { name: 'Bobby Wood', team: 'https://i.eurosport.com/_iss_/sport/football/club/logo/small/4202.png', opp: 'Bayern Munich', gametime: '12:30 PM' }, 
      { name: 'DeAndre Yedlin', team: 'https://cdn.thenovinatorcloud.com/Production/newcastle/WebImages/badges/club/128x128/62.png', opp: 'Manchester City', gametime: '10:00 AM' },
      { name: 'Tyler Adams', team: 'https://78.media.tumblr.com/avatar_3c2a542f43c3_128.png', opp: 'Columbus Crew', gametime: '8:30 PM'}
    ]
    return (
      <div id="matchday-container">
        <Header text="Matchday"/>
        {players.map(player => <FollowedPlayer name={player.name} team={player.team} opp={player.opp} gametime={player.gametime} />)}
      </div>
    );
  }
}

export default Matchday;