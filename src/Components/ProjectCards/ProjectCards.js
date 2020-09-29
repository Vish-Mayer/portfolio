import React, {Component} from 'react'
import { catchClause } from '@babel/types'
import ProjectCardUI from '../ProjectCardUI/ProjectCardUI'

class ProjectCards extends Component {
 
  render(){
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <ProjectCardUI />
          </div>
          <div className="col-md-4">
            <ProjectCardUI />
          </div>
          <div className="col-md-4">
            <ProjectCardUI />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards