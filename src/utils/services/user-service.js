import http from "./http-service"

import { setCurrentUserToLS } from "./auth-service"

class UserService {
  async getCurrentUser() {
    const { data } = await http.get("/api/me")

    setCurrentUserToLS(data)

    return data
  }
}

const userService = new UserService()

export default userService
