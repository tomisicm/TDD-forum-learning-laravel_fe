import { FETCH_CURRENT_USER } from "../constants"

export function fetchCurrentUser(payload) {
  return { type: FETCH_CURRENT_USER, payload }
}
