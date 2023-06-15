import React from 'react';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import profileImage from './assets/RenderedImage.JPG';
import wordleImage from './assets/wordle.png';
import keyboardImage from './assets/keyboard.png';
import craftsmanImage from './assets/craftsman.png';
import funDollarImage from './assets/FunDollar.png';


function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">John Lamb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4">John Lamb</h1>
          <p className="lead">Full Stack  Developer | Innovator | Writer</p>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2>About</h2>
          <Row>
            <Col md={3}>
                <img src={profileImage} alt="John Lamb" className="img-fluid rounded" />
            </Col>
            <Col md={6}>
              <p>
                Hi there! My name is John Lamb based out of Austin, TX. I like to say I moved here for the tacos. I
                started saying that as a joke, but like all jokes, there's a seed of truth to it. And I'm not going to
                pretend like that seed hasn't been growing.
              </p>
              </Col>
          </Row>
        </Container>
      </section>
        <section id="professionally" className="py-5">
        <Container>
          <h2>Professionally</h2>
          <Row>
            <Col md={7}>
                <p>
                    I'm a software engineer based in Austin, TX with experience writing full stack
                    applications. I most recently worked at Indeed.com in their internal Incubator. It's a group dedicated
                    to new product innovation and each product is treated like a startup.
                </p>
                <p>
                    In March 2023, Indeed announced layoffs affecting 15% of their workforce, including me.
                    While this was disappointing news, it's reassuring to know it was done to right-size the business
                    and not for performance reasons.
                </p>
                <p>
                    I'm current looking for a senior-level full stack engineer or tech lead. If you're hiring,&nbsp;
                    <a href="mailto:j.lamb13@gmail.com">please reach out</a>!
                </p>
            </Col>
              <Col md={3}>
                <img src={keyboardImage} alt="John Lamb" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="unprofessionally" className="py-5">
        <Container>
          <h2>Un-Professionally</h2>
          <Row>
              <Col md={4}>
                <img src={craftsmanImage} alt="John Lamb" className="img-fluid rounded" />
            </Col>
            <Col md={6}>
                <p>
                    I can't help but think about the things humans create, like society, technology, and tools, and I
                    like to write about how those things impact people.
                </p>
                <p>
                    Outside of writing, I fill my days as a software engineer which explains the thinking about
                    systems. But perhaps a better way explaining who I am is with a short anecdote. When I was a small
                    lad, I used to pepper my mom with questions about the world.  I would point at a man on a bike and
                    ask "where is he going?", "why is he riding a bike?". I don't think I ever stopped asking questions
                    about the world, they just weren't spoken out loud as often. Maybe because good answers are hard to
                    find, especially to the most interesting question: why?
                </p>
                <p>
                    You can find my writing over&nbsp;
                    <a href="https://sheepandgoats.substack.com/">here on Substack</a>. It's completely free.
                </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2>Projects</h2>
          <Row>
            {/* Project Card */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" alt="Wordle, abstract" src={wordleImage} />
                <Card.Body>
                  <Card.Title>WordleBot 2.0</Card.Title>
                  <Card.Text>
                    A rethinking of a bot I wrote to play NYTimes' Wordle. Using information theory it tries to solve most puzzles in three guesses.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/jplamb/wordle" target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" alt="Budget, abstract" src={funDollarImage} />
                <Card.Body>
                  <Card.Title>BudgetApp (WIP)</Card.Title>
                  <Card.Text>
                    A simple budgeting app I've worked on to refresh my coding skills. It's based on a complex spreadsheet I've created over the years.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/jplamb/budget_app" target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Add more project cards */}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <Container>
          <h2>Contact</h2>
          <p>
            If you'd like to get in touch, feel free to reach out via email at&nbsp;
            <a href="mailto:j.lamb13@gmail.com">please reach out</a>&nbsp;
            or connect with me on <a href="https://www.linkedin.com/in/johnplamb/">LinkedIn</a>.
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <Container>
          <p className="text-center mb-0">John Lamb &copy; {new Date().getFullYear()}</p>
        </Container>
      </footer>
    </>
  );
}

export default App;