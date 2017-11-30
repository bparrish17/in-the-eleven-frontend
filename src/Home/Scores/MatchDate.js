import React, { Component } from 'react';
import './scores.css';

class MatchDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }
  render() {
    let date = this.state.date;
    return (
        <div id="match-date">
            <button
                id="match-date-button"
                className="navbar-buttons btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
            >
            {date} <span id="category-caret" className="caret" />
            </button>
            <ul id="category-dropdown" className="dropdown-menu" aria-labelledby="dropdownMenu1">
                
            </ul>
        </div>
    );
  }
}

export default MatchDate;