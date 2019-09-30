import http from "./http-service"

class SubscriptionService {
  subscribe(id) {
    return http.post(`/api/threads/${id}/subscribe`)
  }

  favorite(id) {
    return http.post(`/api/threads/${id}/favorite`)
  }
}

const subscriptionService = new SubscriptionService()

export default subscriptionService
