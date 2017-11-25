import React, { Component } from 'react';
import './matchday.css';

class Match extends Component {
    render() {
        const {match} = this.props;
        return (
            <div id="match-score-container" className="btn-group">
                <li className="team-icon btn list-group-item">
                    <img src={match.homeTeamImage} className="team-icon-img img-fluid" alt="..."/>
                </li>
                <li className="team-name match-info btn list-group-item">{match.homeTeam}</li>
                <li className="score match-info btn-no-click list-group-item">0</li>
                <li id="match-time" className="match-info btn-no-click list-group-item">{match.time}</li>
                <li className="match-info score btn-no-click list-group-item">0</li>
                <li className="team-name match-info btn list-group-item">{match.awayTeam}</li>
                <li className="team-icon btn list-group-item">
                    <img src={match.awayTeamImage} className="team-icon-img img-fluid" alt="..."/>
                </li>
            </div>
        );
    }
  }
  
  export default Match;