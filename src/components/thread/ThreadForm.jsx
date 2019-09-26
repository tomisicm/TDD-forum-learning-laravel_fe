import React, { Component } from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import BaseInput from "./../../components/common/Input"
import ContentEditable from "react-contenteditable"

import threadService from "../../utils/services/thread-service"

const mapStateToProps = state => {
  return { user: state.user }
}

class ThreadForm extends Component {
  state = {
    formEditState: this.props.formEditState,

    errors: {}
  }

  static defaultProps = {
    formEditState: false
  }

  toggleEditState() {
    this.setState({ formEditState: !this.state.formEditState })
  }

  handleDelete() {
    console.log(this.props.thread.id)
  }

  handleSave() {
    threadService
      .saveThread({ ...this.props.thread })
      .then(({ data }) => console.log(data))
    // async call
    // if new object then redirect on view page
    // otherviwe user is already on the /threads/:id page
    // this.toggleEditState()
  }

  render() {
    const {
      thread,
      handleUpdateThreadBody,
      handleUpdateThreadTitle
    } = this.props

    const { errors, formEditState } = this.state

    return (
      <React.Fragment>
        <div className="card my-2 w-100" key={thread.id}>
          <div className="card-header">
            <div className="row justify-content">
              <div className="col-md-8">
                {!formEditState && <span>Title: {thread.title}</span>}
                {formEditState && (
                  <div>
                    <BaseInput
                      name="title"
                      value={thread.title}
                      onChange={handleUpdateThreadTitle}
                      label="Title:"
                      classes="ml-3"
                      error={errors.title}
                    />
                  </div>
                )}
              </div>

              {thread.creator && (
                <div className="col">
                  <Link to={`/profile/${thread.creator.name}`}>
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
            {formEditState && (
              <div>
                <ContentEditable
                  html={thread.body}
                  disabled={false}
                  onChange={handleUpdateThreadBody}
                />
                {errors.body && errors.body.toString()}
              </div>
            )}
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

export default connect(mapStateToProps)(ThreadForm)
