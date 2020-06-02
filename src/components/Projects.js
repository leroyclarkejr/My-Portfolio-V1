import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";

import uova from "../assets/uova.jpg";
import hexagons from "../assets/hexagons.jpg";
import jiffy from "../assets/jiffy.jpg";
import tokyo from "../assets/tokyo.jpg";
import ja from "../assets/jamaica.jpg";
import fur from "../assets/fur.jpg";

const data = [
  {
    title: "Furneauxs",
    description:
      "A mobile responsive site created for an emerging flower shop.",
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
    title: "Day In Jamaica",
    description:
      "A showcase of photographs taken over a day in Montego Bay, Jamaica.",
    url: "https://dayinjamaica.netlify.app",
    code: "https://github.com/ldcjrStudio/Day-in-Jamaica",
    image: ja,
  },
  {
    title: "Uova",
    description:
      "A restaurant website created using Contentful API to fulfill their needs of an every changing menu.",
    url: "https://ldcjrstudio.github.io/Uova/",
    code: "https://github.com/ldcjrStudio/Uova",
    image: uova,
  },
  {
    title: "Lost In Tokyo",
    description:
      "A directory of fun places to explore in Tokyo, Japan, created using React.js",
    url: "https://ldcjrstudio.github.io/Lost-in-Tokyo/",
    code: "https://github.com/ldcjrStudio/Lost-in-Tokyo",
    image: tokyo,
  },
  {
    title: "Jiffy",
    description:
      "A web application created using React.js that implements Giphy API to search for GIFS.",
    url: "https://jiffy-api.netlify.app",
    code: "https://github.com/ldcjrStudio/Jiffy",

    image: jiffy,
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
