import React, { Component } from 'react';
import './matchday.css';

class FollowedPlayer extends Component {
    render() {
        const {name, team, opp, gametime} = this.props;
        const nat_team = "https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
        return (
            <div key={name}>
                <div id="player-container" className="btn-group">
                    <li id="nt-team-icon" className="btn list-group-item">
                        <img id="team-icon-img" src={nat_team} className="img-fluid" alt="..."/>
                    </li>
                    <li id="club-team-icon" className="btn list-group-item">
                        <img id="team-icon-img" src={team} className="img-fluid" alt="..."/>
                    </li>
                    <li id="name"className="player-info btn list-group-item list-group-item-action">{name}</li>
                    <li id="opponent" className="player-info btn list-group-item"><b>Starting @</b> {opp}</li>
                    <li id="gametime" className="player-info btn list-group-item">{gametime}</li>
                </div>
                <div id="player-separator"></div>
            </div>
        );
    }
  }
  
  export default FollowedPlayer;