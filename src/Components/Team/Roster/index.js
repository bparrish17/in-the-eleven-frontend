import React, { Component } from 'react'
import Header from '../../Matchday/Header'
import RosterPlayer from './RosterPlayer'
import './roster.css'

class Roster extends Component {
    render() {
        const { players, teamImg } = this.props;
        return (
            <div id="roster-container" className="col-xs-5">
                <Header text="Roster" />
                { players.map(player => <RosterPlayer player={player} teamImg={teamImg}/>) }
            </div>
        );
    }
}

export default Roster;