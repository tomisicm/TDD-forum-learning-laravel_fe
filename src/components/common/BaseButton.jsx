import React from "react"
import propTypes from "prop-types"

const BaseButton = props => {
  const { onClick, label } = props

  return (
    <button
      onClick={onClick}
      type={props.type}
      className={props.classes}
      disabled={props.disabled}
    >
      {label}
    </button>
  )
}

BaseButton.defaultProps = {
  type: "button",
  classes: "",
  disabled: false
}

BaseButton.propTypes = {
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired
}
export default BaseButton
