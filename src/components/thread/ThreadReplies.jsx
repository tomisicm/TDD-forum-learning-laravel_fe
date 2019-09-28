import React, { Component } from "react"
import { connect } from "react-redux"

import ThreadReply from "../../components/thread/Reply"
import AddThreadReply from "../../components/thread/AddReply"
import repliesService from "../../utils/services/replies-service"

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  }
}

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

  createReplyHandler = () => {
    repliesService
      .createReply(this.props.threadId, this.state.newReply)
      .then(({ data }) => {
        this.setState(({ replies }) => ({
          replies: {
            ...replies,
            data: [...replies.data, data]
          },
          newReply: {
            body: ""
          }
        }))
      })
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
    const currentUser = this.props.userReducer.user

    return (
      <React.Fragment>
        <div>
          {replies.data &&
            replies.data.map(reply => (
              <ThreadReply
                key={reply.id}
                reply={reply}
                currentUser={currentUser}
              />
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

export default connect(
  mapStateToProps,
  null
)(ThreadReplies)
