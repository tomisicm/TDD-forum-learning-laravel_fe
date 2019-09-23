import React, { Component } from "react"

// import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"

class AddThread extends Component {
  state = {
    thread: {}
  }
  render() {
    const { thread } = this.state

    return (
      <div className="container-fluid my-3">
        add new thread
        <div className="row">
          <ThreadForm thread={thread} formEditState={true} />
        </div>
      </div>
    )
  }
}

export default AddThread
