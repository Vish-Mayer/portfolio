import React from 'react';
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'
import ContactLinks from './ContactLinks/ContactLinks'

function Contact() {
  return(
    <div id="contact">
      <h1>Contact</h1>
        <div className="contact-grid container-fluid d-flex justify-content-center" id="contact-grid">
          <div className="row">
            <div className="col-md-7">
              <ContactForm/>
            </div>
            <div className="col-md-5">
              <ContactLinks/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact