import React, { Component } from "react"
import { Link } from "react-router-dom"

class ThreadReply extends Component {
  state = {}

  render() {
    const { reply } = this.props

    return (
      <React.Fragment>
        <div className="card my-2" key={reply.id}>
          <div className="card-header">
            <div className="row justify-content">
              <div className="col">
                <Link to={`/profiles/${reply.creator.name}`}>
                  {reply.creator.name}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ padding: "0.5rem" }}>
            <div className="card-text">{reply.body}</div>
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
      </React.Fragment>
    )
  }
}

export default ThreadReply
