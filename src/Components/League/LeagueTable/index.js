import React, { Component } from 'react';
import TableTeam from './TableTeam'
import TableHeader from './TableHeader'
import './leaguetable.css';

class LeagueTable extends Component {
    render() {
        const { teams } = this.props;
        return (
            <div id="league-table" className="col-xs-8">
                <TableHeader />
                {teams.map(team => <TableTeam team={team} />)}
            </div>
        );
    }
}

export default LeagueTable;