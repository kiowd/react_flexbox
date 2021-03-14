import React, { useState } from "react";
import Project from "./Project";
import "./project.css";
import projectsData from "./projects-data";

const Projects = () => {
  const [projects] = useState(projectsData);
  return (
    <section className="projects">
      <div className="project_title">
        <h1 className="project_title_name">projects</h1>
      </div>
      <div className="projects_center">
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
     </div>
      
    </section>
  );
};

export default Projects;
