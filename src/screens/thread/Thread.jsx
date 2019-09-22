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
                <div className="card-text my-3">{thread.body}</div>
              </div>
              <div className="card-footer">
                <div className="row text-muted">
                  <div className="col-md-4">
                    Total replies: {thread.replies_count}
                  </div>
                  <div className="col mr-auto">
                    Last Update: {thread.updated_at}
                  </div>
                  {/* TODO: Remove if user */}
                  <div className="col-auto">
                    <button type="button" class="btn btn-primary mx-2">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger mx-2">
                      Delete
                    </button>
                  </div>
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
                  {/* TODO: Remove if user */}
                  <div className="card-footer">
                    <button type="button" class="btn-sm btn-primary mx-2">
                      Edit
                    </button>
                    <button type="button" class="btn-sm btn-danger mx-2">
                      Delete
                    </button>
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
