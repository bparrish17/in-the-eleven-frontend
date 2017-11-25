import React, { Component } from 'react';
import FollowedPlayer from './FollowedPlayer';
import MatchContainer from './MatchContainer';
import Header from './Header';
import './matchday.css';

class Matchday extends Component {
  render() {
    const bvbImage = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg'
    const hsvImage = 'https://i.eurosport.com/_iss_/sport/football/club/logo/small/4202.png'
    const nufcImage = 'https://cdn.thenovinatorcloud.com/Production/newcastle/WebImages/badges/club/128x128/62.png'
    const nyrbImage = 'https://78.media.tumblr.com/avatar_3c2a542f43c3_128.png'
    const wfcImage = 'watford.png'
    const getLineup = (team) => players.filter(player => player.team === team)
    let players = [
      { id: 1, name: 'Christian Pulisic', team: "Borussia Dortmund", teamImage: bvbImage, opp: 'Hertha Berlin', gametime: '9:30 AM', status: 'Starting' },
      { id: 2, name: 'Bobby Wood', team: "Hamburger SV", teamImage: hsvImage, opp: 'Bayern Munich', gametime: '12:30 PM', status: 'On Bench' }, 
      { id: 3, name: 'DeAndre Yedlin', team: "Newcastle United FC", teamImage: nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Starting' },
      { id: 4, name: 'Jonjo Shelvey', team: "Newcastle United FC", teamImage: nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Not in Lineup' },
      { id: 5, name: 'Christian Atsu', team: "Newcastle United FC", teamImage: nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Starting' },
      { id: 6, name: 'Tyler Adams', team: "New York Red Bulls", teamImage: nyrbImage, opp: 'Columbus Crew', gametime: '8:30 PM', status: 'Not in Lineup'}
    ]
    let matches = [
      { 
        id: 1,
        homeTeam: 'Borussia Dortmund', 
        awayTeam: 'Hamburger SV', 
        homeTeamImage: bvbImage,
        awayTeamImage: hsvImage,
        homeTeamLineup: getLineup('Borussia Dortmund'),
        awayTeamLineup: getLineup('Hamburger SV'),
        time: '9:30',
      },
      { 
        id: 2,
        homeTeam: 'Newcastle United', 
        awayTeam: 'Watford', 
        homeTeamImage: nufcImage,
        awayTeamImage: wfcImage,
        homeTeamLineup: getLineup('Newcastle United FC'),
        awayTeamLineup: getLineup('Watford'),
        time: '10:00',
      }
    ]
    return (
      <div id="matchday-container">
        <div id="matchday-players">
          <Header text="Players"/>
          {players.map(player => <FollowedPlayer key={player.id} player={player} />)}
        </div>
        <div id="matchday-matches">
          <Header text="Matches" />
          {matches.map(match => <MatchContainer key={match.id} match={match} />)}
        </div>
      </div>
    );
  }
}

export default Matchday;