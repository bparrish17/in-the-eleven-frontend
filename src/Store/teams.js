import axios from 'axios'
//import history from '../history'

/**
 * ACTION TYPES
 */
const GET_TEAMS = 'GET_TEAMS'

/**
 * INITIAL STATE
 */
const teams = [];

/**
 * ACTION CREATORS
 */
const getTeams = teams => {
    return { 
        type: GET_TEAMS, 
        teams 
    }
};

/**
 * THUNK CREATORS
 */
export const getTeamsThunk = () =>
  dispatch =>
    axios.get('http://localhost:3000/api/teams')
      .then(res => res.data)
      .then(teams => {
        dispatch(getTeams(teams))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = teams, action) {
  switch (action.type) {
    case GET_TEAMS:
      return action.teams;
    default:
      return state
  }
}