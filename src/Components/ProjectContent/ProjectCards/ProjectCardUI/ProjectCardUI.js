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
    
    <div className="card text-center container-fluid d-flex">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.cardName}</h4>
        <p className="card-text text-secondary">
          {displayPreview(props.cardDescription)}
          <a className="open-modal" onClick ={openModal}>read more</a>
        </p>
      </div>
      <Modal 
        open={isOpen} 
        onClose={closeModal}
        title={props.cardName} 
        image={props.imgsrc}
        description={props.cardDescription}>
      </Modal>
    </div>
  )
};

export default ProjectCardUI;