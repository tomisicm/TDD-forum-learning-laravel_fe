import http from "./http-service"

// import jwtDecode from "jwt-decode"

class AuthService {
  async login(body) {
    return http
      .post("/api/login", body)
      .then(({ data }) => {
        this.loggingIn(data)
      })
      .catch(error => {
        throw error
      })
  }

  register(body) {
    return http.post("/api/register", body)
  }

  logout() {
    localStorage.removeItem("jwt")
  }

  loggingIn(data) {
    localStorage.setItem("jwt", JSON.stringify(data))
    this.setAuthHeaders()
  }

  setAuthHeaders() {
    const token = getJwt()

    if (!token) {
      return delete http.defaults.headers.common["Authorization"]
    }
    return (http.defaults.headers.common["Authorization"] = `${token}`)
  }
}

export const setCurrentUser = user => {
  try {
    localStorage.setItem("user", JSON.stringify(user))
  } catch (error) {
    throw error
  }
}

export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("user")

    return JSON.parse(user)
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
