import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './leagueoverview.css';

class PlayerSearchBar extends Component {
    render() {
        return (
            <div id="player-search-bar" className="input-group">
                <input id="search-form" type="text" className="form-control" placeholder="Search for players..."></input>
                <span id="player-search-span" className="input-group-btn">
                    <button id="player-search-btn" className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
        );
    }
}

export default PlayerSearchBar;