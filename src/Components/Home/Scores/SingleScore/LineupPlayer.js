import React, { Component } from 'react';
import {connect} from 'react-redux';

import store from '../../../../Store'
import { getTeamsThunk } from '../../../../Store/teams'
import './singlescore.css';

const mapStateToProps = (state) => {
    return ({
      teams: state.teams,
    });
  };

class LineupPlayer extends Component {
  render() {
    console.log('props', this.props)
    const { player, status } = this.props;
    return (
        <div className="lineup-player">
            <div>{player}</div>
            <div>{status}</div>
        </div>
    );
  }
}


export default connect(mapStateToProps)(LineupPlayer);