import React from "react"
import propTypes from "prop-types"

const BaseInput = props => {
  const { value, onChange } = props

  const { error, children } = props

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className={props.inputFieldClasses}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div className="alert-danger small">
          <small>{JSON.stringify(error)}</small>
        </div>
      )}
      {!error && children}
    </div>
  )
}

/**
 * value - string or number - prop to give default value
 * onChange - control function
 * name - name attribute for the input field
 * label - label for the input field
 * placeholder -
 * children
 */

BaseInput.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
  inputFieldClasses: propTypes.string,
  name: propTypes.string.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
  error: propTypes.object,
  children: propTypes.object
}

BaseInput.defaultProps = {
  //   value: "",
  type: "text",
  inputFieldClasses: "form-control",
  label: "",
  placeholder: "",
  children: null
}

export default BaseInput
