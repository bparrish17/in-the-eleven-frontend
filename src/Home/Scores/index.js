import React, { Component } from 'react'
import MatchDate from './MatchDate'
import SingleScore from './SingleScore'
import './scores.css'

class Scores extends Component {
    constructor() {
        super();
        this.state = { league: '' }
        this.filterLeague = this.filterLeague.bind(this)
    }

    filterLeague(league) {
        if(league === this.state.league || !this.state.league || this.state.league === 'All Leagues') {
            return true;
        }
    }
    render() {
        const bvbImage = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg'
        const hsvImage = 'https://i.eurosport.com/_iss_/sport/football/club/logo/small/4202.png'
        const nufcImage = 'https://cdn.thenovinatorcloud.com/Production/newcastle/WebImages/badges/club/128x128/62.png'
        const nyrbImage = 'https://78.media.tumblr.com/avatar_3c2a542f43c3_128.png'
        const aufcImage = 'aufc.png'
        const mcfcImage = 'mancity.png'
        const manuImage = 'manutd.png'
        const wfcImage = 'watford.png'
        const cfcImage = 'chelsea.png'
        const efcImage = 'everton.png'
        const afcImage = 'arsenal.png'
        const lfcImage = 'liverpool.png'
        const leagues = ['All Leagues', 'Premier League', 'Bundesliga', 'Serie A', 'Major League Soccer', 'Liga MX', 'Championship', 'Champions League', 'Europa League']
        const matches = [
            {
                league: 'Bundesliga',
                home: { name: 'Dortmund', img: bvbImage, goals: 2 },
                away: { name: 'Hamburg', img: hsvImage, goals: 1 },
                played: true,
                time: 'FT'
            }, 
            {
                league: 'Premier League',
                home: { name: 'Newcastle', img: nufcImage, goals: 0 },
                away: { name: 'Watford', img: wfcImage, goals: 0 },
                played: false,
                time: '10:00 am'
            },
            {
                league: 'Major League Soccer',
                home: { name: 'NY Red Bulls', img: nyrbImage, goals: 2 },
                away: { name: 'Atlanta United', img: aufcImage, goals: 3 },
                played: true,
                time: 'FT'
            },
            {
                league: 'Premier League',
                home: { name: 'Manchester City', img: mcfcImage, goals: 0 },
                away: { name: 'Manchester Utd', img: manuImage, goals: 0 },
                played: false,
                time: '12:30 pm'
            },
            {
                league: 'Premier League',
                home: { name: 'Arsenal', img: afcImage, goals: 1 },
                away: { name: 'Chelsea', img: cfcImage, goals: 4 },
                played: true,
                time: 'FT'
            },
            {
                league: 'Premier League',
                home: { name: 'Everton', img: efcImage, goals: 2 },
                away: { name: 'Liverpool', img: lfcImage, goals: 2 },
                played: true,
                time: 'FT'
            }
        ]
        console.log(this.state.league)
        return (
            <div id="scores-container">
                <div id="scores-header">
                    <div id="left-break"></div>
                    {leagues.map(league => <div id="league" className="btn" onClick={() => this.setState({league: league})}>{league}</div>)}
                </div>
                <div id="scores-scroller">
                    <MatchDate date={'Today'}/>
                    <div id="single-scores">
                        { matches
                            .filter(match => this.filterLeague(match.league))
                            .map(match => <SingleScore match={match} />)
                        }
                    </div>
                </div>
            </div>
        );
  }
}

export default Scores