import React, { Component } from 'react'
import PlayerOverview from './Overview'
import PlayerStats from './Stats'
import PlayerInfo from './Info'
import '../App.css';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      chosenTeam: 'club_team'
    }
    this.chooseTeam = this.chooseTeam.bind(this);
  }

  chooseTeam(team) {
    this.setState({chosenTeam: team})
  }

  render() {
    let chosenTeam = this.state.chosenTeam
    let chosenStats = chosenTeam + '_stats';
    let testPlayer = {
      overview: {
        first_name: 'Christian', 
        last_name: 'Pulisic',
        club_team: 'Borussia Dortmund',
        nat_team: 'United States',
      },
      info: {
        age: 19,
        height: '5 ft. 9 in.',
        weight: '155 lbs',
        hometown: 'Hershey, Pennsylvania',
        academy: 'Borussia Dortmund U17',
        debut: 'March 17th, 2016',
        transfer: '$20,000,000'
      },
      images: {
        player_image: 'pulisic.png',
        club_image: 'bvb.png',
        nat_image: 'usmnt.png'
      },
      club_team_stats: {
        games: 13,
        goals: 6,
        assists: 4,
        shots: 44,
        on_target: 52
      },
      nat_team_stats: {
        games: 14,
        goals: 8,
        assists: 6,
        shots: 32,
        on_target: 72
      }
    }
    return (
        <div>
          {/* PlayerOverview Component at Top */}
          <PlayerOverview overview={testPlayer.overview} images={testPlayer.images}/>

          {/* Info Component in First Column */}
          <div className="player-columns col-xs-6">
            <PlayerInfo playerData={testPlayer.info}/>
          </div>

          {/* Stats Component in Second Column With Stateful Header */}
          <div className="player-columns col-xs-6">
            <div id="gameday-header-container">
              <text>Stats</text>
              <div className="header-tabs">
                <button className="header-tabs-btns btn btn-default" onClick={() => this.chooseTeam('nat_team')}><text>Country</text></button>
              </div>
              <div className="header-tabs">
                <button className="header-tabs-btns btn btn-default" onClick={() => this.chooseTeam('club_team')}><text>Club</text></button>
              </div>
              <div id="player-separator"></div>
            </div>
            <PlayerStats chosenStats={testPlayer[chosenStats]} chosenTeam={chosenTeam}/>
          </div>
        </div>
    );
  }
}

export default Player;