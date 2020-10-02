import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

function ContactForm() {

  require('dotenv').config()

  const serviceID = process.env.REACT_APP_SERVICE_ID
  const templateID = process.env.REACT_APP_TEMPLATE_ID
  const userID = process.env.REACT_APP_USER_ID

  function sendEmail(e){
    e.preventDefault();
  
    emailjs.sendForm(serviceID, templateID, e.target, userID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    window.alert('Your message has been sent.');
    e.target.reset()
  }

  return(
   <div className="contact-form container-fluid d-flex bd-highlight" id="contact">
      <form onSubmit={sendEmail}>
        <h4>Get in Touch!</h4>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name" name="user_name"/>
          </div>
        </div><br/>
        <div class="form-group">
           <input type="email" class="form-control" id="inputEmail" placeholder="Email address" name="user_email"/>
           </div>
           <div class="form-group">
            <label id ="input-message" for="FormTextarea">Your Message</label>
            <textarea class="form-control" id="FormTextarea" name="message" cols ="70" rows="10"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Send</button>
        </form>
     </div>
     
    
  )
}

export default ContactForm