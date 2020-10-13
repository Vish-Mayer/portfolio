import React from 'react';
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'
import ContactFooter from './ContactFooter/ContactFooter'

function Contact() {
  return(
    <div className="contact-section" id="contact">
      <h1>Contact</h1>
        <div className="contact-grid d-flex justify-content-center" id="contact-grid">
           <ContactForm/>
        </div>
        <ContactFooter/>
    </div>
  )
}
export default Contact