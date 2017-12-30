import axios from 'axios'
import history from '../history'
//ACTION TYPES

const GET_PLAYERS = 'GET_PLAYERS'

// INITIAL STATE
const players = [];

// ACTION CREATORS
const getPlayers = players => {
    return { 
        type: GET_PLAYERS, 
        players
    }
};


/**
 * THUNK CREATORS
 */
export const getPlayersThunk = (teamId) =>
  dispatch =>
    axios.get(`http://localhost:3000/api/teams/${teamId}/players`)
      .then(res => res.data)
      .then(players => {
        dispatch(getPlayers(players))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = players, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return action.players;
    default:
      return state
  }
}