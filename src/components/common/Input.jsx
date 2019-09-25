import React from "react"
import propTypes from "prop-types"

const Input = props => {
  const {
    classes,
    name,
    type = "text",
    label,
    placeholder,
    autoComplete,
    value,
    onChange
  } = props

  const { error } = props

  const { children } = props

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        className={classes || "form-control"}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
      />
      {error && (
        <div className="alert-danger small">
          {/* return normal error TODO */}
          <small>{error.email}</small>
        </div>
      )}
      {!error && children}
    </div>
  )
}

// TO DO: additional .on-input-error ( reduce the size of alert elements )

Input.propTypes = {
  fieldClasses: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string,
  autoComplete: propTypes.string,
  onChange: propTypes.func,
  // error: propTypes.object,
  children: propTypes.object
}

export default Input
