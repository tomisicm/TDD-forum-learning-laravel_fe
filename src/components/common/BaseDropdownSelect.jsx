import React from "react"

const BaseDropdownSelect = () => {
  return (
    <div className="btn-group dropdown">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropup
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-item">Action</div>
        <div className="dropdown-item">Action 2</div>
      </div>
    </div>
  )
}

export default BaseDropdownSelect
