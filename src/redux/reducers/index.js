import { combineReducers } from "redux"

import userReducer from "../reducers/userReducer"
import channelReducer from "../reducers/channelReducer"

export default combineReducers({
  userReducer,
  channelReducer
})
