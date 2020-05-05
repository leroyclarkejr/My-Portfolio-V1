import React from "react";
import ja from "../assets/JA.png";
import fur from "../assets/fur.png";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-projects data-tilt project-card">
        <img className="project-image tilt-s" src={this.props.image}></img>

        <div className="content"></div>
        <h3 className="tilt-m">{this.props.title}</h3>
        <p className="tilt-m">{this.props.description}</p>

        <div className="tilt-m cta">
          <button href={this.props.url}>View Live Site</button>
          <span>|</span>
          <button href={this.props.code}>Source Code</button>
        </div>
      </div>
    );
  }
}

export default Project;
