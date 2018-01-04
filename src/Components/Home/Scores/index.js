import React, { Component } from 'react'
import {connect} from 'react-redux';
import MatchDate from './MatchDate'
import SingleScore from './SingleScore'
import store from '../../../Store'
import { getTeamsThunk } from '../../../Store/teams'
import { images, leagues, matches } from '../../../../src/testData';
import './scores.css'

class Scores extends Component {
    constructor(props) {
        super(props);
        this.state = { league: '' }
        this.filterLeague = this.filterLeague.bind(this)
        this.sortByPlayed = this.sortByPlayed.bind(this)
        this.timeSort = this.timeSort.bind(this)
    }

    filterLeague(league) {
        if(league === this.state.league || !this.state.league || this.state.league === 'All Leagues') {
            return true;
        }
    }

    timeSort() {
        let times = matches
            .map(match => match.time)
            .filter(time => time !== 'FT')
            .sort((a,b) => new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b))
        
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
        const { teams } = this.props
        return (
            <div id="scores-container">
                <div id="scores-header">
                    <div id="left-break"></div>
                    {leagues.map((league, idx) => <div key={idx} id="league" className="btn" onClick={() => this.setState({league: league})}>{league}</div>)}
                </div>
                <div id="scores-scroller">
                    <MatchDate date={'Today'}/>
                    <div id="single-scores">
                        {/* teams.map(team => <SingleScore key={team.id} team={team} />) */}
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

const mapStateToProps = (state, ownProps) => {
    return {
        teams: state.teams
    }
};


export default connect(mapStateToProps)(Scores)