import React, { Component } from 'react';
import './overview.css';

class PlayerHeader extends Component {
  render() {
    const team = {...this.props.team }
    const player = this.props.player
    let position = {...player.position}
    let nationality = {...player.nationality}
    let flag = nationality.iso_two_code ? ''.concat(nationality.iso_two_code).toLowerCase() : false
    console.log('fla', flag)
    return (
        <div id="player-header"className="jumbotron jumbotron-fluid">
            <div id="player-header-container" className="container clearfix">
                <div id="player-info-container">
                    <h2 id="player-name" className="display-3">{player.first_name + ' ' + player.last_name}</h2>
                    <p>  <i># {player.number}</i> | {position.code} </p>
                    <div id="player-club-country">
                        <img src={team.crest_url} className="img-fluid" alt="..."/>
                        {flag 
                            ? <div id="player-header-flag" className={"flag-icon flag-icon-" + flag}></div>
                            : <div id="player-header-nation">{nationality.name}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PlayerHeader;


//TEST DATA VERSION
// <div id="player-header"className="jumbotron jumbotron-fluid">
//             <div id="player-header-container" className="container clearfix">
//                 {/*<div id="player-image-container" className="clearfix">
//                     <img id="player-image" src={images.player_image} alt="..." />
//                 </div>*/}
//                 <div id="player-info-container">
//                     <h2 id="player-name" className="display-3">{overview.first_name + ' ' + overview.last_name}</h2>
//                     <p>  <i>#22</i> | Winger </p>
//                     <div id="player-club-country">
//                         <img src={images.nat_image} className="img-fluid" alt="..."/>
//                         <img src={images.club_image} className="img-fluid" alt="..."/>
//                     </div>
//                 </div>
//             </div>
//         </div>