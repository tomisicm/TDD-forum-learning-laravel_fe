import React, { Component } from "react"
import { Link } from "react-router-dom"

import repliesService from "../../utils/services/replies-service"
import BaseTextarea from "../../components/common/BaseTextarea"

class Reply extends Component {
  state = {
    formEditState: false,
    reply: {
      body: "",
      creator: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.reply !== state.reply) {
      return { reply: { ...props.reply } }
    }
  }

  toggleEditState() {
    this.setState({ formEditState: !this.state.formEditState })
  }

  updateReply = ({ target }) => {
    console.log(target.value)
    this.setState({
      [target.name]: { body: target.value }
    })
  }

  handleDelete() {
    console.log(this.props)
    // repliesService.deleteReply(this.props.reply)
  }

  handleSave() {
    repliesService.editReply(this.state.reply)
    this.toggleEditState()
  }

  isEditable() {
    return (
      this.props.currentUser &&
      this.props.reply.user_id === this.props.currentUser.id
    )
  }

  isDeletable() {
    return (
      this.props.currentUser &&
      this.props.reply.user_id === this.props.currentUser.id
    )
  }

  render() {
    const { reply } = this.state
    const { formEditState } = this.state

    return (
      <React.Fragment>
        <div className="card my-2" key={reply.id}>
          <div className="card-header">
            <div className="row justify-content">
              <div className="col">
                <Link to={`/profile/${reply.creator.name}`}>
                  {reply.creator.name}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ padding: "0.5rem" }}>
            <div className="card-text">
              {!formEditState && <div>{reply.body}</div>}
              {formEditState && (
                <div>
                  <BaseTextarea
                    value={reply.body}
                    onChange={this.updateReply}
                    name={"reply"}
                    className="w-100"
                  />
                </div>
              )}
            </div>
          </div>

          {(this.isDeletable() || this.isEditable()) && (
            <div className="card-footer">
              <div className="row text-muted">
                {!formEditState && (
                  <React.Fragment>
                    {this.isEditable() && (
                      <button
                        onClick={() => this.toggleEditState()}
                        type="button"
                        className="btn-sm btn-primary mx-2"
                      >
                        Edit
                      </button>
                    )}
                    {this.isDeletable() && (
                      <button
                        onClick={this.handleDelete}
                        type="button"
                        className="btn-sm btn-danger mx-2"
                      >
                        Delete
                      </button>
                    )}
                  </React.Fragment>
                )}

                {formEditState && (
                  <React.Fragment>
                    <button
                      onClick={() => this.handleSave()}
                      type="button"
                      className="btn-sm btn-success mx-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => this.handleCancel()}
                      type="button"
                      className="btn-sm btn-info mx-2"
                    >
                      Cancel
                    </button>
                  </React.Fragment>
                )}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Reply
