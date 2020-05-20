import React from "react";
import VanillaTilt from "vanilla-tilt";
import me from "../assets/me.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";

let pageNumber = 0;
// const currentDot = pageNumber;
// let i;

const bodyTag = document.querySelector("body");
// const dots = document.getElementsByClassName("dot");

const content = [
  //you can fill ARRAYS with OBJECTS by using curly brackets
  {
    copy: "A Front End Web Developer specializing in  pixel perfect websites.",
    background: "#09678c",
  },
  {
    copy: "Skilled in HTML5, CSS3,  & JavaScript ES6.",

    background: "#bcced2",
  },
  {
    copy:
      "Familiar with Bootstrap, SASS, JQuery, React, Ruby on Rails, NPM, & Git.",
    background: "#fbf0cd",
  },
  {
    copy: "Inviting you to view his recent projects, here",
    background: "#fdfffc",
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "A Front End Web Developer specializing in pixel perfect websites.",
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
      // currentDot = PageNumber;
    }

    // if (currentDot > content.length - 1) {
    //   currentDot = 0;
    // }

    // for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" thisdot", "");
    // }

    // dots[pageNumber - 1].className += " thisdot";

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
    // if (currentDot < 0) {
    //   currentDot = content.length - 1;
    // }
    bodyTag.style.backgroundColor = content[pageNumber].background;

    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelector(".main-content"), {
      max: 25,
      speed: 400,
    });
  }

  // function currentDiv(n) {
  //   showDivs(slideIndex = n);
  // }

  render() {
    return;
  }
}

export default Main;
