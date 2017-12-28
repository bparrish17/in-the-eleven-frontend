import React, { Component } from 'react';
import TableTeam from './TableTeam'
import TableHeader from './TableHeader'
import Header from '../../Matchday/Header'
import './leaguetable.css';

class LeagueTable extends Component {
    render() {
        const { teams } = this.props;
        return (
            <div id="league-table" className="col-xs-8">
                <Header text="League Table" />
                <TableHeader />
                {teams.map((team, index)=> <TableTeam team={team} standing={index}/>)}
            </div>
        );
    }
}

export default LeagueTable;