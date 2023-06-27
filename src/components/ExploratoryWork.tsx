import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// @ts-ignore
import wordleImage from "../assets/wordle.png";
// @ts-ignore
import funDollarImage from "../assets/FunDollar.png";

interface ExploratoryWorkProps {
  id: string;
}

interface ProjectData {
  img: any;
  header: string;
  description: string;
  status: string;
  link: string;
}

const projectsData: ProjectData[] = [
  {
    img: wordleImage,
    header: "WordleBot 2.0",
    status: "Complete",
    description:
      "A rethinking of a bot I wrote to play NYTimes' Wordle. Using information theory it tries to solve most puzzles in three guesses.",
    link: "https://github.com/jplamb/wordle",
  },
  {
    img: funDollarImage,
    header: "BudgetApp",
    status: "Work in Progress",
    description:
      "A simple budgeting app I've worked on to refresh my coding skills. It's based on a complex spreadsheet I've created over the years.",
    link: "https://github.com/jplamb/budget_app",
  },
];

class ProjectCard extends React.Component<{ projectData: ProjectData }> {
  render() {
    const { projectData } = this.props;
    return (
      <Col md={4}>
        <Card className="pr-0 mr-0">
          <Image src={projectData.img} />
          <Card.Body>
            <Card.Title>{projectData.header}</Card.Title>
            <Card.Text className="text-body-secondary fs-6">
              {projectData.description}
            </Card.Text>
            <Card.Text>
              <strong>Status: </strong>
              {projectData.status}
            </Card.Text>
            <Button variant="primary" href={projectData.link} target="_blank">
              View on Github
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
const ExploratoryWork: React.FC<ExploratoryWorkProps> = ({ id }) => {
  return (
    <section id={id} className="mt-5 mb-5">
      <Container>
        <h1 className="pb-2">Exploratory Work</h1>
        <Row className="">
          {projectsData.map((data, index) => (
            <ProjectCard key={index} projectData={data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExploratoryWork;
