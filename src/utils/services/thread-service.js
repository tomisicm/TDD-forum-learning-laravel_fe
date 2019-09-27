import http from "./http-service"

class ThreadService {
  getThreads(channel) {
    return http.get(`/api${channel}`)
  }

  getThread(channel, id) {
    return http.get(`/api${channel}`)
  }

  editThread(id, thread) {
    return http
      .put(`/api/threads/${id}`, thread)
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        throw error
      })
  }

  createThread(thread, channel) {
    return http
      .post(`/api/${channel}/threads`, thread)
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        throw error
      })
  }

  saveThread(thread) {
    const channel = thread.channel.name

    if (thread.id) {
      return this.editThread(thread.id, thread)
    } else {
      return this.createThread(thread, channel)
    }
  }
}

const threadService = new ThreadService()

export default threadService
