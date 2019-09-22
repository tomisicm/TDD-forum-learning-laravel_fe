import React from "react"
import { Link } from "react-router-dom"

import Form from "../../components/common/Form"

class ThreadForm extends Form {
  state = {
    edit: false
  }

  toggleEditState() {
    this.state.edit = !this.state.edit
    console.log(this.state.edit)
  }

  handleDelete() {
    console.log(this.props.thread.id)
  }

  render() {
    const { thread } = this.props
    return (
      <React.Fragment>
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
                <button
                  onClick={() => this.toggleEditState()}
                  type="button"
                  className="btn btn-primary mx-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.handleDelete()}
                  type="button"
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ThreadForm
