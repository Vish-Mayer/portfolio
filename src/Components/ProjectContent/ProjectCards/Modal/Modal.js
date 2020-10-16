import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import Carousel from '../Carousel/Carousel'

import icon from '../../../../Assets/dwn-arrowXS.png'

export default function Modal({open, onClose, image, image2, image3, image4, title, description}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay"/>
    <div className="card text-center d-flex" id="modal">
      <button className="close-modal" onClick={onClose}><img src={icon} alt="left"/></button>
    
      <div className="modal-img"><Carousel img1={image} img2={image2} img3={image3} img4={image4}  /></div>
      <h3 className="card-title modal-title">{title}</h3>
      <p className="modal-description">{description}</p>
    </div>
    </>,
    document.getElementById('portal')
  )
}