import { FETCH_CHANNELS } from "../constants"

const initialState = {
  channels: []
}

function channelReducer(state = initialState, action) {
  if (action.type === FETCH_CHANNELS) {
    state = { ...state, channels: action.payload }
    return state
  }

  return state
}

export default channelReducer
