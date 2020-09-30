import React from 'react';
import './ProjectCardUI.css'


const ProjectCardUI = (props)=>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{props.cardName}</h4>
        <p className="card-text text-secondary">
          {props.cardDescription}
        </p>
        <a href="#" className="btn btn-outline-success download">Download</a>
      </div>

    </div>
  )
};

export default ProjectCardUI;