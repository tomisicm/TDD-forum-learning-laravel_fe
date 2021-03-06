import React, { Component } from "react"

import ThreadList from "../../components/thread/ThreadList"

import threadService from "../../utils/services/thread-service"

class ChannelThreads extends Component {
  state = {
    threads: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      threadService
        .getThreads(
          window.location.pathname.replace("/channel", "") +
            window.location.search
        )
        .then(({ data }) => this.setState({ threads: data }))
    }
  }

  render() {
    return <ThreadList threads={this.state.threads} />
  }
}

export default ChannelThreads
