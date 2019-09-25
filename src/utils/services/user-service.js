import http from "./http-service"

import { setCurrentUser } from "./auth-service"

class UserService {
  async getCurrentUser() {
    const { data } = await http.get("/api/me")

    setCurrentUser(data)

    return data
  }
}

const userService = new UserService()

export default userService
