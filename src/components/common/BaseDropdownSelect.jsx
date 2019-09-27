import React from "react"

const BaseDropdownSelect = () => {
  return (
    <div className="btn-group dropup">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropup
      </button>
      <div className="dropdown-menu"></div>
    </div>
  )
}

export default BaseDropdownSelect
