import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_TEAM_FIXTURES = 'GET_TEAM_FIXTURES'

// INITIAL STATE
const teamFixtures = [];

// ACTION CREATORS
const getTeamFixtures = fixtures => {
    return { 
        type: GET_TEAM_FIXTURES, 
        fixtures
    }
};


/**
 * THUNK CREATORS
 */
export const getTeamFixturesThunk = (teamId) =>
  dispatch =>
    axios.get(`http://localhost:3000/api/teams/${teamId}/fixtures`)
      .then(res => res.data)
      .then(fixtures => {
        dispatch(getTeamFixtures(fixtures))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = teamFixtures, action) {
  switch (action.type) {
    case GET_TEAM_FIXTURES:
      return action.teamFixtures;
    default:
      return state
  }
}