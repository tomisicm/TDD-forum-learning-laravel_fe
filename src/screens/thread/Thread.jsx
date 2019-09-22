import React, { Component } from "react"

import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"
import ThreadReplies from "../../components/thread/ThreadReplies"

class Thread extends Component {
  state = {
    thread: {}
  }

  componentDidMount() {
    threadService
      .getThread(window.location.pathname)
      .then(({ data }) => this.setState({ thread: data }))
  }

  render() {
    const { thread } = this.state

    return (
      <div>
        <div className="container-fluid my-3">
          {thread && <ThreadForm thread={thread}></ThreadForm>}

          <div className="mx-2">
            {thread.replies && <ThreadReplies replies={thread.replies} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Thread
