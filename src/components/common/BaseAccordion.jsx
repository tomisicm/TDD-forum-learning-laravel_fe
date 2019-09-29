import React from "react"

const BaseAccordion = props => {
  const { label, content } = props

  function createToggleLink(char, id) {
    if (char) return char + id
    return id
  }

  return (
    <div className="accordion">
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target={createToggleLink("#", "collapseOne")}
              aria-expanded="true"
              aria-controls={"collapseOne"}
            >
              {label}
            </button>
          </h2>
        </div>

        <div
          id={createToggleLink(null, "collapseOne")}
          className="collapse show"
        >
          <div className="card-body">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default BaseAccordion
