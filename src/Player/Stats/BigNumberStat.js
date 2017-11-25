import React, { Component } from 'react';
import './stats.css';

class BigNumberStat extends Component {
    render() {
        const {label, stat, style} = this.props
        return (
            <li style={style} className="big-number-stat btn list-group-item">
                <p>{label}</p>
                <p>{stat}</p>
            </li>
        );
  }
}

export default BigNumberStat;