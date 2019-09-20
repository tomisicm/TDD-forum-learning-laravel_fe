import http from "./http-service"

import jwtDecode from "jwt-decode"

class AuthService {
  async login(body) {
    const { data: jwt } = await http.post("/login", body)

    localStorage.setItem("jwt", JSON.stringify(jwt))
    // localStorage.setItem("user", JSON.stringify(jwtDecode(jwt.token)))
  }

  async logout() {
    localStorage.removeItem("jwt")
  }
}

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem("jwt")

    return jwtDecode(jwt.token)
  } catch (error) {
    return null
  }
}

export function getJwt() {
  try {
    const jwt = localStorage.getItem("jwt")

    return jwt
  } catch (error) {}
}

const authService = new AuthService()

export default authService
