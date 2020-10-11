import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({open, onClose, image, title, description}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay" />
    <div id="modal" >
      <button id="close-modal" onClick={onClose}>close</button>
      <h3>{title}</h3>
      <img src={image} className="modal-img"/>
      <p className="modal-description">{description}</p>
    </div>
    </>,
    document.getElementById('portal')
  )
}