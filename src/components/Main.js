import React from "react";
import VanillaTilt from "vanilla-tilt";
import me from "../assets/me.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import randomIcon from "../assets/shuffle.png";

let pageNumber = 0;
const bodyTag = document.querySelector("body");

const content = [
  //you can fill ARRAYS with OBJECTS by using curly brackets
  {
    copy: "A Front End Web Developer specializing in pixel perfect web design.",
    background: "#bcced2",
  },
  {
    copy: "Skilled in HTML5, CSS3,  & JavaScript ES6.",
    background: "#09678c",
  },
  {
    copy:
      "Familiar with Bootstrap, SASS, JQuery, React, Ruby on Rails, NPM, & Git.",
    background: "#fbf0cd",
  },
  {
    copy: "Inviting you to view his recent projects, <a>here.</a>",
    background: "#21dd9b",
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "A Front End Web Developer specializing in pixel perfect web design.",
    };
    this.updateContent = this.updateContent.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  updateContent() {
    console.log("it's working");

    this.setState({
      content: "It's working",
    });
  }

  nextPage() {
    console.log("its working");

    pageNumber = pageNumber + 1;

    if (pageNumber > content.length - 1) {
      pageNumber = 0;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;

    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }
  prevPage() {
    console.log("its working");

    pageNumber = pageNumber - 1;

    if (pageNumber < 0) {
      pageNumber = content.length - 1;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;

    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  // prevPage() {
  //   console.log("it's working");
  //   if (pageNumber < 0) {
  //     pageNumber = content.length - 1;
  //   }

  //   this.setState({
  //     content: `${content[pageNumber].copy}`,
  //   });
  // }

  componentDidMount() {
    VanillaTilt.init(document.querySelector(".main-content"), {
      max: 25,
      speed: 400,
    });
  }

  render() {
    return (
      <div>
        <div id="main-content" className="appear">
          <div className="main-content data-tilt">
            <img className="tilt-s" src={me} alt="Beautiful Leroy Clarke Jr." />
            <h1 className="tilt-m">Leroy Clarke Jr. is...</h1>
            <div className="content">
              <p className="tilt-b">{this.state.content}</p>
            </div>
          </div>
        </div>
        <div id="navigation">
          <img
            className="prev"
            src={prevIcon}
            alt="previous"
            onClick={this.prevPage}
          />
          <img
            className="random larger"
            src={randomIcon}
            alt="random"
            onClick={this.updateContent}
          />
          <img
            className="next"
            src={nextIcon}
            alt="next"
            onClick={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default Main;
