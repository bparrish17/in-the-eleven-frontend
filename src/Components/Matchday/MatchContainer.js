import React, { Component } from 'react';
import Match from './Match'
import InfoItem from '../Player/Info/InfoItem'
import './matchday.css';

class MatchContainer extends Component {
    render() {
        const {match} = this.props;
        return (
            <div className="match-container">
                <Match match={match} />
                <div className="team-lineup col-xs-6">
                    { match.homeTeamLineup.map(player => <InfoItem key={player.id} label={player.name} value={player.status}/>)}
                </div>
                <div className="team-lineup col-xs-6">
                    { match.awayTeamLineup.map(player => <InfoItem key={player.id} label={player.name} value={player.status}/>)}
                </div>
            </div>
        );
    }
  }
  
  export default MatchContainer;