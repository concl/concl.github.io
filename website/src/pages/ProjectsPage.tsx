
import React from 'react';

import { projectInfo } from "../data/SiteData";
import ProjectCard from '../components/ProjectCard';

import "./Page.css";

function ProjectsPage() {
  return (
    <>
        <div className="Page">
            <h2>Projects</h2>
            <p>Here are some of my projects.</p>
            {projectInfo.map( (project, index) => (
                <ProjectCard key={index} { ...project } />
            ))}
        </div>
    </>
  );
}

export default ProjectsPage;
