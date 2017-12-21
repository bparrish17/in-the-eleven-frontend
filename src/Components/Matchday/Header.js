import React, { Component } from 'react';
import './matchday.css';

class Header extends Component {
    render() {
        const {text, firstTab, secondTab} = this.props;
        return (
            <div id="matchday-header-container">
                <div>
                    <text>{text}</text>
                    { firstTab ? <div className="header-tabs"><text>{firstTab}</text></div> : <div></div>}
                    { secondTab ? <div className="header-tabs"><text>{secondTab}</text></div> : <div></div>}
                </div>
                <div id="player-separator"></div>
            </div>
        );
    }
}
  
  export default Header;