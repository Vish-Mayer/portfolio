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
      <div className="overflow">
      <div className="img-wrap">
        <div className="overlay">
          <div className="image__overlay">
            <button className ="btn btn-outline-light" onClick ={openModal}>Learn more</button>
          </div>
        </div>
          <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
        </div>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.cardName}</h4>
        <p className="card-text text-secondary">
          {displayPreview(props.cardDescription)}
          <a className="open-modal" onClick={openModal}>more</a>
        </p>
      </div>
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