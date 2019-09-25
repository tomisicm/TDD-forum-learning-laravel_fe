import { FETCH_CURRENT_USER } from "../constants"
import userService from "../../utils/services/user-service"

export function fetchCurrentUser() {
  return async function(dispatch, getState) {
    const data = await userService.getCurrentUser()

    dispatch({ type: FETCH_CURRENT_USER, payload: data })
  }
}
