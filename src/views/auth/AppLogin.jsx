import React from "react"
import Joi from "joi-browser"

import authService from "./../../utils/services/auth-service"

import Form from "../../components/common/Form"
import BaseInput from "./../../components/common/Input"

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: []
  }

  schema = {
    email: Joi.string()
      .trim()
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .required()
  }

  render() {
    const { data, errors } = this.state

    return (
      <div className="content">
        <p>Please log in</p>
        <form onSubmit={this.handleSubmit}>
          <BaseInput
            name="email"
            value={data.email}
            onChange={this.handleChange}
            label="Email"
            autoComplete="email"
            placeholder="Email"
            error={errors.email}
          >
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </BaseInput>

          <BaseInput
            name="password"
            value={data.password}
            onChange={this.handleChange}
            label="Password"
            autoComplete="password"
            placeholder="Password"
            // error={errors.password}
            type="password"
          >
            <small id="passwordHelp" className="form-text text-muted">
              Please use secure password.
            </small>
          </BaseInput>

          <div>{this.renderButton("Login")}</div>
        </form>
      </div>
    )
  }

  doSubmit = async () => {
    try {
      await authService.login(this.state.data)
    } catch (e) {
      if (e) {
        const newError = e.response.data

        const errors = { ...this.state.errors, email: newError }

        this.setState({ errors })
      }
    }
  }
}

export default Login
