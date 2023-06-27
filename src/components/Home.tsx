import React from "react";
import { Card } from "react-bootstrap";
// @ts-ignore
import spaceBackground from "../assets/spaceBackground.png";
interface HomeProps {
  id: string;
}
const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} style={{ background: "#07070d" }}>
      <Card
        className="text-center splash-background align-items-center justify-content-center"
        style={{
          backgroundSize: "contain",
          height: "56.25vw",
          maxHeight: "100vh",
          width: "100vw",
          maxWidth: "177.78vh",
          background: `url(${spaceBackground}) no-repeat center center`,
        }}
      >
        <div
          className="mx-auto text-light p-5"
          style={{ background: "rgba(0, 0, 0, .8)" }}
        >
          <h1 className="text-white display-1">John Lamb</h1>
          <p className="lead text-white">
            Software Engineer | Full-stack | Innovator
          </p>
        </div>
      </Card>
    </section>
  );
};

export default Home;
