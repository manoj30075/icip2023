import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const ICIPNavbar = () => {
  return (
    <>
      <Navbar
        className="bg-dark-navbar me-auto"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">IEEE IV 2023</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="General"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/committee">
                  Organizing Commitee
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Conference Policies
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  IEEE Event Conduct and Safety
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Calls"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/call-for-papers">
                  Calls for Papers
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Calls for Industry demo
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Calls for Challenge sessions
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Calls for Special session proposals
                </NavDropdown.Item>
                <NavDropdown.Item href="/call-for-tutorials">
                  Calls for Tutorial proposals
                </NavDropdown.Item>
                <NavDropdown.Item href="/call-for-journal-presentations">
                  Calls for Journal presentations
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Authors"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/tba">Paper kit</NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Paper submission
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">Awards</NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Author Presentation Preparation Instructions
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Virtual Presentation Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  SPS Travel Grants
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/tba">Registration</Nav.Link>
              <NavDropdown
                title="Program"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/tba">
                  Virtual Platform Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Technical Program
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Plenary Speakers
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Special Sessions
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Challenge Sessions
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Industry Demo Show & Tell Program
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">VIP Cup</NavDropdown.Item>
                <NavDropdown.Item href="/tba">5-MICC</NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Women in Signal Processing Event
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Young Professionals Panel Discussion
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Student Job Fair
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  NOAA Invited Talk
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">PROGRESS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Exhibitors and Patrons"
                id="basic-nav-dropdown"
                menuVariant="dark"
                rootCloseEvent="mousedown"
              >
                <NavDropdown.Item href="/tba">
                  Current Sponsors
                </NavDropdown.Item>
                <NavDropdown.Item href="/tba">Prospectus</NavDropdown.Item>
                <NavDropdown.Item href="/tba">Floor Plan</NavDropdown.Item>
                <NavDropdown.Item href="/tba">
                  Booth Space Application
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Venue"
                id="basic-nav-dropdown"
                menuVariant="dark"
                rootCloseEvent="mousedown"
              >
                <NavDropdown.Item href="/tba">Anchorage</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ICIPNavbar;
