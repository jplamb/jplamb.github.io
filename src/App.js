import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Card, Button, Jumbotron } from 'react-bootstrap';
import profileImage from './assets/RenderedImage.JPG';
import wordleImage from './assets/wordle.png';


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
          <p className="lead">Full Stack  Developer | Innovation</p>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2>About</h2>
          <Row>
            <Col md={4}>
                <img src={profileImage} alt="John Lamb" className="img-fluid rounded" />
            </Col>
            <Col md={8}>
              <p>
                Hi, I'm a software engineer based in Austin, TX with experience writing full stack
                applications. I most recently worked at Indeed.com in their internal Incubator. It's a group dedicated
                to new product innovation and each product is treated like a startup.
              </p>
              <p>
                In March 2023, Indeed announced layoffs affecting 15% of their workforce, including me.
                While this was disappointing news, it's reassuring to know it was done to right-size the business
                and not for performance reasons.
              </p>
              <p>
                In the meantime, I'm taking a writing course called Write of Passage. It's a 5 week course that
                teaches writing as a method to improve one's thinking. I hope this sharpens my communication skills
                and helps me connect with others. You can read what my latest writing on my <a href="https://sheepandgoats.substack.com/">Substack</a>
              </p>
              <p>
                I'm current looking for a role as a tech lead or engineering manager. If you're hiring,&nbsp;
                <a href="mailto:j.lamb13@gmail.com">please reach out</a>!
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
                  <Card.Title>WordleBot (coming soon)</Card.Title>
                  <Card.Text>
                    A rethinking of a bot I wrote to play NYTimes' Wordle. It uses information theory to pick the best word to guess next.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/jplamb/" target="_blank">
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