import React from 'react';
import './ProjectContent.css'
import ProjectCards from '../ProjectCards/ProjectCards'

function ProjectContent() {

  return(
  <div className="project-content" id="project-content">
    <h1>Projects</h1>
    <ProjectCards />
  </div>
  )
}

export default ProjectContent
