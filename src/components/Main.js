import React from "react";
import VanillaTilt from "vanilla-tilt";
import me from "../assets/me.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import Dots from "react-carousel-dots";

let pageNumber = 0;

const bodyTag = document.querySelector("body");

const content = [
  {
    copy:
      "A Front End Web Developer specializing in pixel perfect, responsive websites.",
    background: "#09678c",
    dots: "",
  },
  {
    copy: "Skilled in HTML5, CSS3, & JavaScript ES6.",

    background: "#bcced2",
    dots: "",
  },
  {
    copy: "Familiar with Bootstrap, SASS, JQuery, React, APIs, NPM, and Git.",
    background: "#00A896",
  },

  {
    copy:
      "Eager to help bring your website ideas to life! Contact me today & lets create something great.",
    background: " #fdfffc",
    dots: "",
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "A Front End Web Developer specializing in pixel perfect websites.",
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
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
    pageNumber = pageNumber - 1;
    if (pageNumber < 0) {
      pageNumber = content.length - 1;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;
    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelector(".main-content"), {
      max: 25,
      speed: 400,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10,
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

          <div className="the-dots">
            <Dots
              length={4}
              active={pageNumber}
              visible={5}
              size={7}
              margin={10}
            />
            {/* <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span> */}
          </div>
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
