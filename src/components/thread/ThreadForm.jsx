import React, { Component } from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import BaseInput from "./../../components/common/BaseInput"
import BaseDropdownSelect from "./../../components/common/BaseDropdownSelect"
import BaseButton from "./../../components/common/BaseButton"
import BaseIcon from "./../../components/common/BaseIcon"

import ContentEditable from "react-contenteditable"

import threadService from "../../utils/services/thread-service"
import subscriptionService from "../../utils/services/subscription-service"

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer,
    channelReducer: state.channelReducer
  }
}

class ThreadForm extends Component {
  state = {
    formEditState: this.props.formEditState,
    thread: { ...this.props.thread },
    selectedOption: {},
    errors: {}
  }

  // TODO: this is most likely hack. figure out a way without Redux
  componentDidUpdate(prevProps) {
    if (this.props.thread !== prevProps.thread) {
      this.setState({ thread: this.props.thread })
      this.setState({ selectedOption: this.props.thread.channel })
    }
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

  handleUpdateChannel = (option, m) => {
    const thread = Object.assign(this.state.thread, {
      channel_id: option.id
    })

    Object.assign(thread.channel, option)

    this.setState({ thread })
  }

  handleUpdateThreadBody = evt => {
    const body = evt.target.value
      .toString()
      .trimLeft()
      .trimRight()
      .replace(/&nbsp;/g, " ")
      .replace(/&nbsp;&nbsp;/g, " ")

    const thread = {
      ...this.state.thread,
      body: body
    }

    this.setState({ thread: thread })
  }

  handleUpdateThreadTitle = evt => {
    const thread = {
      ...this.state.thread,
      title: evt.target.value.toString().replace(/&nbsnbsp;/g, "")
    }

    this.setState({ thread: thread })
  }

  handleSave() {
    threadService.saveThread({ ...this.state.thread }).then(data => {
      this.props.history.push(`/threads/${data.id}`)
    })
    // otherviwe user is already on the /threads/:id page
    // update state
    this.toggleEditState()
  }

  handleSubscription() {
    // subscriptionService.subscribe(this.state.thread.id)
  }

  render() {
    const { user } = this.props.userReducer
    const { channels } = this.props.channelReducer

    const { errors, thread, formEditState, selectedOption } = this.state

    return (
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
                    onChange={this.handleUpdateThreadTitle}
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
          <div className="row">
            <div className="col-md-10">
              {formEditState && (
                <React.Fragment>
                  <BaseDropdownSelect
                    selectedOption={selectedOption || "Thread Channel"}
                    options={channels}
                    handleSelectOption={this.handleUpdateChannel}
                  />

                  <div className="row">
                    <div className="col-md-2 mt-1">Content:</div>
                    <div className="col mt-1 w-100">
                      <ContentEditable
                        html={thread.body}
                        disabled={false}
                        onChange={this.handleUpdateThreadBody}
                      />
                      {errors.body && errors.body.toString()}
                    </div>
                  </div>
                </React.Fragment>
              )}
              {!formEditState && (
                <div className="card-text my-3">{thread.body}</div>
              )}
            </div>

            <div className="col-md-2">
              {user && (
                <BaseIcon
                  classes={
                    thread.isSubscribedTo
                      ? "btn-sm btn-success"
                      : "btn-sm btn-outline-success"
                  }
                >
                  <i className="fa fa-bell rounded-sm"></i>
                </BaseIcon>
              )}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row text-muted">
            <div className="col-md-4">
              Total replies: {thread.replies_count}
            </div>
            <div className="col mr-auto">Last Update: {thread.updated_at}</div>
            {/* TODO: Remove if user not current user*/}
            <div className="col-auto">
              {!formEditState && (
                <React.Fragment>
                  <BaseButton
                    onClick={() => this.toggleEditState()}
                    label={"Edit"}
                    classes="btn btn-primary mx-2"
                  />
                  <BaseButton
                    onClick={() => this.handleDelete()}
                    label={"Delete"}
                    classes="btn btn-danger mx-2"
                  />
                </React.Fragment>
              )}

              {formEditState && (
                <BaseButton
                  onClick={() => this.handleSave()}
                  label={"Save"}
                  classes="btn btn-success mx-2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ThreadForm)
