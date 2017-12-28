import React, { Component } from 'react';
import './leaguetable.css';

class TableTeam extends Component {
    render() {
        let { team, standing } = this.props;
        return (
            <div id="table-team-container">
                <div  className="table-club table-items">
                    <div className="table-club-standing">{standing++}</div>
                    <div className="table-crest-container">
                        <img src={team.crest_url} className="table-crest img-fluid" alt="..."/>
                    </div>
                    <div className="table-club-name">{team.name}</div>
                </div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
                <div className="table-stats table-items">0</div>
            </div>
        );
    }
}

export default TableTeam;