import React, { Component } from "react"

import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"
import ThreadReplies from "../../components/thread/ThreadReplies"

class Thread extends Component {
  state = {
    thread: {}
  }

  componentDidMount() {
    const { match } = this.props

    threadService
      .getThread(match.params.thread)
      .then(({ data }) => this.setState({ thread: data }))
  }

  render() {
    const { history } = this.props
    const { thread } = this.state

    return (
      <div>
        <div className="container-fluid my-3">
          {thread && (
            <ThreadForm thread={thread} history={history}></ThreadForm>
          )}

          <div className="mx-2">
            {thread.replies && <ThreadReplies threadId={thread.id} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Thread
