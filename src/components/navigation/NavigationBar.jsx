import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

import channelsService from "../../utils/services/channels-service"

const NavigationBar = props => {
  const [state, setChannels] = useState({ channels: [] })
  // const { user } = props
  const user = null

  useEffect(() => {
    channelsService.getChannels().then(({ data }) => {
      setChannels({ channels: data })
    })
  }, [])

  const { channels } = state

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <div className="row w-100">
          <div className="col-2">
            <NavLink className="navbar-brand" to="/dashboard">
              Forum
            </NavLink>
          </div>

          <div className="col-8">
            <Nav className="mr-auto">
              <div className="row">
                <NavDropdown title="Threads" className="col-4">
                  <NavDropdown.Item>By me</NavDropdown.Item>
                  <NavDropdown.Item>Unanswered</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>My threads</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Channels" className="col-4">
                  {channels &&
                    channels.map(item => (
                      <NavDropdown.Item
                        key={item.name}
                        to={{
                          pathname: `/channel/${item.name}/threads`
                        }}
                      >
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Nav.Link className="col-4">New Thread</Nav.Link>
              </div>
            </Nav>
          </div>
          <div className="col-2">
            <Nav className="justify-content-end">
              <NavDropdown title={user && user.name ? user.name : "Login"}>
                {!user && (
                  <React.Fragment>
                    <NavDropdown.Item href="/auth/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/auth/register">
                      Register
                    </NavDropdown.Item>
                  </React.Fragment>
                )}
                {user && (
                  <React.Fragment>
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </React.Fragment>
                )}
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </Navbar>
    </Container>
  )
}

export default NavigationBar
