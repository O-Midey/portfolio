import React from "react";
import projects from "./projects.json";

const projectTile = () => {
  return projects.map((project) => {
    return (
      <div key={project.id} className="project-tile ">
        <img className="project-image" src={project.src} />
        <div className="overlay">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="stacks flex gap-2">
            {/* Add technology buttons */}
            {project.technologies.map((technology, index) => {
              return <button key={index}>{technology}</button>;
            })}
          </div>
          <a target="_blank" href={project.projectLink}>
            check it out &#8599;
          </a>
        </div>
      </div>
    );
  });
};

export default projectTile;
