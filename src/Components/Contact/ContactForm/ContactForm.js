import React from 'react';
import './ContactForm.css'

function ContactForm() {
  return(
   <div className="contact-form container-fluid d-flex bd-highlight" id="contact">
      <form>
        <h4>Get in Touch!</h4>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name"/>
          </div>
        </div><br/>
        <div class="form-group">
           <input type="email" class="form-control" id="inputEmail" placeholder="Email address"/>
           </div>
           <div class="form-group">
            <label id ="input-message" for="FormTextarea">Your Message</label>
            <textarea class="form-control" id="FormTextarea" rows="10"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Send</button>
        </form>
     </div>
  )
}

export default ContactForm