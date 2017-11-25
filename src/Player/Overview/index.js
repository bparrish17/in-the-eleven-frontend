import React, { Component } from 'react';
import './overview.css';

class PlayerHeader extends Component {
  render() {
    const overview = this.props.overview
    const images = this.props.images
    return (
        <div id="player-header"className="jumbotron jumbotron-fluid">
            <div id="player-header-container" className="container">
                <div id="player-image-container">
                    <img id="player-image" src={images.player_image} alt="..." />
                </div>
                <div id="player-info-container">
                    <h2 id="player-name" className="display-3">{overview.first_name + ' ' + overview.last_name}</h2>
                    <p>  <i>#22</i> | Winger </p>
                    <div id="player-club-country">
                        <img src={images.nat_image} className="img-fluid" alt="..."/>
                        <img src={images.club_image} className="img-fluid" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PlayerHeader;
