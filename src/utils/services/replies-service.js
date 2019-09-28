import http from "./http-service"

class RepliesService {
  getRepliesForThread(thread) {
    return http.get(`/api/threads/${thread}/replies`)
  }

  createReply(threadId, body) {
    return http.post(`/api/threads/${threadId}/replies`, body)
  }

  editReply(replyId, body) {
    return http.post(`/api/replies/${replyId}`, body)
  }

  // saveReply(reply) {
  //   const replyId = reply.id
  //   return http.put(`/api/replies/${replyId}`, reply)
  // }
}

const repliesService = new RepliesService()

export default repliesService
