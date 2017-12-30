import React, { Component } from 'react';
import Header from '../../Matchday/Header'
import './matches.css';

class Matches extends Component {
    render() {
        const { team } = this.props;
        return (
            <div id="upcoming-matches-container" className="col-xs-6">
                <Header text="Upcoming Matches" />

            </div>
        );
    }
}

export default Matches;