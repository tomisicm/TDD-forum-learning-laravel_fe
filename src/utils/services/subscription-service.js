import http from "./http-service"

class SubscriptionService {
  subscribe(id) {
    return http.post(`/api/threads/${id}/subscriptions`)
  }

  favorite(id) {
    return http.post(`/api/replies/${id}/favorites`)
  }
}

const subscriptionService = new SubscriptionService()

export default subscriptionService
