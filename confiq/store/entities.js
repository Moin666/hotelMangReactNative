import { combineReducers } from 'redux'

import hotelReducer from './hotelslice'

export default combineReducers({
  hotel : hotelReducer,  
})