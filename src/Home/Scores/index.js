import React, { Component } from 'react'
import MatchDate from './MatchDate'
import SingleScore from './SingleScore'
import * as images from '../../../src/testData';
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
        const leagues = ['All Leagues', 'Premier League', 'Bundesliga', 'Serie A', 'Major League Soccer', 'Liga MX', 'Championship', 'Champions League', 'Europa League']
        const matches = [
            {   id: 1,
                league: 'Bundesliga',
                home: { name: 'Dortmund', img: images.bvbImage, goals: 2 },
                away: { name: 'Hamburg', img: images.hsvImage, goals: 1 },
                played: true,
                time: 'FT'
            }, 
            {
                id: 2,
                league: 'Premier League',
                home: { name: 'Newcastle', img: images.nufcImage, goals: 0 },
                away: { name: 'Watford', img: images.wfcImage, goals: 0 },
                played: false,
                time: '10:00 am'
            },
            {
                id: 3,
                league: 'Major League Soccer',
                home: { name: 'NY Red Bulls', img: images.nyrbImage, goals: 2 },
                away: { name: 'Atlanta United', img: images.aufcImage, goals: 3 },
                played: false,
                time: '9:30 pm'
            },
            {
                id: 4,
                league: 'Premier League',
                home: { name: 'Manchester City', img: images.mcfcImage, goals: 0 },
                away: { name: 'Manchester Utd', img: images.manuImage, goals: 0 },
                played: false,
                time: '12:30 pm'
            },
            {
                id: 5,
                league: 'Premier League',
                home: { name: 'Arsenal', img: images.afcImage, goals: 1 },
                away: { name: 'Chelsea', img: images.cfcImage, goals: 4 },
                played: true,
                time: 'FT'
            },
            {
                id: 6,
                league: 'Premier League',
                home: { name: 'Everton', img: images.efcImage, goals: 2 },
                away: { name: 'Liverpool', img: images.lfcImage, goals: 2 },
                played: false,
                time: '9:45 pm'
            },
            {
                id: 7,
                league: 'Bundesliga',
                home: { name: 'Schalke 04', img: images.s04Image, goals: 1 },
                away: { name: 'Bayern Munich', img: images.bmunImage, goals: 2 },
                played: false,
                time: '9:30 am'
            }
        ]
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