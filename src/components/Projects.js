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
    title: "Jiffy",
    description:
      "Web application created using React.js that implements Giphy API to search for GIFS.",
    url: "https://jiffy-api.netlify.app",
    code: "https://github.com/ldcjrStudio/Jiffy",
    image: jiffy,
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
    title: "Take Blaction",
    description:
      "Weblfow site serving as a collective of resources to help fight black justice.",
    url: "https://takeblaction.com",
    code: "",
    image: tb,
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
