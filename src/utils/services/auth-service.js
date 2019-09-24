import http from "./http-service"

import jwtDecode from "jwt-decode"

class AuthService {
  async login(body) {
    const { data: jwt } = await http.post("/api/login", body)

    localStorage.setItem("jwt", JSON.stringify(jwt))
    // localStorage.setItem("user", JSON.stringify(jwtDecode(jwt.token)))
  }

  register(body) {
    return http.post("/api/register", body)
  }

  logout() {
    localStorage.removeItem("jwt")
  }

  setAuthHeaders(token) {
    if (!token) {
      delete http.defaults.headers.common["Authorization"]
      return
    }
    return (http.defaults.headers.common["Authorization"] = `${token}`)
  }
}

export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("user")

    return user
  } catch (error) {
    throw error
  }
}

export function getJwt() {
  try {
    const jwt = localStorage.getItem("jwt")

    if (jwt) return JSON.parse(jwt).type + " " + JSON.parse(jwt).token

    return null
  } catch (error) {
    throw error
  }
}

const checkToken = service => {
  let token = getJwt()

  if (token) {
    service.setAuthHeaders(token)
  }
}

const authService = new AuthService()

checkToken(authService)

export default authService
