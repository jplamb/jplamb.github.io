import React from "react";
import { Pages } from "../Utils/PageConfig";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

interface NavLayoutProps {
  onNavigate: Function;
}
const NavLayout: React.FC<NavLayoutProps> = ({ onNavigate }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand onClick={() => onNavigate("home")}>
          John Lamb //
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*<div className="collapse navbar-collapse" id="navbarColor02">*/}
            {/*  <ul className="navbar-nav me-auto">*/}
            {Pages.map((page) => (
              <Nav.Link
                className="nav-item"
                key={page.path}
                onClick={() => onNavigate(page.path)}
              >
                {page.path === "blog" ? (
                  <a
                    className="nav-link"
                    href="https://sheepandgoats.substack.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {page.name}
                  </a>
                ) : (
                  <a className="nav-link">{page.name}</a>
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavLayout;
