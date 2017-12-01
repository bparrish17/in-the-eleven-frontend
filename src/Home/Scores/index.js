import React, { Component } from 'react'
import MatchDate from './MatchDate'
import SingleScore from './SingleScore'
import {images, leagues, matches} from '../../../src/testData';
import './scores.css'

class Scores extends Component {
    constructor() {
        super();
        this.state = { league: '' }
        this.filterLeague = this.filterLeague.bind(this)
        this.sortByPlayed = this.sortByPlayed.bind(this)
    }

    filterLeague(league) {
        if(league === this.state.league || !this.state.league || this.state.league === 'All Leagues') {
            return true;
        }
    }

    sortByPlayed(matchA, matchB) {
        const convertTime = (time) => {
            let colon = time.indexOf(':')
            let end = time.indexOf(' ');
            let newTime = Number(time.slice(0, colon)*60) + Number(time.slice(colon+1,end))
            return newTime;
        }
        if(matchA.played && matchB.played) return 0
        else if(matchB.played) return -1
        else if(matchA.played) return 1
        else {
            if(convertTime(matchA.time) > convertTime(matchB.time)) return 1
            else return -1;
        }
    }

    render() {
        return (
            <div id="scores-container">
                <div id="scores-header">
                    <div id="left-break"></div>
                    {leagues.map(league => <div id="league" className="btn" onClick={() => this.setState({league: league})}>{league}</div>)}
                </div>
                <div id="scores-scroller">
                    <div id="scores-selectors">
                        <MatchDate date={'Today'}/>
                        <div id="in-the-eleven">

                        </div>
                    </div>
                    <div id="single-scores">
                        { matches
                            .filter(match => this.filterLeague(match.league))
                            .sort(this.sortByPlayed)
                            .map(match => <SingleScore key={match.id} match={match} />)
                        }
                    </div>
                </div>
            </div>
        );
  }
}

export default Scores