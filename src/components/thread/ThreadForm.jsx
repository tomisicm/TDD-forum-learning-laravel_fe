import React from "react"
import { Link } from "react-router-dom"

import Form from "../../components/common/Form"

class ThreadForm extends Form {
  state = {
    formEditState: false
  }

  toggleEditState() {
    this.setState({ formEditState: !this.state.formEditState })
  }

  handleDelete() {
    console.log(this.props.thread.id)
  }

  handleSave() {
    // async call
    this.toggleEditState()
  }

  render() {
    const { thread } = this.props
    const { formEditState } = this.state

    return (
      <React.Fragment>
        <div className="card my-2" key={thread.id}>
          <div className="card-header">
            <div className="row justify-content">
              <div className="col-md-8">
                {!formEditState && <span>Title: {thread.title}</span>}
                {formEditState && <div>INSERT INPUT</div>}
              </div>
              {/* TODO: Remove current user is user */}
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
            {!formEditState && (
              <div className="card-text my-3">{thread.body}</div>
            )}
            {formEditState && <div>INSERT TEXTAREA</div>}
          </div>
          <div className="card-footer">
            <div className="row text-muted">
              <div className="col-md-4">
                Total replies: {thread.replies_count}
              </div>
              <div className="col mr-auto">
                Last Update: {thread.updated_at}
              </div>
              {/* TODO: Remove if user not current user*/}
              <div className="col-auto">
                {!formEditState && (
                  <React.Fragment>
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
                  </React.Fragment>
                )}

                {formEditState && (
                  <button
                    onClick={() => this.handleSave()}
                    type="button"
                    className="btn btn-success mx-2"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ThreadForm
