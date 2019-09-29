import React from "react"

const BaseAccordion = props => {
  const { label, content } = props

  return (
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {label}
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          data-parent="#accordionExample"
        >
          <div class="card-body">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default BaseAccordion
