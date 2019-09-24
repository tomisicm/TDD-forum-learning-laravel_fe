import http from "./http-service"

class ChannelsService {
  getChannels() {
    return http.get("api/channels")
  }
}

const channelsService = new ChannelsService()

export default channelsService
