import React from "react";
import { Navbar, Container, Image, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUser, useUserActions } from "../hooks/user.actions";

function NavigationBar() {
  const userActions = useUserActions();

  const user = getUser();
    
    return (
      <Navbar style={{backgroundColor: "#C8102E"}} variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold" as={Link} to={`/`}>
            Denison Social
          </Navbar.Brand>
          <Navbar.Collapse
            className="justify-content-end">
            <Nav>
              <NavDropdown
                title={
                  <Image
                    src={user.avatar}
                    roundedCircle
                    width={36}
                    height={36}
                    className="border border-danger border-2"
                  />
                }
              >
                <NavDropdown.Item as={Link} to={`/profile/${user.id}/`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={userActions.logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavigationBar;