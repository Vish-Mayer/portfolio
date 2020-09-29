import React from 'react';
import img1 from '../../Assets/pic.png'
import './ProjectCardUI.css'


const ProjectCardUI = (props)=>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Project Card</h4>
        <p className="card-text text-secondary">
          This is a fake description This is a fake description This is a fake description
          This is a fake description This is a fake description
        </p>
        <a href="#" className="btn btn-outline-success">See More</a>
      </div>

    </div>
  )
};

export default ProjectCardUI;