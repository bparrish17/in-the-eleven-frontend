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
const getTeams = teams => ({ type: GET_TEAMS, teams });

/**
 * THUNK CREATORS
 */
export const getTeamsThunk = () =>
  dispatch =>
    axios.get('/api/teams')
      .then(res => {
          console.log('data', res.data)
      })
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