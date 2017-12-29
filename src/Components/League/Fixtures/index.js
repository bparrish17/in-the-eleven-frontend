import React, { Component } from 'react';
import Fixture from './Fixture'
import Header from '../../Matchday/Header'
import './fixtures.css';

class Fixtures extends Component {
    render() {
        const { teams } = this.props;
        let testMatches = []
        for(var i=0; i<teams.length; i=i+2) {
            testMatches.push({ time: '10:00 am', home: teams[i], away: teams[i+1]})
        }
        return (
            <div id="fixtures-container" className="col-xs-8">
                <Header text="Fixtures" />
                { testMatches.map((match, index) => <Fixture key={index} match={match} />)}
            </div>
        );
    }
}

export default Fixtures;