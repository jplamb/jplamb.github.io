import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import { BsQuote } from "react-icons/bs";

interface TestimonialProps {
  id: string;
}

interface CardData {
  name: string;
  quote: string;
  position: string;
}

const data: CardData[] = [
  {
    name: "Lucas S.",
    quote:
      "As an engineer that means setting a high standard for speed and quality, demonstrating by example that we can hit it, and diligently mentoring peers and mentees to get there. He's the friendly adversary that every PMs needs: challenging assumptions, identifying tradeoffs, and ruthlessly distilling the meaningful features from the junk food. Working with John has left a lasting impact on me and my team; I can't wait to do it all over again, someday!",
    position: "Product Director at Indeed.com",
  },
  {
    name: "Chris C.",
    quote:
      "From day 1, it was clear that John was a powerhouse of a developer and a natural leader...I would hire John in a heartbeat, and team up with him on any projects I work on going forward if I could.",
    position: "Engineering Director at Indeed.com",
  },
  {
    name: "Russell K.",
    quote:
      "The short summary is that John is an engineer that not only does excellent work but raises the level of work of those around him. That impact is not limited to his team. Making him an invaluable part of any organization.",
    position: "Principal Software Engineer at Indeed.com",
  },
  // You can add more data objects here
];

class RecommendationCard extends React.Component<{ data: CardData }> {
  render() {
    const { data } = this.props;
    return (
      <Card className="h-100">
        <Card.Body className="d-flex flex-column justify-content-center">
          <blockquote className="blockquote mx-auto">
            <p className="mb-4" style={{ fontSize: "0.9rem" }}>
              <BsQuote size={30} color="white" className="pb-1" />
              <span>{data.quote}"</span>
            </p>
            <footer className="d-flex flex-column align-items-start">
              <div className="d-flex align-items-center">
                <span className="mr-2 mb-0 blockquote-footer">{data.name}</span>
              </div>
              <div className="d-flex">
                <div
                  className="mr-auto text-start"
                  style={{ fontSize: ".75rem" }}
                >
                  {data.position}
                </div>
              </div>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}
const Testimonial: React.FC<TestimonialProps> = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <Row className="">
          <Col md={6}>
            <Contact id="contact" />
          </Col>
          <Col md={6}>
            <Row className="">
              <Col md={6} className="px-0 mb-0">
                <RecommendationCard data={data[0]} />
              </Col>
              <Col md={6}>
                <Row className="px-0 mb-0">
                  <Col md={12} className="px-0 mb-0">
                    <RecommendationCard data={data[1]} />
                  </Col>
                </Row>
                <Row className="px-0">
                  <Col md={12} className="px-0 mb-0">
                    <RecommendationCard data={data[2]} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
