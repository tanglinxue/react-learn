import countReducer from './count'
import personReducer from './person'

import { combineReducers } from 'redux'

export default combineReducers({
  countReducer,personReducer
})
