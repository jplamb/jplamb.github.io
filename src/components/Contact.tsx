import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import ListLinkWidget from "./ListLinkWidget";
import { LinkWidgetData } from "../Utils/LinkData";

interface ContactProps {
  id: string;
}
const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id}>
      <h1 className="pb-2">Contact</h1>
      <Container className="mt-4">
        <Row>
          <Col>
            <p className="lead">
              If you'd like to get in touch, feel free to reach out via email
              at&nbsp;
              <a href="mailto:j.lamb13@gmail.com">please reach out</a>&nbsp; or
              connect with me on{" "}
              <a href="https:www.linkedin.com/in/johnplamb/">LinkedIn</a>.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <ListGroup className="" style={{ width: "25%" }}>
              {LinkWidgetData.map((link) => (
                <ListLinkWidget data={link} />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
