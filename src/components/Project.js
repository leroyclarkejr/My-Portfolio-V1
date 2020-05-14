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
      <div className="main-projects data-tilt">
        <img className="project-image tilt-m" src={this.props.image}></img>

        <div className="content"></div>
        <h3 className="tilt-m">{this.props.title}</h3>
        <p className="tilt-m">{this.props.description}</p>

        <div className="tilt-m cta">
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
