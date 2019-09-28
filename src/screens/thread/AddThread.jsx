import React, { Component } from "react"

// import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"

class AddThread extends Component {
  state = {}

  static defaultProps = {
    formEditState: false,
    thread: {
      title: "",
      body: "",
      channel: {},
      channel_id: null
    }
  }

  render() {
    const { history } = this.props

    return (
      <div className="container-fluid my-3">
        <h1>Add new thread</h1>
        <div className="row">
          <ThreadForm
            formEditState={true}
            thread={this.props.thread}
            history={history}
          />
        </div>
      </div>
    )
  }
}

export default AddThread
