import React from "react";
import { Pages } from "../Utils/PageConfig";
import { Button, Container, Navbar } from "react-bootstrap";

interface NavLayoutProps {
  onNavigate: Function;
}
const NavLayout: React.FC<NavLayoutProps> = ({ onNavigate }) => {
  return (
    <Navbar
      sticky="top"
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <a className="navbar-brand" onClick={() => onNavigate("home")}>
          John Lamb ._
        </a>
        <Button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            {Pages.map((page) => (
              <li className="nav-item" key={page.path}>
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
                  <a className="nav-link" onClick={() => onNavigate(page.path)}>
                    {page.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavLayout;
