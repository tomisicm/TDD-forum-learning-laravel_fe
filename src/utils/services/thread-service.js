import http from "./http-service"

class ThreadService {
  getThreads(channel) {
    return http.get(`/api${channel}`)
  }

  getThread(channel, id) {
    return http.get(`/api${channel}`)
  }

  editThread(id, body) {
    return http
      .put(`/api/threads/${id}`, body)
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        throw error
      })
  }

  createThread(thread) {
    return http
      .post(`/api/threads`, thread)
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        throw error
      })
  }

  saveThread(thread) {
    if (thread.id) {
      return this.editThread(thread)
    } else {
      return this.createThread(thread)
    }
  }
}

const threadService = new ThreadService()

export default threadService
