import React from 'react';
import './ProjectContent.css'
import ProjectCards from './ProjectCards/ProjectCards'

function ProjectContent() {

  return(
  <div className="project-content container-fluid p-0"id="project-list">
    <h1 className="project-h1-header">Projects</h1>
    <ProjectCards/>
  </div>
  )
}

export default ProjectContent
