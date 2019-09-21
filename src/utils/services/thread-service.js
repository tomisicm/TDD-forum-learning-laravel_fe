import http from "./http-service"

class ThreadService {
  getThreads(channel) {
    return http.get(`/api${channel}`)
  }
}

const threadService = new ThreadService()

export default threadService
