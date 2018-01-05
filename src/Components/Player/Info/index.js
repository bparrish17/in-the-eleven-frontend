import React, { Component } from 'react'
import Header from '../../Matchday/Header'
import InfoItem from './InfoItem'
import './info.css'

class PlayerInfo extends Component {
  render() {
    const {player, temp} = this.props
    const nationality = {...player.nationality}
    const position = {...player.position}
    const age = getAge(player.date_of_birth)
    return (
        <div>
          <Header text="Info" />
          <ul id="player-info-list" className="list-group">
            <InfoItem label='Age' value={age} />
            <InfoItem label='Nation' value={nationality.name} />
            <InfoItem label='Position' value={position.name} />
            {
              Object.keys(temp).map((label, idx) => {
                return <InfoItem key={idx} label={label[0].toUpperCase() + label.slice(1)} value ={temp[label]} />
              })
            }
          </ul>
        </div>
    );
  }
}

const getAge = (birthDate) => {
  let dob = new Date(birthDate)
  let today = new Date
  let timeDiff = Math.abs(today.getTime() - dob.getTime());
  return Math.floor(Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365); 
}

export default PlayerInfo;