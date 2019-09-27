import React from "react"

const BaseDropdownSelect = ({ options }) => {
  return (
    <div className="btn-group dropdown">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Thread Channel
      </button>
      <div className="dropdown-menu">
        {options.map(option => (
          <div className="dropdown-item">{option.name}</div>
        ))}
      </div>
    </div>
  )
}

export default BaseDropdownSelect
