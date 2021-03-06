import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { Nav } from "react-bootstrap"

import _ from "lodash"

import { fetchChannels } from "../../redux/actions/channelAction"

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer,
    channelReducer: state.channelReducer
  }
}

const mapDispatchToProps = {
  fetchChannels
}

class NavigationBar extends Component {
  state = {}

  // TODO: using statefull component for this hook only is dirty. use HOC
  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    // destructuring
    const { user } = this.props.userReducer
    const channels = this.props.channelReducer.channels

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
          <div className="col-md-2 col-lg-2">
            <Link className="navbar-brand" to="/dashboard">
              Forum
            </Link>
          </div>

          <div className="col-md-7 col-lg-8">
            <Nav className="mr-auto">
              <div className="row">
                <li className="nav-item dropdown col-md-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to={""}
                  >
                    Threads
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to={`/threads?replied=0`}>
                      Unanswered
                    </Link>
                    <Link className="dropdown-item" to={`/threads?popular=1`}>
                      Popular
                    </Link>
                    {!_.isEmpty(user) && (
                      <React.Fragment>
                        <div className="dropdown-divider"></div>
                        <Link
                          className="dropdown-item"
                          to={`/threads?by=${user.name}`}
                        >
                          My threads
                        </Link>
                      </React.Fragment>
                    )}
                  </div>
                </li>

                <li className="nav-item dropdown col-md-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to={""}
                  >
                    Channels
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {channels &&
                      channels.map(item => (
                        <Link
                          key={item.id}
                          className="dropdown-item"
                          to={`/channel/${item.name}/threads`}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </li>
                {!_.isEmpty(user) && (
                  <li className="nav-item">
                    <Link className="nav-link ml-2" to={`/threads/add`}>
                      New Thread
                    </Link>
                  </li>
                )}
              </div>
            </Nav>
          </div>
          <div className="col-md-3 col-lg-2">
            <Nav className="justify-content-end">
              <li className="nav-item dropdown col-md-3">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to={""}
                >
                  {user && user.email ? user.email : "Login"}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {_.isEmpty(user) && (
                    <React.Fragment>
                      <Link to="/auth/login" className="dropdown-item">
                        Login
                      </Link>
                      <Link to="/auth/register" className="dropdown-item">
                        Register
                      </Link>
                    </React.Fragment>
                  )}
                  {!_.isEmpty(user) && (
                    <React.Fragment>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                      <Link to="/auth/logout" className="dropdown-item">
                        Logout
                      </Link>
                    </React.Fragment>
                  )}
                </div>
              </li>
            </Nav>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
