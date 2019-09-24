import http from "./http-service"

import jwtDecode from "jwt-decode"

class AuthService {
  async login(body) {
    const { data: jwt } = await http.post("/api/login", body)

    localStorage.setItem("jwt", JSON.stringify(jwt))
    // localStorage.setItem("user", JSON.stringify(jwtDecode(jwt.token)))
  }

  async logout() {
    localStorage.removeItem("jwt")
  }

  register(body) {
    return http.post("/api/register", body)
  }
}

export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("user")

    return jwtDecode(user)
  } catch (error) {
    return null
  }
}

export function getJwt() {
  try {
    const jwt = localStorage.getItem("jwt")

    if (jwt) return JSON.parse(jwt).type + " " + JSON.parse(jwt).token
    return ""
  } catch (error) {}
}

const authService = new AuthService()

export default authService
