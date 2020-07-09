import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";

import uova from "../assets/uova.jpg";
import tb from "../assets/blaction.jpg";
import jiffy from "../assets/jiffy.jpg";
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
    tech: "HTML, CSS3",
  },

  {
    title: "Uova",
    description:
      "Restaurant website created using Contentful API to fulfill their needs of an ever changing menu.",
    url: "https://ldcjrstudio.github.io/Uova/",
    code: "https://github.com/ldcjrStudio/Uova",
    image: uova,
    tech: "HTML5, CSS3, JSON,",
  },

  {
    title: "Jiffy",
    description:
      "Web application created using React.js that implements Giphy API to search for GIFS.",
    url: "https://jiffy-api.netlify.app",
    code: "https://github.com/ldcjrStudio/Jiffy",
    image: jiffy,
    tech: "HTML5, CSS3, Restful APIs",
  },

  {
    title: "BarkGrr App",
    description:
      "An emerging social resource hub for dog owners created using the Gatsby.js framework.",
    url: "https://barkgrrapp.com",
    code: "",
    image: bark,
    tech: "HTML5, CSS3, Javascript, React, Gatsby.JS, NPM",
  },
  {
    title: "Take Blaction",
    description:
      "Webflow site serving as a collective of resources to help fight black justice.",
    url: "https://takeblaction.com",
    code: "",
    image: tb,
  },
  {
    title: "My Portfolio Site",
    description:
      "Designed & developed by ME while making use of React.js, SASS, and NPM. ",
    url: "leroyclarkejr.com",
    code: "https://github.com/ldcjrStudio/My-Portfolio-V1",
    image: portfolio,
    tech: "HTML5, SASS, Javascript ES6, React.JS, NPM",
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
