import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import ListLinkWidget from "./ListLinkWidget";
import { LinkWidgetData } from "../Utils/LinkData";
interface AboutProps {
  id: string;
}

const aboutMeText = [
  "Hi, I'm John Lamb, a full-stack software engineer currently in Austin, Texas. I have significant experience " +
    "building applications from the ground up and have successfully scaled projects within Indeed.com's innovation " +
    "hub. I'm a product-minded engineer who thrives on customer-facing teams.",
  "I have over 8 years of experience in software engineering. Most recently I worked within Indeed's Incubator which " +
    "runs small teams like they're startups. Each team is comprised of 2 or 3 engineers focusing on building products " +
    "from 0 to 1.",
  "Previously, I worked at Cubic Corp on DARPA contracts on a mix of frontend projects and AI powered " +
    "experiments. I wrote a rudimentary reinforcement learning AI with the goal of completing missions alongside " +
    "soliders in a simulated environment. I also improved predictive models for mass transit systems and worked on a " +
    "frontend heavy system designed to assist soldiers conduct cyberwarfare.",
];

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="mt-5 mb-5">
      <Card
        className="card text-white bg-dark mb-3"
        style={{ width: "60vw", margin: "0 auto" }}
      >
        <Card.Header className="text-center">
          <h1>About me</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
            {aboutMeText.map((text) => (
              <p>{text}</p>
            ))}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-horizontal m-auto">
          {LinkWidgetData.map((link) => (
            <ListLinkWidget data={link} />
          ))}
        </ListGroup>
      </Card>
    </section>
  );
};

export default About;
