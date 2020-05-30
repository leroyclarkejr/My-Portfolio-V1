import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div className="main-projects data-tilt">
        <img
          className="project-image tilt-xs"
          src={this.props.image}
          alt="Home page of project"
        ></img>

        <div className="content"></div>
        <h3 className="tilt-s">{this.props.title}</h3>
        <p className="tilt-m">{this.props.description}</p>

        <div className="tilt-b cta">
          <button
            className="live-site"
            onClick={() => window.open(`${this.props.url}`)}
          >
            Live Site
          </button>

          <button
            className="source-code"
            onClick={() => window.open(`${this.props.code}`)}
          >
            Source Code
          </button>
        </div>
      </div>
    );
  }
}

export default Project;
