import React, { Component } from 'react'
import MatchDate from './MatchDate'
import SingleScore from './SingleScore'
import ScoresHeader from './ScoresHeader'
import './scores.css'

class Scores extends Component {
  render() {
    const bvbImage = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg'
    const hsvImage = 'https://i.eurosport.com/_iss_/sport/football/club/logo/small/4202.png'
    const nufcImage = 'https://cdn.thenovinatorcloud.com/Production/newcastle/WebImages/badges/club/128x128/62.png'
    const wfcImage = 'watford.png'
    const matches = [
        {
            home: { name: 'Dortmund', img: bvbImage, goals: 2 },
            away: { name: 'Hamburg', img: hsvImage, goals: 1 },
            ongoing: true,
            time: 60
        }, 
        {
            home: { name: 'Newcastle', img: nufcImage, goals: 0 },
            away: { name: 'Watford', img: wfcImage, goals: 0 },
            ongoing: false,
            time: '10:00 am'
        }
        
    ]
    return (
      <div id="scores-container">
        <ScoresHeader />
        <div id="scores-scroller">
            <MatchDate date={'Today'}/>
            <div id="single-scores">
                { matches.map(match => <SingleScore match={match} />)}
            </div>
        </div>
      </div>
    );
  }
}

export default Scores