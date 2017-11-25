import React, { Component } from 'react';
import Header from '../../Matchday/Header'
import BigNumberStat from './BigNumberStat'
import PieGraph from './PieGraph'
import GamesGoalsAssists from './GamesGoalsAssists'
import './stats.css'

class Stats extends Component {
  render() {
    let chosenTeam = this.props.chosenTeam
    let chosenStats = this.props.chosenStats
    let shotsStyle = {
      marginLeft: "15%"
    }
    let primaryColor;
    if(chosenTeam == 'club_team') primaryColor = { border: "0.08em solid #fde200" }
    else if(chosenTeam == 'nat_team') primaryColor = { border: "0.08em solid #c3182c" }

    return (
        <div>
          <GamesGoalsAssists stats={chosenStats} />
          <div className="stats-container clearfix">
            <div id="shots-header"><text>On Target</text></div>
            <BigNumberStat style={shotsStyle} label="Shots" stat="44" />
            <div id="shots-on-target-pie">
              <PieGraph color={primaryColor} stat={'Shots'} label={'On Target'} value={'78'} align={'right'}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Stats;

//test color schemes
//US Primary: #235683
//US Secondary: #c3182c
//BVB Primary: black
//BVB Secondary: #fde200