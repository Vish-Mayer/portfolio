import React from 'react';
import './ProjectContent.css'
import ProjectCards from './ProjectCards/ProjectCards'

function ProjectContent() {

  return(
  <div className="project-content container-fluid p-0"id="project-content">
    <h1>Projects</h1>
    These are some things that Ive made.
    <ProjectCards/>
  </div>
  )
}

export default ProjectContent
