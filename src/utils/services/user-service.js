import http from "./http-service"

class UserService {
  getCurrentUser() {
    return http.get("/me")
  }
}

const userService = new UserService()

export default userService
