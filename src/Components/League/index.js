import React, { Component } from 'react'
import {connect} from 'react-redux';
import LeagueOverview from './Overview'
import LeagueTable from './LeagueTable'
import Fixtures from './Fixtures'
import LeaguePlayers from './LeaguePlayers'

class League extends Component {
  render() {
    let { teams } = this.props;
    return (
        <div>
            <LeagueOverview teams={teams} />
            <LeagueTable teams={teams} />
            <LeaguePlayers />
            <Fixtures teams={teams}/>
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