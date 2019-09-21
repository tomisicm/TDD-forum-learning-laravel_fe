import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import NavigationBar from "./components/navigation/NavigationBar"

import AppRegister from "./views/auth/AppRegister"
import AppLogin from "./views/auth/AppLogin"

import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <main className="container">
          <Switch>
            <Route path="/auth/register" component={AppRegister} />
            <Route path="/auth/login" component={AppLogin} />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
