import React from "react"
import { Link } from "react-router-dom"

import replyService from "../../utils/services/replies-service"

import Form from "../../components/common/Form"

class Reply extends Form {
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
    const { reply, user } = this.props
    const { formEditState } = this.state

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
          {user && (
            <div className="card-footer">
              {!formEditState && (
                <React.Fragment>
                  <button
                    onClick={() => this.toggleEditState()}
                    type="button"
                    className="btn-sm btn-primary mx-2"
                  >
                    Edit
                  </button>
                  <button type="button" className="btn-sm btn-danger mx-2">
                    Delete
                  </button>
                </React.Fragment>
              )}
              {formEditState && (
                <button
                  onClick={() => this.handleSave()}
                  type="button"
                  className="btn-sm btn-success mx-2"
                >
                  Save
                </button>
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Reply
