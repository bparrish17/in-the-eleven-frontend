import React, { Component } from 'react';
import Media from 'react-media';
import SingleScore from '../../Home/Scores/SingleScore'
import { matches } from '../../../../src/testData';
import './fixtures.css';

class Fixture extends Component {
    render() {
        const { match } = this.props;
        return (
            <div id="league-fixture-container">
                <Media query="(max-width: 425px)" render={() => (
                    <SingleScore match={match} />
                )}/>
                <Media query="(min-width: 425px)" render={() => (
                    <div id="match-score-container" className="btn-group">
                        <li className="team-icon btn list-group-item">
                            <img src={match.home.crest_url} className="team-icon-img img-fluid" alt="..."/>
                        </li>
                        <li className="team-name match-info btn list-group-item">{match.home.name}</li>
                        <li className="score match-info btn-no-click list-group-item">0</li>
                        <li id="match-time" className="match-info btn-no-click list-group-item">{match.time}</li>
                        <li className="match-info score btn-no-click list-group-item">0</li>
                        <li className="team-name match-info btn list-group-item">{match.away.name}</li>
                        <li className="team-icon btn list-group-item">
                            <img src={match.away.crest_url} className="team-icon-img img-fluid" alt="..."/>
                        </li>
                    </div>
                )}/>
            </div>
        );
    }
  }
  
  export default Fixture;