import React, { Component } from "react"

// import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"

class AddThread extends Component {
  state = {
    thread: {
      title: "",
      body: "",
      channel_id: null,
      channel: {}
    }
  }

  handleUpdateChannel = (option, m) => {
    const thread = Object.assign(this.state.thread, {
      channel_id: option.id
    })

    Object.assign(thread.channel, option)

    this.setState({ thread })
  }

  handleUpdateThreadBody = evt => {
    const body = evt.target.value
      .toString()
      .trimLeft()
      .trimRight()
      .replace(/&nbsp;/g, " ")
      .replace(/&nbsp;&nbsp;/g, " ")

    const thread = {
      ...this.state.thread,
      body: body
    }

    this.setState({ thread: thread })
  }

  handleUpdateThreadTitle = evt => {
    const thread = {
      ...this.state.thread,
      title: evt.target.value.toString().replace(/&nbsnbsp;/g, "")
    }

    this.setState({ thread: thread })
  }

  render() {
    const { thread } = this.state

    return (
      <div className="container-fluid my-3">
        add new thread
        <div className="row">
          <ThreadForm
            thread={thread}
            formEditState={true}
            selectedOption={thread.channel}
            handleSelectChannel={this.handleUpdateChannel}
            handleUpdateThreadBody={this.handleUpdateThreadBody}
            handleUpdateThreadTitle={this.handleUpdateThreadTitle}
          />
        </div>
      </div>
    )
  }
}

export default AddThread
