import http from "./http-service"

class ProfileService {
  getUserProfile(name) {
    return http.get(`/api${name}`)
  }
}

const profileService = new ProfileService()

export default profileService
