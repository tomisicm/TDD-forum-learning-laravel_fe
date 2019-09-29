import React from "react"

import BaseTextarea from "../../components/common/BaseTextarea"
import BaseButton from "../../components/common/BaseButton"

const AddReply = props => {
  const user = {}
  const { createReplyHandler, updateNewReply, reply } = props

  return (
    <div>
      <React.Fragment>
        <div className="card my-2">
          <div className="card-header">
            <div className="row justify-content">
              <div className="col">New Reply:</div>
            </div>
          </div>
          <div className="card-body" style={{ padding: "0.5rem" }}>
            <div className="card-text">
              <BaseTextarea
                value={reply.body}
                onChange={updateNewReply}
                name={props.name}
                className="w-100"
                placeholder={"Reply..."}
              />
            </div>
          </div>
          {user && (
            <div className="card-footer">
              <BaseButton
                onClick={createReplyHandler}
                label={"save"}
                classes="btn-sm btn-success mx-2"
              />
            </div>
          )}
        </div>
      </React.Fragment>
    </div>
  )
}

export default AddReply
