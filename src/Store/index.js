import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import teams from './teams'
import players from './players'
import singlePlayer from './singleplayer'

const reducer = combineReducers({teams, players, singlePlayer})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './teams'
export * from './players'
export * from './singleplayer'