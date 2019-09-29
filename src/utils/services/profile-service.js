import http from "./http-service"

class ProfileService {
  getUserProfile(name) {
    return http.get(`/api/profile/${name}`)
  }
}

const profileService = new ProfileService()

export default profileService
