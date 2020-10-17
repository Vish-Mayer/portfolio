import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import Carousel from './Carousel/Carousel'
import ModalFooter from './ModalFooter/ModalFooter'

export default function Modal({open, onClose, image, image2, image3, image4, title, description}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay"/>
    <div className="card text-center d-flex" id="modal">

      <div className="modal-img">
        <Carousel img1={image} img2={image2} img3={image3} img4={image4}/>
      </div> 

      <div><button onClick={onClose} className="btn-outline-info close-modal-main">Back to projects</button></div>

      <h3 className="card-title modal-title">{title}</h3>

      <p className="modal-description">{description}</p> 

      <div className="modalfooter-display">
        <ModalFooter onClose={onClose}/>
      </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}