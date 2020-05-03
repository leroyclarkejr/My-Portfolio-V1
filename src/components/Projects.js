import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";
// import ja from "../assets/JA.png";
// import projectdata from "./projectdata";

const data = [
  {
    title: "Furneauxs",
    description: "A mobile resonsive site created for an emerging flower shop.",
    url: "https://ldcjrstudio.github.io/furneauxs/",
    code: "https://github.com/ldcjrStudio/furneauxs",
    image: "JA.png",
  },
  {
    title: "Furneauxs",
    description: "A mobile resonsive site created for an emerging flower shop.",
    url: "https://ldcjrstudio.github.io/furneauxs/",
    code: "https://github.com/ldcjrStudio/furneauxs",
    image: "fur.png",
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
    // const { title, description, url, code } = this.props;

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
