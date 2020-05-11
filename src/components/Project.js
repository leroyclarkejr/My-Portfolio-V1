import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  // openUrlLink() {
  //   window.open(`${this.props.url}`);
  // }

  render() {
    return (
      <div className="main-projects data-tilt project-card">
        <img className="project-image tilt-s" src={this.props.image}></img>

        <div className="content"></div>
        <h3 className="tilt-s">{this.props.title}</h3>
        <p className="tilt-s">{this.props.description}</p>

        <div className="tilt-s cta">
          <button onClick={() => window.open(`${this.props.url}`)}>
            View Live Site
          </button>
          <span>|</span>
          <button onClick={() => window.open(`${this.props.code}`)}>
            Source Code
          </button>
        </div>
      </div>
    );
  }
}

export default Project;
