import React from "react"
// import propTypes from "prop-types"

const BaseInput = props => {
  const { value, onChange } = props

  const { error, children } = props

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        className={props.textareaFieldClasses}
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

BaseInput.defaultProps = {
  textareaFieldClasses: "form-control",
  label: "",
  placeholder: "",
  children: null
}

export default BaseInput
