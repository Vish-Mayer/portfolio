import React, {useState} from 'react';
import './ProjectCardUI.css'
import Modal from '../Modal/Modal'

const ProjectCardUI = (props)=>{
  const[isOpen, setIsOpen] = useState(false)

  if(isOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function displayPreview(value){
    const array = value.split(" ")
    const output = array.slice(0, 10).join(" ")
    return(
      output + "... "
    )
  }

  return(
    
    <div className="card text-center container-fluid p-0 d-flex">
      <button className="project-card btn p-0" onClick={openModal}>
      <div className="overflow">
        <div className="img-wrap">
          <div className="overlay">
            <div className="image__overlay">
              <h4 className="card-title">{props.cardName}</h4>
              <h6 className="card-text">
              {displayPreview(props.cardDescription)}
              <a className="open-modal-secondary" onClick={openModal}>more</a>
              </h6>
           </div>
          </div>
          <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
        </div>
      </div>
      </button>
      <div className ="card-modal-props">
      <Modal
        open={isOpen} 
        onClose={closeModal}
        title={props.cardName} 
        image={props.imgsrc}
        image2={props.imgsrc2}
        image3={props.imgsrc3}
        image4={props.imgsrc4}
        description={props.cardDescription}
        techStack={props.techStack}
        projectLink={props.projectLink}>
      </Modal>
      </div>
    </div>
  )
};
export default ProjectCardUI;