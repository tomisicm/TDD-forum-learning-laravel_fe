import React from "react"
import { NavLink } from "react-router-dom"

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const NavigationBar = props => {
  // const { user } = props

  const user = null

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
                <NavDropdown title="Browse" className="col-4">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Action 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Action 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="col-4">New Thread</Nav.Link>
                <NavDropdown title="Channels" className="col-4">
                  <NavDropdown.Item>Channel 1</NavDropdown.Item>
                  <NavDropdown.Item>Channel 2</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </div>
          <div className="col-2">
            <Nav className="justify-content-end">
              <NavDropdown title={user && user.name ? user.name : "Login"}>
                {!user && (
                  <React.Fragment>
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
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
