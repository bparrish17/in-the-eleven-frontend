import React, { Component } from 'react'
import {connect} from 'react-redux';
import LeagueOverview from './Overview'
import LeagueTable from './LeagueTable'
import Fixtures from './Fixtures'

class League extends Component {
  render() {
    let { teams } = this.props;
    return (
        <div>
            <LeagueOverview teams={teams} />
            <LeagueTable teams={teams} />
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