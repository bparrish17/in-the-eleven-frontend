import React, { Component } from 'react'
import {connect} from 'react-redux';
import TeamOverview from './Overview'

class Team extends Component {
  render() {
    const id = this.props.match.params.id
    let { teams } = this.props;
    let team = teams.find(team => team.id === Number(id))
    console.log('team lkjl', team)
    return (
        <div>
            { team ? <TeamOverview team={team} /> : <div></div> }
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        teams: state.teams
    }
};

export default connect(mapStateToProps)(Team)