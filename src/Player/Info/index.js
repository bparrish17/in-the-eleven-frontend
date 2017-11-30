import React, { Component } from 'react'
import Header from '../../Matchday/Header'
import InfoItem from './InfoItem'
import './info.css'

class PlayerInfo extends Component {
  render() {
    const playerData = this.props.playerData
    console.log('data', playerData)
    return (
        <div>
          <Header text="Info" />
          <ul id="player-info-list" className="list-group">
            {
              Object.keys(playerData).map(label => {
                return <InfoItem key={playerData[label][1]} label={label[0].toUpperCase() + label.slice(1)} value ={playerData[label]} />
              })
            }
          </ul>
        </div>
    );
  }
}

export default PlayerInfo;