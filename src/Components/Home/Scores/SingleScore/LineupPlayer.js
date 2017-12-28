import React, { Component } from 'react';
import {connect} from 'react-redux';

import store from '../../../../Store'
import { getTeamsThunk } from '../../../../Store/teams'
import './singlescore.css';


class LineupPlayer extends Component {
  render() {
    const { player, status } = this.props;
    return (
      <div className="lineup-player">
      <div>{player}</div>
      <div>{status}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({
      teams: state.teams,
    });
  };

export default connect(mapStateToProps)(LineupPlayer);