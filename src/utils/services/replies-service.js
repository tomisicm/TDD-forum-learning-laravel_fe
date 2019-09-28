import http from "./http-service"

class RepliesService {
  getRepliesForThread(thread) {
    return http.get(`/api/threads/${thread}/replies`)
  }

  createReply(threadId, body) {
    return http.post(`/api${threadId}`, body)
  }

  editReply(replyId, body) {
    return http.post(`/api${replyId}`, body)
  }

  saveReply() {}
}

const repliesService = new RepliesService()

export default repliesService
