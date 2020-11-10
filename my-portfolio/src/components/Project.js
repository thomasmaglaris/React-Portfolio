import React from "react";

function Project(props) {
  return (
    <div className="container">
      <ul className="results-card columns is-multiline ">
        <li className="column is-multiline is-one-third is-four-fifths-mobile">
          <div className="project-desc">
            <h2 className="is-family-monospace title is-3 project-header">
              {props.projectName}
            </h2>
            <img src={props.image} alt="repos" className="img-thumbnail" />
            <a
              className="link-show"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
            </a>
            <br></br>
            <a
              className="link-show"
              href={props.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repo
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
