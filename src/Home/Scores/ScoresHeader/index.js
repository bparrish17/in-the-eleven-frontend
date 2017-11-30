import React, { Component } from 'react'
import './scoresheader.css'

class ScoresHeader extends Component {
  render() {
    const leagues = ['Premier League', 'Bundesliga', 'Serie A', 'Major League Soccer', 'Championship', 'Champions League']
    return (
        <div id="scores-header">
            <div id="left-break"></div>
                {leagues.map(league => {
                    return (
                        <div id="league" key={league.charCodeAt(0)} className="btn"> 
                            {league}
                        </div>
                    )
                })}
        </div>
    );
  }
}

export default ScoresHeader