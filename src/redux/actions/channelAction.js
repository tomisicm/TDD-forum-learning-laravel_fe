import { FETCH_CHANNELS } from "../constants"
import channelsService from "../../utils/services/channels-service"

export function fetchChannels() {
  return async function(dispatch, getState) {
    const data = await channelsService.getChannels()

    dispatch({ type: FETCH_CHANNELS, payload: data })
  }
}
