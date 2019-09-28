import React, { Component } from "react"

import ThreadReply from "../../components/thread/Reply"
import AddThreadReply from "../../components/thread/AddReply"
import repliesService from "../../utils/services/replies-service"

class ThreadReplies extends Component {
  state = {
    replies: {
      data: []
    },
    newReply: {
      body: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.threadId !== prevProps.threadId) {
      repliesService
        .getRepliesForThread(this.props.threadId)
        .then(({ data }) => this.setState({ replies: data }))
    }
  }

  createReplyHandler = reply => {
    repliesService.createReply(this.props.threadId, reply).then(
      ({ data }) => console.log(data)
      // this.setState({ replies: data })
    )
  }

  updateNewReply = ({ target }) => {
    this.setState({
      [target.name]: {
        body: target.value
      }
    })
  }

  render() {
    const { replies, newReply } = this.state

    return (
      <React.Fragment>
        <div>
          {replies.data &&
            replies.data.map(reply => (
              <ThreadReply key={reply.id} reply={reply} />
            ))}
        </div>
        <div>
          <AddThreadReply
            reply={newReply}
            createReplyHandler={this.createReplyHandler}
            updateNewReply={this.updateNewReply}
            name={"newReply"}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default ThreadReplies
