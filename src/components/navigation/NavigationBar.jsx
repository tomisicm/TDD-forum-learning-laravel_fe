import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { Container, Nav, NavDropdown } from "react-bootstrap"

import _ from "lodash"

import channelsService from "../../utils/services/channels-service"

const mapStateToProps = state => {
  return { user: state.user }
}

const NavBar = ({ user }) => {
  const [state, setChannels] = useState({ channels: [] })

  useEffect(() => {
    channelsService.getChannels().then(({ data }) => {
      setChannels({ channels: data })
    })
  }, [])

  const { channels } = state

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row w-100">
          <div className="col-2">
            <Link className="navbar-brand" to="/dashboard">
              Forum
            </Link>
          </div>

          <div className="col-8">
            <Nav className="mr-auto">
              <div className="row">
                <li className="nav-item dropdown col-md-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Threads
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" href="#">
                      By me
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Unanswered
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" href="#">
                      My threads
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown col-md-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                <li className="nav-item">
                  <Link className="nav-link ml-2" to={`/threads/add`}>
                    New Thread
                  </Link>
                </li>
              </div>
            </Nav>
          </div>
          <div className="col-2">
            <Nav className="justify-content-end">
              <NavDropdown title={user && user.email ? user.email : "Login"}>
                {_.isEmpty(user) && (
                  <React.Fragment>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/auth/register">Register</Link>
                  </React.Fragment>
                )}
                {!_.isEmpty(user) && (
                  <React.Fragment>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                  </React.Fragment>
                )}
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </nav>
    </Container>
  )
}

const NavigationBar = connect(mapStateToProps)(NavBar)

export default NavigationBar
