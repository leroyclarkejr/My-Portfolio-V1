import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";
// import ja from "../assets/JA.png";
// import projectdata from "./projectdata";

const data = [
  {
    title: "A Day In Jamaica",
    description:
      "Website showing pictures taken over a day in Montego Bay, Jamaica.",
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
  {
    title: "Uova",
    description:
      "Restaurant created using APIS from a headless CMS (Contentful) to fulfill their needs of an every changing menu. This project makes use of JSON and APIs.",
  },
  {
    title: "Jiffy",
    description: "An application that uses Giphy API to search for GIFS.",
  },
  {
    title: "Lost In Tokyo",
    description:
      "Directory of fun places to see, play in , and explore in Tokyo, Japan.",
  },
  {
    title: "the Golden 7 Venue",
    description: "Give your event the venue it deserves",
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
