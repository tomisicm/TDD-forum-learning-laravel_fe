import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import NavigationBar from "./components/navigation/NavigationBar"

import AppRegister from "./screens/auth/AppRegister"
import AppLogin from "./screens/auth/AppLogin"

import Threads from "./screens/thread/Threads"
import Thread from "./screens/thread/Thread"

import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <main className="container">
          <Switch>
            <Route exact path="/auth/register" component={AppRegister} />
            <Route exact path="/auth/login" component={AppLogin} />
            <Route path="/channel/:channel/threads" component={Threads} />
            <Route path="/threads/:thread" component={Thread} />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
