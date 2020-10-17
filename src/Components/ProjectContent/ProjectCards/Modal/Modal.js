import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import Carousel from '../Carousel/Carousel'
import icon from '../../../../Assets/closeXS.png'
import icon2 from '../../../../Assets/github.png'

export default function Modal({open, onClose, image, image2, image3, image4, title, description}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay"/>
    <div className="card text-center d-flex" id="modal">
      <div className="modal-img">
        <Carousel img1={image} img2={image2} img3={image3} img4={image4}/>
      </div> 

      <h3 className="card-title modal-title">{title}</h3>

      <p className="modal-description">{description}</p> 

      <button className="close-modal btn" onClick={onClose}>
        <img src={icon}/>
      </button>

      <button className="ext-link btn">
        <img src={icon2} /><h5>View in github</h5>
      </button>
    </div>
    </>,
    document.getElementById('portal')
  )
}