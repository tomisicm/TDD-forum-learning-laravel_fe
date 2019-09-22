import React, { Component } from "react"
import { Link } from "react-router-dom"

class ThreadReplies extends Component {
  state = {}
  render() {
    const { replies } = this.props

    return (
      <div>
        {replies.map(item => (
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
    )
  }
}

export default ThreadReplies
