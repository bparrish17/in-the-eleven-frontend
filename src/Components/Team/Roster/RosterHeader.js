import React, { Component } from 'react';
import './roster.css';

class RosterHeader extends Component {
    render() {
        return (
            <div id="roster-header">
                <div className="roster-header-nat-pos roster-header-items">Nat.</div>
                <div className="roster-header-nat-pos roster-header-items">Pos.</div>
                <div className="roster-header-name roster-header-items">Name</div>
            </div>
        );
    }
}

export default RosterHeader;