import React, { Component } from 'react'
import {connect} from 'react-redux';
import LeagueOverview from './Overview'
import LeagueTable from './LeagueTable'
import Fixtures from './Fixtures'
import LeaguePlayers from './LeaguePlayers'
import './league.css'

class League extends Component {
  render() {
    let { teams } = this.props;
    return (
        <div>
            <LeagueOverview teams={teams} />
            <div id="league-info">
                <div className="clearfix">
                    <LeagueTable teams={teams} />
                    <LeaguePlayers />
                </div>
                <Fixtures teams={teams}/>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        teams: state.teams
    }
};

export default connect(mapStateToProps)(League)