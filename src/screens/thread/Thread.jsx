import React, { Component } from "react"
import { Link } from "react-router-dom"

import threadService from "../../utils/services/thread-service"

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
          {thread && (
            <div className="card my-2" key={thread.id}>
              <div className="card-header">
                <div className="row justify-content">
                  <div className="col-md-8">Title: {thread.title}</div>
                  {thread.creator && (
                    <div className="col">
                      <Link to={`/profiles/${thread.creator.name}`}>
                        Author: {thread.creator.name}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-body" style={{ padding: "0.5rem" }}>
                <div className="card-text">{thread.body}</div>
                <div className="row">
                  <div className="col">Replies: {thread.replies_count}</div>
                  <div className="col">Updated At: {thread.updated_at}</div>
                </div>
              </div>
            </div>
          )}
          <div className="mx-2">
            {thread.replies &&
              thread.replies.map(item => (
                <div className="card my-2" key={item.id}>
                  <div className="card-header">
                    <div className="row justify-content">
                      <div className="col">
                        <Link to={`/profiles/${item.creator.name}`}>
                          {item.creator.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: "0.5rem" }}>
                    <div className="card-text">{item.body}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Thread
