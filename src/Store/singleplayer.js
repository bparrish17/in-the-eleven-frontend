import axios from 'axios'
import history from '../history'
//ACTION TYPES

const GET_SINGLE_PLAYER = 'GET_SINGLE_PLAYER'

// INITIAL STATE
const player = [];

// ACTION CREATORS
const getSinglePlayer = player => {
    return { 
        type: GET_SINGLE_PLAYER, 
        player
    }
};


/**
 * THUNK CREATORS
 */
export const getSinglePlayerThunk = (teamId, playerId) =>
  dispatch =>
    axios.get(`http://localhost:3000/api/teams/${teamId}/players/${playerId}`, {
        headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.data)
      .then(player => {
        dispatch(getSinglePlayer(player))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = player, action) {
  switch (action.type) {
    case GET_SINGLE_PLAYER:
      return action.player;
    default:
      return state
  }
}