import http from "./http-service"

class RepliesService {
  getRepliesForThread(thread) {
    return http.get(`/api/threads/${thread}/replies`)
  }

  createReply(threadId, body) {
    return http.post(`/api/threads/${threadId}/replies`, body)
  }

  editReply(reply) {
    return http.put(`/api/replies/${reply.id}`, reply)
  }

  deleteReply(reply) {
    return http.delete(`/api/replies/${reply.id}`)
  }

  // saveReply(reply) {
  //   const replyId = reply.id
  //   return http.put(`/api/replies/${replyId}`, reply)
  // }
}

const repliesService = new RepliesService()

export default repliesService
