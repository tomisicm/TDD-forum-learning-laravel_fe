import http from "./http-service"

class ChannelsService {
  getChannels() {
    return http.get("/channels")
  }
}

const channelsService = new ChannelsService()

export default channelsService
