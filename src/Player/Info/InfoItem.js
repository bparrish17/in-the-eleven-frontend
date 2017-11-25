import React, { Component } from 'react';
import './info.css';

class InfoItem extends Component {
    render() {
    const {label, value} = this.props
    return (
        <li className="info-item list-group-item">
            <div><text>{label}</text></div>
            <div><text><strong>{value}</strong></text></div>
        </li>
    );
  }
}

export default InfoItem;