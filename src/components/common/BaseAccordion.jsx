import React from "react"

const BaseAccordion = props => {
  const { label, content, index } = props

  function createToggleLink(char, id) {
    if (char) return ("" + char + id).toString()
    return id.toString()
  }

  return (
    <div className="accordion">
      {console.log(typeof index)}
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target={createToggleLink("#", "collapse-" + index)}
              aria-expanded="true"
              aria-controls={"collapseOne"}
            >
              {label}
            </button>
          </h2>
        </div>

        <div
          id={createToggleLink(null, "collapse-" + index)}
          className="collapse show"
        >
          <div className="card-body">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default BaseAccordion
