import React, { Component } from 'react';
import './leaguetable.css';

class TableHeader extends Component {
    render() {
        return (
            <div id="table-header">
                <div id="header-club" className="header-items">Club</div>
                <div className="header-stats header-items">P</div>
                <div className="header-stats header-items">MP</div>
                <div className="header-stats header-items">W</div>
                <div className="header-stats header-items">D</div>
                <div className="header-stats header-items">L</div>
                <div className="ignore-mobile header-stats header-items">GF</div>
                <div className="ignore-mobile header-stats header-items">GA</div>
                <div className="ignore-mobile header-stats header-items">GD</div>
            </div>
        );
    }
}

export default TableHeader;