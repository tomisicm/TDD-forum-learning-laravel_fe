import React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import AppRegister from "./screens/auth/AppRegister"
import AppLogin from "./screens/auth/AppLogin"

import ChannelThreads from "./screens/thread/ChannelThreads"
import Threads from "./screens/thread/Threads"
import Thread from "./screens/thread/Thread"
import AddThread from "./screens/thread/AddThread"

import Profile from "./screens/profile/Profile"

export const Routes = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route exact path="/auth/register" component={AppRegister} />
        <Route exact path="/auth/login" component={AppLogin} />
        <Route path="/profile/:profile" component={Profile} />

        <Route path="/channel/:channel/threads" component={ChannelThreads} />

        <Route path="/threads/add" component={AddThread} />
        <Route path="/threads/:thread" component={Thread} />

        <Route path="/threads" component={Threads} />
      </Switch>
    </main>
  )
}
