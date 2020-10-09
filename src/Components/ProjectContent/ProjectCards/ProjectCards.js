import React, {Component} from 'react'
import ProjectCardUI from './ProjectCardUI/ProjectCardUI'
import img1 from '../../../Assets/testimage.png'
import './ProjectCards.css'

class ProjectCards extends Component {
 
  render(){
    return(
      <div className="justify-content-center d-flex project-cards">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5 single-card">
          < ProjectCardUI 
              imgsrc={img1} 
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
          <div className="col-md-5">
            <ProjectCardUI 
              imgsrc={img1} 
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
          <div className="col-md-1">
          </div>

          <div className="col-md-1">
          </div>
          <div className="col-md-5">
          < ProjectCardUI 
              imgsrc={img1} 
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
          <div className="col-md-5">
            <ProjectCardUI 
              imgsrc={img1} 
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
          <div className="col-md-1">
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards