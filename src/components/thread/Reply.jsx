import React, { Component } from "react"
import { Link } from "react-router-dom"

import repliesService from "../../utils/services/replies-service"
import BaseTextarea from "../../components/common/BaseTextarea"
import BaseButton from "../../components/common/BaseButton"

class Reply extends Component {
  state = {
    formEditState: false,
    reply: null
  }

  componentWillMount(prevProps) {
    // if (this.props.reply !== prevProps.reply) {
    this.setState({ reply: this.props.reply })
    // }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.reply !== state.reply) {
  //     return { reply: { ...props.reply } }
  //   }
  // }

  toggleEditState() {
    this.setState({ formEditState: !this.state.formEditState })
  }

  updateReply = ({ target }) => {
    const reply = {
      ...this.state.reply,
      body: target.value
    }

    this.setState({
      reply: reply
    })
  }

  handleSave() {
    repliesService.editReply(this.state.reply)
    this.toggleEditState()
  }

  handleCancel() {
    this.setState({
      reply: { ...this.props.reply }
    })
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
    const { formEditState, reply } = this.state
    const { deleteReplyHandler } = this.props

    return (
      <React.Fragment>
        {reply && (
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
                        <BaseButton
                          onClick={() => this.toggleEditState()}
                          label={"Edit"}
                          classes="btn-sm btn-primary mx-2"
                        />
                      )}
                      {this.isDeletable() && (
                        <BaseButton
                          onClick={e => deleteReplyHandler(e, reply)}
                          label={"Delete"}
                          classes="btn-sm btn-danger mx-2"
                        />
                      )}
                    </React.Fragment>
                  )}

                  {formEditState && (
                    <React.Fragment>
                      <BaseButton
                        onClick={() => this.handleSave()}
                        label={"Save"}
                        classes="btn-sm btn-success mx-2"
                      />
                      <BaseButton
                        onClick={() => this.handleCancel()}
                        label={"Cancel"}
                        classes="btn-sm btn-info mx-2"
                      />
                    </React.Fragment>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Reply
