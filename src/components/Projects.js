import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";
import ja from "../assets/JA.png";
import fur from "../assets/fur.png";
// import ja from "../assets/JA.png";
// import projectdata from "./projectdata";

const data = [
  {
    title: "Day In Jamaica",
    description:
      "Website showing pictures taken over a day in Montego Bay, Jamaica.",
    url: "https://ldcjrstudio.github.io/furneauxs/",
    code: "https://github.com/ldcjrStudio/furneauxs",
    image: "JA",
  },
  {
    title: "Furneauxs",
    description: "A mobile resonsive site created for an emerging flower shop.",
    url: "https://ldcjrstudio.github.io/furneauxs/",
    code: "https://github.com/ldcjrStudio/furneauxs",
    image: "fur",
  },
  {
    title: "Uova",
    description:
      "Restaurant created using Contentful API to fulfill their needs of an every changing menu.",

    image: "fur",
  },
  {
    title: "Jiffy",
    description: "An application that uses Giphy API to search for GIFS.",
  },
  {
    title: "Lost In Tokyo",
    description:
      "Directory of fun places to see, play in , and explore in Tokyo, Japan.",

    image: "fur",
  },
  {
    title: "the Golden 7 Venue",
    description: "Give your event the venue it deserves",

    image: "fur",
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
