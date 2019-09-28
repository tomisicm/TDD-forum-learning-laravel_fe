import React, { Component } from "react"

import ThreadReply from "../../components/thread/Reply"
import repliesService from "../../utils/services/replies-service"

class ThreadReplies extends Component {
  state = {
    replies: {
      data: []
    }
  }

  componentDidMount() {
    repliesService
      .getRepliesForThread(this.props.threadId)
      .then(({ data }) => this.setState({ replies: data }))
  }

  render() {
    const { replies } = this.state

    return (
      <React.Fragment>
        <div>
          {replies.data.map(reply => (
            <ThreadReply key={reply.id} reply={reply} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default ThreadReplies
