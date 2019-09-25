import React, { Component } from "react"
import NavigationBar from "./components/navigation/NavigationBar"

import Routes from "./Routes"

import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Routes></Routes>
      </React.Fragment>
    )
  }
}

export default App
