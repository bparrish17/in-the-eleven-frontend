import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './leaguetable.css';

class TableTeam extends Component {
    render() {
        let { team, standing } = this.props;
        return (
            <div id="table-team-container">
                <Link to={`/teams/${team.id}`}>
                    <div  className="table-club table-items">
                        <div className="table-club-standing">{standing+1}</div>
                        <div className="table-crest-container">
                            <img src={team.crest_url} className="table-crest img-fluid" alt="..."/>
                        </div>
                        <div className="table-club-name">{team.name}</div>
                    </div>
                </Link>
                <div className="table-stats table-items">33</div>
                <div className="table-stats table-items">17</div>
                <div className="table-stats table-items">10</div>
                <div className="table-stats table-items">3</div>
                <div className="table-stats table-items">4</div>
                <div className="table-stats table-items">64</div>
                <div className="table-stats table-items">45</div>
                <div className="table-stats table-items">+19</div>
            </div>
        );
    }
}

export default TableTeam;