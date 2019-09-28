import React, { useState } from "react"

const BaseDropdownSelect = props => {
  const { selectedOption, options, handleSelectOption, trackBy, label } = props

  const [defaultOption, updateDefaultOption] = useState({ ...selectedOption })

  function onClick(e, option) {
    updateDefaultOption(option)

    handleSelectOption(option, e)
  }

  return (
    <div className="ml-1 my-4 row">
      <div className="col-md-2">
        <div className="">Channel:</div>
      </div>
      <div className="btn-group dropdown">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {defaultOption.name || props.defaultLabel}
        </button>
        <div className="dropdown-menu">
          {options.map(option => (
            <option
              className="dropdown-item"
              onClick={e => onClick(e, option)}
              value={option[trackBy]}
              key={option.id}
            >
              {option[label]}
            </option>
          ))}
        </div>
      </div>
    </div>
  )
}

BaseDropdownSelect.defaultProps = {
  defaultLabel: "Select Channel",
  label: "name",
  trackBy: "id"
}

export default BaseDropdownSelect
