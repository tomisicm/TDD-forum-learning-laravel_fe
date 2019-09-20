import http from "./http-service"

class UserService {
  register(body) {
    return http.post("/register", body)
  }
}

const userService = new UserService()

export default userService
