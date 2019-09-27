import React from "react"

const BaseDropdownSelect = props => {
  const {
    defaultOption,
    options,
    handleSelectOption,
    trackBy,
    displayText
  } = props

  return (
    <div className="btn-group dropdown">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {defaultOption}
      </button>
      <div className="dropdown-menu">
        {options.map(option => (
          <li
            className="dropdown-item"
            onClick={e => handleSelectOption(e)}
            value={option[trackBy]}
            key={option.id}
          >
            {option[displayText]}
          </li>
        ))}
      </div>
    </div>
  )
}

BaseDropdownSelect.defaultProps = {
  displayText: "name",
  trackBy: "id"
}

export default BaseDropdownSelect
