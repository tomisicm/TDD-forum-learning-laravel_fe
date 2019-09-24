import { FETCH_CURRENT_USER } from "../constants"

const initialState = {
  user: {}
}

function userReducer(state = initialState, action) {
  if (action.type === FETCH_CURRENT_USER) {
    state = Object.assign({}, state, { user: action.data })

    return state
  }

  return state
}

export default userReducer
