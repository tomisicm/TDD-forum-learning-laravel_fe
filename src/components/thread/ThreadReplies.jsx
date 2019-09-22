import React, { Component } from "react"

import ThreadReply from "../../components/thread/ThreadReply"

class ThreadReplies extends Component {
  state = {}
  render() {
    const { replies } = this.props

    return (
      <div>
        {replies.map(reply => (
          <ThreadReply key={reply.id} reply={reply} />
        ))}
      </div>
    )
  }
}

export default ThreadReplies
