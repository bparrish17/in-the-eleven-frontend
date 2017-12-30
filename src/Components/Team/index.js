import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPlayersThunk} from '../../Store'
import TeamOverview from './Overview'

class Team extends Component {
    componentDidMount() {
        this.props.loadPlayers(this.props.match.params.id)
    }
    render() {
        const id = this.props.match.params.id
        let { teams, players } = this.props;
        console.log('pls', players)
        let team = teams.find(team => team.id === Number(id))
        return (
            <div>
                { team ? <TeamOverview team={team} /> : <div></div> }
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