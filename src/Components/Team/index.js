import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPlayersThunk} from '../../Store'
import TeamOverview from './Overview'
import Roster from './Roster'
import UpcomingMatches from './Matches'
import './team.css'

class Team extends Component {
    componentDidMount() {
        this.props.loadPlayers(this.props.match.params.id)
    }
    render() {
        const id = this.props.match.params.id
        let { teams, players } = this.props;
        let team = teams.find(team => team.id === Number(id))
        return (
            <div>
                { team ? <TeamOverview team={team} /> : <div></div> }
                <div id="team-info" className="clearfix">
                    { players && team ? <Roster players={players} /> : <div/>}
                    { team ? <UpcomingMatches team={team} /> : <div/>}
                </div>
            </div>
        );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        teams: state.teams,
        players: state.players
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      loadPlayers (id) {
        dispatch(getPlayersThunk(id))
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Team)