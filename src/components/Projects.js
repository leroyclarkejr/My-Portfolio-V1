import React from "react";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";
import ja from "../assets/JA.png";
import fur from "../assets/fur.png";
import uova from "../assets/uova.png";
import hexagons from "../assets/hexagons.png";
import jiffy from "../assets/jiffy.png";
import tokyo from "../assets/tokyo.png";

const data = [
  {
    title: "Furneauxs",
    description: "A mobile resonsive site created for an emerging flower shop.",
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
      "Website showing pictures taken over a day in Montego Bay, Jamaica.",
    url: "https://dayinjamaica.netlify.app",
    code: "https://github.com/ldcjrStudio/Day-in-Jamaica",
    image: ja,
  },
  {
    title: "Uova",
    description:
      "Restaurant created using Contentful API to fulfill their needs of an every changing menu.",
    url: "https://ldcjrstudio.github.io/Uova/",
    code: "https://github.com/ldcjrStudio/Uova",
    image: uova,
  },
  {
    title: "Lost In Tokyo",
    description:
      "Directory of fun places to see, play in , and explore in Tokyo, Japan.",
    url: "https://ldcjrstudio.github.io/Lost-in-Tokyo/",
    code: "https://github.com/ldcjrStudio/Lost-in-Tokyo",
    image: tokyo,
  },
  {
    title: "Jiffy",
    description: "An application that uses Giphy API to search for GIFS.",
    url: "https://github.com/ldcjrStudio/Jiffy",
    code: "https://jiffy-api.netlify.app",
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
