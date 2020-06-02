import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";

import uova from "../assets/uova.jpg";
import hexagons from "../assets/hexagons.jpg";
import jiffy from "../assets/jiffy.jpg";
import tokyo from "../assets/tokyo.jpg";
import ja from "../assets/jamaica.jpg";
import fur from "../assets/fur.jpg";
import bark from "../assets/barkgrr.jpg";
import portfolio from "../assets/portfolio.jpg";

const data = [
  {
    title: "Furneauxs",
    description: "Mobile responsive site created for a local flower shop.",
    url: "https://ldcjrstudio.github.io/furneauxs/",
    code: "https://github.com/ldcjrStudio/furneauxs",
    image: fur,
  },
  {
    title: "Hexagons",
    description: "Website created for a an upcoming band.",
    url: "https://ldcjrstudio.github.io/Hexagons/",
    code: "https://github.com/ldcjrStudio/Hexagons",
    image: hexagons,
  },
  {
    title: "BarkGrr",
    description:
      "Wordpress site created for an emerging start up. Bringing dogs & people together, all under one woof. ",
    url: "https://barkgrrapp.com",
    code: "",
    image: bark,
  },
  {
    title: "Uova",
    description:
      "Restaurant website created using Contentful API to fulfill their needs of an every changing menu.",
    url: "https://ldcjrstudio.github.io/Uova/",
    code: "https://github.com/ldcjrStudio/Uova",
    image: uova,
  },
  {
    title: "Lost In Tokyo",
    description:
      "Directory of fun places to explore in Tokyo, Japan, created using React.js.",
    url: "https://ldcjrstudio.github.io/Lost-in-Tokyo/",
    code: "https://github.com/ldcjrStudio/Lost-in-Tokyo",
    image: tokyo,
  },
  {
    title: "Jiffy",
    description:
      "Web application created using React.js that implements Giphy API to search for GIFS.",
    url: "https://jiffy-api.netlify.app",
    code: "https://github.com/ldcjrStudio/Jiffy",
    image: jiffy,
  },
  {
    title: "My Portfolio Site",
    description:
      "Designed and developed by myself while making use of React.js, SASS, and NPM. ",
    url: "leroyclarkejr.com",
    code: "https://github.com/ldcjrStudio/My-Portfolio-V1",
    image: portfolio,
  },
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: true };
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".main-projects"), {
      max: 25,
      speed: 400,
    });
  }

  render() {
    return (
      <div id="projects">
        {data.map((data) => (
          <Project {...data} />
        ))}
      </div>
    );
  }
}

export default Projects;
