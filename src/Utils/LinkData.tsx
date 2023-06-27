import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import React from "react";

export interface LinkData {
  image: any;
  name: string;
  url: string;
}
export const LinkWidgetData: LinkData[] = [
  {
    image: <BsGithub size={24} />,
    name: "Github",
    url: "https://github.com/jplamb",
  },
  {
    image: <BsLinkedin size={24} />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johnplamb/",
  },
  {
    image: <SiSubstack size={24} />,
    name: "Substack",
    url: "https://sheepandgoats.substack.com/",
  },
  {
    image: <BsTwitter size={24} />,
    name: "Twitter",
    url: "https://twitter.com/thejplamb",
  },
];
