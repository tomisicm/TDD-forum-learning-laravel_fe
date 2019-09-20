import React, { Component } from "react"
import Joi from "joi-browser"

class Form extends Component {
  state = {
    data: {},
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors: errors || {} })

    if (errors) return

    this.doSubmit()
  }

  validate = () => {
    const { data } = this.state
    const errors = {}

    const options = {
      abortEarly: false
    }

    const { error } = Joi.validate(data, this.schema, options)

    if (!error) return

    for (let err of error.details) errors[err.path[0]] = err.message

    return Object.keys(errors).length === 0 ? null : errors
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }

    const errorMessage = this.validateProperty(input)

    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }

    const schema = { [name]: this.schema[name] }

    const { error } = Joi.validate(obj, schema)

    return error ? error.details[0].message : null
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn m-3 btn-primary"
      >
        {label}
      </button>
    )
  }
}

export default Form
