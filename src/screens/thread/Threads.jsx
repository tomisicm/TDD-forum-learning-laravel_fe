import React, { Component } from "react"

import threadService from "../../utils/services/thread-service"

class Threads extends Component {
  state = {
    threads: []
  }

  componentDidMount() {
    threadService
      .getThreads(window.location.pathname.replace("/channel", ""))
      .then(({ data }) => this.setState({ threads: data }))
  }

  render() {
    return <div>Threads for the given channel!</div>
  }
}

export default Threads
