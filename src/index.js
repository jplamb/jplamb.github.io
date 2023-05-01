import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Navbar, Nav, Button, Container, Row, Col, Card, ThemeProvider } from 'react-bootstrap';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <div>
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="#">JPL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="https://www.linkedin.com/in/johnplamb/">LinkedIn</Nav.Link>
                <Nav.Link href="https://sheepandgoats.substack.com/publish/dashboard">Substack</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container>
            <Row>
              <Col>
                <h1>About Me</h1>
                <Card>
                  <Card.Body>
                    <Card.Title>John Lamb</Card.Title>
                    <Card.Text>
                      Hi, I'm a software engineer based in Austin, TX with experience writing full stack
                      applications. I most recently worked at Indeed.com in their internal Incubator. It's a group dedicated
                      to new product innovation and each product is treated like a startup.
                    </Card.Text>
                    <Card.Text>
                      In March 2023, Indeed announced layoffs affecting 15% of their workforce, including me.
                      While this was disappointing news, it's reassuring to know it was done to right-size the business
                      and not for performance reasons.
                    </Card.Text>
                    <Card.Text>
                      In the meantime, I'm taking a writing course called Write of Passage. It's a 5 week course that
                      teaches writing as a method to improve one's thinking. I hope this sharpens my communication skills
                      and helps me connect with others. You can find a link to my Substack above.
                    </Card.Text>
                    <Card.Text>
                      I'm current looking for a role as a tech lead or engineering manager. If you're hiring,&nbsp;
                       <a href="mailto:j.lamb13@gmail.com">please reach out</a>!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
