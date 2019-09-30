import React from "react"
import Joi from "joi-browser"
import { Redirect } from "react-router-dom"

import authService from "./../../utils/services/auth-service"

import Form from "../../components/common/Form"
import BaseInput from "./../../components/common/Input"

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },

    toLogin: false,

    errors: {}
  }

  schema = {
    name: Joi.string()
      .trim()
      .required(),
    email: Joi.string()
      .trim()
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .required()
      .min(8),
    password_confirmation: Joi.string()
      .trim()
      .required()
      .min(8)
  }

  render() {
    const { data, errors } = this.state

    if (this.state.toLogin === true) {
      return <Redirect to="/auth/login" />
    }

    return (
      <div className="content">
        <p>Please register</p>
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
            error={errors.password}
            type="password"
          >
            <small id="passwordHelp" className="form-text text-muted">
              Please use secure password.
            </small>
          </BaseInput>

          <BaseInput
            name="password_confirmation"
            value={data.password_confirmation}
            onChange={this.handleChange}
            label="Password Confirm"
            autoComplete="password"
            placeholder="Password Confirmation"
            error={errors.password_confirmation}
            type="password"
          ></BaseInput>

          <BaseInput
            name="name"
            value={data.name}
            onChange={this.handleChange}
            label="Username"
            placeholder="Username"
            error={errors.name}
          />

          <div>
            {this.renderButton("Register")}
            <button className="btn m-3 btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }

  doSubmit = async () => {
    try {
      await authService
        .register(this.state.data)
        // PUSH DATA TO LOGIN
        .then(() => this.setState(() => ({ toLogin: true })))
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = e.response.data
        this.setState({ errors })
      }
    }
  }
}

export default Register
