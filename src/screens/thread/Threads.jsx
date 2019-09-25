import React, { Component } from "react"

import threadService from "../../utils/services/thread-service"

import ThreadList from "../../components/thread/ThreadList"

class Threads extends Component {
  state = {
    threads: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
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

export default Threads
