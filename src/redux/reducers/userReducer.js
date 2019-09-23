import { FETCH_CURRENT_USER } from "../constants"

const initialState = {
  user: {}
}

function userReducer(state = initialState, action) {
  if (action.type === FETCH_CURRENT_USER) {
    state = Object.assign({}, state, action.payload)
  }

  return state
}

export default userReducer
