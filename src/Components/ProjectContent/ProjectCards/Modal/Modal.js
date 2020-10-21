import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import Carousel from './Carousel/Carousel'
import ModalFooter from './ModalFooter/ModalFooter'

export default function Modal({open, onClose, image, image2, image3, image4, title, description, techStack, projectLink}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay"/>
    <div className="card d-flex" id="modal">

      <div className="modal-img">
        <Carousel img1={image} img2={image2} img3={image3} img4={image4}/>
      </div> 

      <div className="modal-info">
        <h3 className="card-title modal-title">{title}</h3>
        <h6 className="modal-tech-stack">{techStack}</h6>
        <div className="modal-description">{description}
        </div> 
      </div>
 
      <div className="modalfooter-display">
        <ModalFooter onClose={onClose} projectLink={projectLink}/>
      </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}