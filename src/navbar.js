import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const ICIPNavbar = () => {
  const [showGeneral, setShowGeneral] = useState(false);
  const [showCalls, setShowCalls] = useState(false);
  const [showAuthors, setShowAuthors] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [showExhibitors, setShowExhibitors] = useState(false);

  return (
    <>
      <Navbar
        className="bg-dark-navbar"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">IEEE ICIP 2023</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="General"
                id="basic-nav-dropdown"
                menuVariant="dark"
                show={showGeneral}
                onMouseEnter={() => setShowGeneral(!showGeneral)}
                onMouseLeave={() => setShowGeneral(false)}
              >
                <NavDropdown.Item href="/committee">
                  Organizing Commitee
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Conference Policies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  IEEE Event Conduct and Safety
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Calls"
                id="basic-nav-dropdown"
                menuVariant="dark"
                show={showCalls}
                onMouseEnter={() => setShowCalls(!showCalls)}
                onMouseLeave={() => setShowCalls(false)}
              >
                <NavDropdown.Item href="#action/3.1">
                  Calls for Industry demo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Calls for Challenge sessions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Calls for Papers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Calls for Special session proposals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Calls for Tutorial proposals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Calls for Journal presentations
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Authors"
                id="basic-nav-dropdown"
                menuVariant="dark"
                show={showAuthors}
                onMouseEnter={() => setShowAuthors(!showAuthors)}
                onMouseLeave={() => setShowAuthors(false)}
              >
                <NavDropdown.Item href="#action/3.1">
                  Paper kit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Paper submission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Awards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Author Presentation Preparation Instructions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Virtual Presentation Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  SPS Travel Grants
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#reg">Registration</Nav.Link>
              <NavDropdown
                title="Program"
                id="basic-nav-dropdown"
                menuVariant="dark"
                show={showProgram}
                onMouseEnter={() => setShowProgram(!showProgram)}
                onMouseLeave={() => setShowProgram(false)}
              >
                <NavDropdown.Item href="#action/3.1">
                  Paper kit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Paper submission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Awards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Author Presentation Preparation Instructions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Virtual Presentation Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  SPS Travel Grants
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Exhibitors and Patrons"
                id="basic-nav-dropdown"
                menuVariant="dark"
                rootCloseEvent="mousedown"
                show={showExhibitors}
                onMouseEnter={() => setShowExhibitors(!showExhibitors)}
                onMouseLeave={() => setShowExhibitors(false)}
              >
                <NavDropdown.Item href="#action/3.1">
                  Paper kit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Paper submission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Awards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Author Presentation Preparation Instructions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Virtual Presentation Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  SPS Travel Grants
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ICIPNavbar;
