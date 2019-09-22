import React, { Component } from "react"
import { Link } from "react-router-dom"

import threadService from "../../utils/services/thread-service"

import ThreadForm from "../../components/thread/ThreadForm"

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
          {thread && <ThreadForm thread={thread}></ThreadForm>}

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
                    <button type="button" className="btn-sm btn-primary mx-2">
                      Edit
                    </button>
                    <button type="button" className="btn-sm btn-danger mx-2">
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
