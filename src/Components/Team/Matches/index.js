import React, { Component } from 'react';
import Header from '../../Matchday/Header'
import Fixture from '../../League/Fixtures/Fixture'
import './matches.css';

class Matches extends Component {
    render() {
        const { team } = this.props;
        const match = { home: team, away: team, time: '9:00 am' }
        return (
            <div id="upcoming-matches-container" className="col-xs-6">
                <Header text="Upcoming Matches" />
                <Fixture match={match} />
            </div>
        );
    }
}

export default Matches;