import React, { Component } from 'react'
import Header from '../../Matchday/Header'
import RosterPlayer from './RosterPlayer'
import RosterHeader from './RosterHeader'
import './roster.css'

class Roster extends Component {
    render() {
        const { players } = this.props;
        return (
            <div id="roster-container" className="col-xs-5">
                <Header text="Roster" />
                { players.map((player, idx) => <RosterPlayer key={idx} player={player} />) }
            </div>
        );
    }
}

export default Roster;