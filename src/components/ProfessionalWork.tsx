import React from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import {
  SiDjango,
  SiIndeed,
  SiJavascript,
  SiOpenaigym,
  SiPandas,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
// @ts-ignore
import cubicCorpImage from "../assets/cubicCorp.jpeg";
import { LuWorkflow } from "react-icons/lu";
import { MdOndemandVideo, MdOutlineFactory } from "react-icons/md";
import { DiEmber } from "react-icons/di";

interface ProfessionalWorkProps {
  id: string;
}
interface CardData {
  img: any;
  header: string;
  employer: string;
  role: string;
  description: string;
  tools: any[];
}

const cardsData: CardData[] = [
  {
    img: LuWorkflow,
    header: "Automatic Job Seeker Screening",
    employer: "Indeed.com",
    role: "Co-Tech Lead",
    description:
      "Built from scratch and successfully exited. Employers configured workflows based on the job requirements. " +
      "Job seekers completed the workflow when applying to the job and were immediately told whether they were eligible for " +
      "the next round of interviewing.",
    tools: [
      { name: "Python", img: SiPython },
      { name: "Django", img: SiDjango },
      { name: "React", img: SiReact },
      { name: "Typescript", img: SiTypescript },
    ],
  },
  {
    img: MdOndemandVideo,
    header: "Asynchronous Interviewing",
    employer: "Indeed.com",
    role: "Engineering Manager / Tech Lead",
    description:
      "Scaled in preparation for exit. Job seekers recorded video responses to questions specified in advance by " +
      "the employer. Videos could be watched asynchronously. Led a sub-team of three engineers.",
    tools: [
      { name: "Python", img: SiPython },
      { name: "Django", img: SiDjango },
      { name: "React", img: SiReact },
      { name: "Typescript", img: SiTypescript },
    ],
  },
  {
    img: MdOutlineFactory,
    header: "DARPA Contracts",
    employer: "Cubic Corp.",
    role: "Machine Learning Engineer",
    description:
      "Supported the data needs of a variety of ML applications including predicting bus arrival times and AIs capable of partnering with soldiers in simulated environments.",
    tools: [
      { name: "Python", img: SiPython },
      { name: "Javascript", img: SiJavascript },
      { name: "OpenAI Gym", img: SiOpenaigym },
      { name: "Pandas", img: SiPandas },
    ],
  },
];

class CardComponent extends React.Component<{ cardData: CardData }> {
  render() {
    const { cardData } = this.props;
    return (
      <Col className="d-flex justify-content-center" sm={7} md={5} lg={4}>
        <Card className="mb-4" style={{}}>
          <cardData.img
            size={"1.5rem"}
            color="white"
            className="mt-3 mx-auto"
          />
          <Card.Body>
            <Card.Title>{cardData.header}</Card.Title>
            <Card.Text>
              <div className="d-flex align-items-center justify-content-center">
                {cardData.employer === "Indeed.com" ? (
                  <SiIndeed size={20} />
                ) : (
                  <Image src={cubicCorpImage} width={20} height={20} />
                )}
                &nbsp;&nbsp;
                <Card.Text className="pl-1 mb-0">{cardData.employer}</Card.Text>
              </div>
            </Card.Text>
            <Card.Text className="text-body-secondary fs-6">
              {cardData.description}
            </Card.Text>
            <Card.Text>
              <strong>Position: </strong>
              {cardData.role}
            </Card.Text>
            <ListGroup variant="flush">
              <div className="d-flex flex-wrap justify-content-center">
                {cardData.tools.map((tool, index) => (
                  <ListGroup.Item key={index}>
                    <tool.img />
                    &nbsp;{tool.name}
                  </ListGroup.Item>
                ))}
              </div>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

const ProfessionalWork: React.FC<ProfessionalWorkProps> = ({ id }) => {
  return (
    <section id={id} className="mt-5 mb-5">
      <Container>
        <h1 className="pb-2">Professional Experience</h1>
        <Row className="justify-content-center">
          {cardsData.map((data, index) => (
            <CardComponent key={index} cardData={data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProfessionalWork;
