import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import projects from "../Data/projects.json";

function Portfolio() {
  const [repo, setRepo] = useState([...projects]);

  return (
    <div>
      <h1 className="is-family-monospace title is-1 is-size-3-mobile portfolio-header">
        Portfolio
      </h1>
      {repo.map((item) => (
        <Project
          projectName={item.projectName}
          image={item.image}
          link={item.link}
          repo={item.repo}
        />
      ))}
    </div>
  );
}

export default Portfolio;
