import React from 'react';
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'

function Contact() {
  return(
   <div className="contact-section" id="contact">
     <h1>Contact</h1>
     <ContactForm/>
     </div>
  )
}

export default Contact